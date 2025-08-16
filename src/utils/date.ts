export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
    if (diffHours < 1) {
      const diffMinutes = Math.ceil(diffTime / (1000 * 60))
      if (diffMinutes < 1) {
        return '방금 전'
      }
      return `${diffMinutes}분 전`
    }
    return `${diffHours}시간 전`
  } else if (diffDays === 1) {
    return '어제'
  } else if (diffDays < 7) {
    return `${diffDays}일 전`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks}주 전`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months}개월 전`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years}년 전`
  }
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('ko-KR', {
    month: 'short',
    day: 'numeric',
  }).format(date)
}