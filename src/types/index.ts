export interface NewsArticle {
  id: string
  title: string
  description: string
  content: string
  url: string
  source: {
    id: string | null
    name: string
  }
  author: string | null
  publishedAt: string
  urlToImage: string | null
  category?: string
  tags?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  articleCount?: number
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  preferences?: UserPreferences
}

export interface UserPreferences {
  theme?: 'light' | 'dark' | 'system'
  categories?: string[]
  sources?: string[]
  language?: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}