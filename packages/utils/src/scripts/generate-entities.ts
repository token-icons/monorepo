import fs from 'fs'
import path from 'path'
import networks from '../../../common/src/metadata/networks.json'
import tokens from '../../../common/src/metadata/tokens.json'

type TVariant = 'branded' | 'mono'

export type Icon = {
  name: string
  variants: TVariant[]
}

export interface IEntity {
  id: string
  types: {
    exchanges: IExchange[]
    networks: INetwork[]
    tokens: IToken[]
    wallets: IWallet[]
  }
}

export interface IToken {
  id: string
  name: string
  symbol: string
  icon: Icon
  marketCapRank?: number | undefined
  addresses: { [key: string]: string | undefined }
}

export interface IWallet {
  id: string
  name: string
  shortName?: string
  icon: Icon
}

export interface INetwork {
  id: string
  name: string
  shortName?: string
  icon: Icon
  nativeCurrency: string | undefined
  chainId?: number
}

export interface IExchange {
  id: string
  name: string
  type: 'cex' | 'dex'
}

const IGNORED_NATIVE_COINS = ['ethereum', 'eth', 'weth', 'bitcoin', 'btc']

// Keep track of which tokens have been assigned to entities
const assignedTokens = new Set<string>()

// Helper to create entity directory if it doesn't exist
const ensureEntityDirectory = () => {
  const dir = path.join(__dirname, '../../../common/src/metadata/entities')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  return dir
}

// Helper to write entity to JSON file
const writeEntityToFile = (entity: IEntity) => {
  const dir = ensureEntityDirectory()
  const filePath = path.join(dir, `${entity.id}.json`)
  fs.writeFileSync(filePath, JSON.stringify(entity, null, 2))
}

// Create entities from networks first
networks.forEach((network) => {
  const networkData: INetwork = {
    id: network.id,
    name: network.name,
    shortName: network.shortName,
    icon: {
      name: network.id,
      variants: network.variants as TVariant[],
    },
    nativeCurrency: network.nativeCoinId,
    chainId: network.chainId,
  }

  const entity: IEntity = {
    id: network.id,
    types: {
      exchanges: [],
      networks: [networkData],
      tokens: [],
      wallets: [],
    },
  }

  // Add native token if it exists and isn't in ignored list
  if (network.nativeCoinId && !IGNORED_NATIVE_COINS.includes(network.nativeCoinId)) {
    const nativeToken = tokens.find((token) => token.id === network.nativeCoinId)
    if (nativeToken) {
      entity.types.tokens.push({
        id: nativeToken.id,
        name: nativeToken.name,
        symbol: nativeToken.symbol,
        icon: {
          name: nativeToken.id,
          variants: nativeToken.variants as TVariant[],
        },
        marketCapRank: nativeToken.marketCapRank ?? undefined,
        addresses: nativeToken.addresses as { [key: string]: string | undefined },
      })
      assignedTokens.add(nativeToken.id)
    } else {
      console.warn(`Native token ${network.nativeCoinId} not found in tokens list`)
    }
  }

  writeEntityToFile(entity)
})

// Create entities for remaining tokens
tokens.forEach((token) => {
  if (!assignedTokens.has(token.id)) {
    const entity: IEntity = {
      id: token.symbol,
      types: {
        exchanges: [],
        networks: [],
        tokens: [
          {
            id: token.id,
            name: token.name,
            symbol: token.symbol,
            icon: {
              name: token.id,
              variants: token.variants as TVariant[],
            },
            marketCapRank: token.marketCapRank ?? undefined,
            addresses: token.addresses,
          },
        ],
        wallets: [],
      },
    }
    writeEntityToFile(entity)
  }
})

console.log('Entity files generated successfully!')
