import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CelebritySwap',
  description:
    'The most popular AMM on BSC by user count! Earn CELEBRITY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CelebritySwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('CelebritySwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('CelebritySwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('CelebritySwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('CelebritySwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('CelebritySwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('CelebritySwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('CelebritySwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('CelebritySwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('CelebritySwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('CelebritySwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('CelebritySwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('CelebritySwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('CelebritySwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('CelebritySwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('CelebritySwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('CelebritySwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('CelebritySwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('CelebritySwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('CelebritySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('CelebritySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('CelebritySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('CelebritySwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('CelebritySwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('CelebritySwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('CelebritySwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('CelebritySwap')}`,
      }
    default:
      return null
  }
}
