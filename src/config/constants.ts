export const APP_NAME = 'News App'
export const APP_DESCRIPTION = '최신 뉴스를 한 곳에서 만나보세요'

export const ROUTES = {
  HOME: '/',
  LATEST: '/latest',
  TRENDING: '/trending',
  CATEGORIES: '/categories',
  CATEGORY: '/category/:slug',
  ARTICLE: '/article/:id',
  SEARCH: '/search',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
  FAQ: '/faq',
} as const

export const API_ENDPOINTS = {
  NEWS: {
    LIST: '/api/news',
    DETAIL: '/api/news/:id',
    TRENDING: '/api/news/trending',
    LATEST: '/api/news/latest',
    SEARCH: '/api/news/search',
  },
  CATEGORIES: {
    LIST: '/api/categories',
    DETAIL: '/api/categories/:slug',
    NEWS: '/api/categories/:slug/news',
  },
  USER: {
    PROFILE: '/api/user/profile',
    PREFERENCES: '/api/user/preferences',
  },
} as const

export const CATEGORIES = [
  { id: '1', name: '정치', slug: 'politics' },
  { id: '2', name: '경제', slug: 'economy' },
  { id: '3', name: '사회', slug: 'society' },
  { id: '4', name: '문화', slug: 'culture' },
  { id: '5', name: '국제', slug: 'international' },
  { id: '6', name: 'IT/과학', slug: 'tech' },
  { id: '7', name: '스포츠', slug: 'sports' },
  { id: '8', name: '연예', slug: 'entertainment' },
] as const

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 20,
  PAGE_SIZE_OPTIONS: [10, 20, 30, 50],
} as const

export const CACHE_KEYS = {
  NEWS_LIST: 'news-list',
  NEWS_DETAIL: 'news-detail',
  CATEGORIES: 'categories',
  USER_PREFERENCES: 'user-preferences',
} as const

export const STORAGE_KEYS = {
  THEME: 'news-app-theme',
  USER_PREFERENCES: 'news-app-preferences',
  RECENT_SEARCHES: 'news-app-recent-searches',
} as const