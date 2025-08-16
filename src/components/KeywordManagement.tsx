import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react'
import { keywordApi } from '../utils/keywordApi'
import type { Keyword, CreateKeywordDto, UpdateKeywordDto } from '../types'

export default function KeywordManagement() {
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingKeyword, setEditingKeyword] = useState<Keyword | null>(null)
  const [formData, setFormData] = useState<CreateKeywordDto>({ name: '', status: true })

  // 키워드 목록 조회
  const fetchKeywords = async () => {
    try {
      setLoading(true)
      const data = await keywordApi.getKeywords()
      setKeywords(data)
      setError(null)
    } catch (err) {
      setError('키워드 목록을 불러오는데 실패했습니다.')
      console.error('Failed to fetch keywords:', err)
    } finally {
      setLoading(false)
    }
  }

  // 키워드 생성
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await keywordApi.createKeyword(formData)
      setIsCreateDialogOpen(false)
      setFormData({ name: '', status: true })
      fetchKeywords()
    } catch (err) {
      setError('키워드 생성에 실패했습니다.')
      console.error('Failed to create keyword:', err)
    }
  }

  // 키워드 수정
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingKeyword) return

    try {
      const updateData: UpdateKeywordDto = {
        name: formData.name,
        status: formData.status,
      }
      await keywordApi.updateKeyword(editingKeyword.id, updateData)
      setIsEditDialogOpen(false)
      setEditingKeyword(null)
      setFormData({ name: '', status: true })
      fetchKeywords()
    } catch (err) {
      setError('키워드 수정에 실패했습니다.')
      console.error('Failed to update keyword:', err)
    }
  }

  // 키워드 삭제
  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      await keywordApi.deleteKeyword(id)
      fetchKeywords()
    } catch (err) {
      setError('키워드 삭제에 실패했습니다.')
      console.error('Failed to delete keyword:', err)
    }
  }

  // 수정 모달 열기
  const openEditDialog = (keyword: Keyword) => {
    setEditingKeyword(keyword)
    setFormData({ name: keyword.name, status: keyword.status })
    setIsEditDialogOpen(true)
  }

  // 상태 토글
  const toggleStatus = async (keyword: Keyword) => {
    try {
      await keywordApi.updateKeyword(keyword.id, { status: !keyword.status })
      fetchKeywords()
    } catch (err) {
      setError('상태 변경에 실패했습니다.')
      console.error('Failed to toggle status:', err)
    }
  }

  useEffect(() => {
    fetchKeywords()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">로딩 중...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>키워드 관리</CardTitle>
              <CardDescription>
                뉴스 검색에 사용할 키워드를 관리합니다.
              </CardDescription>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  키워드 추가
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>키워드 추가</DialogTitle>
                  <DialogDescription>
                    새로운 키워드를 추가합니다.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreate} className="space-y-4">
                  <div>
                    <Label htmlFor="name">키워드 이름</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="키워드를 입력하세요"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="status"
                      checked={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                    />
                    <Label htmlFor="status">활성화</Label>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsCreateDialogOpen(false)}
                    >
                      취소
                    </Button>
                    <Button type="submit">추가</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>키워드</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>생성일</TableHead>
                <TableHead className="text-right">작업</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywords.map((keyword) => (
                <TableRow key={keyword.id}>
                  <TableCell className="font-medium">{keyword.id}</TableCell>
                  <TableCell>{keyword.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant={keyword.status ? 'default' : 'secondary'}
                      className="cursor-pointer"
                      onClick={() => toggleStatus(keyword)}
                    >
                      {keyword.status ? (
                        <><Check className="w-3 h-3 mr-1" /> 활성</>
                      ) : (
                        <><X className="w-3 h-3 mr-1" /> 비활성</>
                      )}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(keyword.createdAt).toLocaleDateString('ko-KR')}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(keyword)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(keyword.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {keywords.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              등록된 키워드가 없습니다.
            </div>
          )}
        </CardContent>
      </Card>

      {/* 수정 다이얼로그 */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>키워드 수정</DialogTitle>
            <DialogDescription>
              키워드 정보를 수정합니다.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <Label htmlFor="edit-name">키워드 이름</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="키워드를 입력하세요"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="edit-status"
                checked={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
              />
              <Label htmlFor="edit-status">활성화</Label>
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
              >
                취소
              </Button>
              <Button type="submit">수정</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}