import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { Newspaper, Tags, Search } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">뉴스 수집 플랫폼</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          실시간 뉴스를 수집하고 키워드로 관리하는 플랫폼입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="w-5 h-5" />
              뉴스 검색
            </CardTitle>
            <CardDescription>
              Naver API를 통해 실시간 뉴스를 검색할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/news">
                <Search className="w-4 h-4 mr-2" />
                뉴스 검색하기
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tags className="w-5 h-5" />
              키워드 관리
            </CardTitle>
            <CardDescription>
              뉴스 검색에 사용할 키워드를 추가하고 관리할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" variant="outline">
              <Link to="/keywords">
                키워드 관리
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="w-5 h-5" />
              API 문서
            </CardTitle>
            <CardDescription>
              백엔드 API의 Swagger 문서를 확인할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" variant="secondary">
              <a 
                href="http://localhost:3000/api-docs" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                API 문서 보기
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="font-medium">🔍 실시간 뉴스 검색</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Naver 뉴스 API를 통해 최신 뉴스를 실시간으로 검색할 수 있습니다.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🏷️ 키워드 기반 관리</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              관심 있는 키워드를 등록하고 관련 뉴스를 효율적으로 관리하세요.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">📊 데이터베이스 저장</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              수집한 뉴스와 키워드는 MySQL 데이터베이스에 안전하게 저장됩니다.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">🎨 모던한 UI/UX</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React + shadcn/ui로 구현된 직관적이고 반응형 인터페이스를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}