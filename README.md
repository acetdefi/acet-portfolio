# Acet Portfolio

Sample app to get portfolio data

## Usage

1. `npm install` or `yarn`
2. Replace `'---- BSC PROVIDER URL ----'` and `'---- Staker Address ----'` in `src/main.js`
3. `npm run dev` or `yarn dev`

## Example Response

````
[
  {
    pid: 48,
    stakingToken: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    rewardToken: '0x9F3BCBE48E8b754F331Dfc694A894e8E686aC31D',
    stakingAmount: 100,
    pendingReward: 0.14158854166666304
  },
  {
    pid: 353,
    stakingToken: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    rewardToken: '0x9F3BCBE48E8b754F331Dfc694A894e8E686aC31D',
    stakingAmount: 100,
    pendingReward: 0.1418489583333297
  },
  {
    pid: 4322,
    stakingToken: '0x9F3BCBE48E8b754F331Dfc694A894e8E686aC31D',
    rewardToken: '0x9F3BCBE48E8b754F331Dfc694A894e8E686aC31D',
    stakingAmount: 600,
    pendingReward: 2.136328125
  },
  {
    pid: 12,
    stakingToken: '0xa5cF212d889Dc9c05d47924Cf2e909fb50Df928F',
    rewardToken: '0x9F3BCBE48E8b754F331Dfc694A894e8E686aC31D',
    stakingAmount: 119.56238973043648,
    pendingReward: 1.3087816038140796
  }
]
````

## Pool Contract Address (BSC Mainnet)
`BUSD: 0x38506a479e8959150466ce9253c19089fd0907d7`
<br/>
`ACT: 0x76c05855E1EaeC618Aa56E02027F0C469661435b`
<br/>
`ACT-BUSD: 0xfb62ea552eeba8b00cc5db56ba8d7c50429c0001`
