import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>뉴스 검색</CardTitle>
          <CardDescription>
            Naver API를 통해 실시간 뉴스를 검색할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            뉴스 검색 기능은 곧 구현될 예정입니다.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}