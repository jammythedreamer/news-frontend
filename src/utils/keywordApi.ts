import { api } from './api'
import type { Keyword, CreateKeywordDto, UpdateKeywordDto } from '../types'

export const keywordApi = {
  // 키워드 목록 조회
  async getKeywords(): Promise<Keyword[]> {
    return api.get<Keyword[]>('/keywords')
  },

  // 키워드 상세 조회
  async getKeyword(id: number): Promise<Keyword> {
    return api.get<Keyword>(`/keywords/${id}`)
  },

  // 키워드 생성
  async createKeyword(data: CreateKeywordDto): Promise<Keyword> {
    return api.post<Keyword>('/keywords', data)
  },

  // 키워드 수정
  async updateKeyword(id: number, data: UpdateKeywordDto): Promise<Keyword> {
    return api.put<Keyword>(`/keywords/${id}`, data)
  },

  // 키워드 삭제
  async deleteKeyword(id: number): Promise<void> {
    return api.delete<void>(`/keywords/${id}`)
  },
}