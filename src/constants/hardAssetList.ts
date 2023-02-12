import { AddressMapping } from '../types'

const hardAssetList: AddressMapping[] = [
  {
    tokenSymbol: 'USDC',
    tokenAddresses: [{ address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=024',
    tokenName: 'USD Coin',
  },
  {
    tokenSymbol: 'USDT',
    tokenAddresses: [{ address: '0xdac17f958d2ee523a2206206994597c13d831ec7', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=024',
    tokenName: 'Tether',
  },
  {
    tokenSymbol: 'BUSD',
    tokenAddresses: [{ address: '0x4fabb145d64652a948d72533023f6e7a623c7c53', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/binance-usd.png?v=023',
    tokenName: 'Binance USD',
  },
  {
    tokenSymbol: 'DAI',
    tokenAddresses: [{ address: '0x6b175474e89094c44da98b954eedeac495271d0f', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/multi-collateral-dai.png?v=023',
    tokenName: 'Dai',
  },
  {
    tokenSymbol: 'WBTC',
    tokenAddresses: [{ address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/bitcoin.png?v=023',
    tokenName: 'Wrapped Bitcoin',
  },
  {
    tokenSymbol: 'WETH',
    tokenAddresses: [{ address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/ethereum.png?v=023',
    tokenName: 'Wrapped Ether',
  },
  {
    tokenSymbol: 'WBNB',
    tokenAddresses: [{ address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', chainId: '56' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/bnb.png?v=023',
    tokenName: 'Binance Coin',
  },
  {
    tokenSymbol: 'WMATIC',
    tokenAddresses: [{ address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', chainId: '137' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/polygon.png?v=023',
    tokenName: 'Matic',
  },
  {
    tokenSymbol: 'DOGE',
    tokenAddresses: [
      {
        address: '0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101',
        chainId: '2000',
      },
    ],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/dogecoin.png?v=023',
    tokenName: 'Dogecoin',
  },
  {
    tokenSymbol: 'ADA',
    tokenAddresses: [{ address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', chainId: '56' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/cardano.png?v=023',
    tokenName: 'Cardano',
  },
  {
    tokenSymbol: 'WCRO',
    tokenAddresses: [{ address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/cronos.png?v=023',
    tokenName: 'Crypto.com Coin',
  },
  {
    tokenSymbol: 'FTM',
    tokenAddresses: [{ address: '0x4e15361fd6b4bb609fa63c81a2be19d873717870', chainId: '1' }],
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/fantom.png?v=023',
    tokenName: 'Fantom',
  },
]

export default hardAssetList
