import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                News
              </span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
                홈
              </a>
              <a href="/latest" className="text-sm font-medium transition-colors hover:text-primary">
                최신 뉴스
              </a>
              <a href="/trending" className="text-sm font-medium transition-colors hover:text-primary">
                인기 뉴스
              </a>
              <a href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
                카테고리
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              aria-label="검색"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>

            <Button
              variant="ghost" 
              size="icon"
              className="hidden md:flex"
              aria-label="알림"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </Button>

            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
                홈
              </a>
              <a href="/latest" className="text-sm font-medium transition-colors hover:text-primary">
                최신 뉴스
              </a>
              <a href="/trending" className="text-sm font-medium transition-colors hover:text-primary">
                인기 뉴스
              </a>
              <a href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
                카테고리
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}