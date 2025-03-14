import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useHome } from '@/composables/homeComposable'
import { useSearchStore } from '@/stores/searchStore'
import { useApp } from '@/composables/appComposable'
import { SearchPage } from '@/data/model/SearchPage'
import { ApiSearchPage } from '@/data/apiModel/ApiSearchPage'

vi.mock('@/stores/searchStore')
vi.mock('@/composables/appComposable')

describe('homeComposable', () => {
  const mockSearchPage = new SearchPage({
    page: 0,
    pageSize: 10,
    results: []
  })

  const mockApiSearchPage = new ApiSearchPage({
    page: 0,
    page_size: 10,
    results: []
  })

  const mockSearchStore = {
    searchApi: vi.fn()
  }

  const mockApp = {
    addError: vi.fn(),
    errors: { value: [] },
    clearErrors: vi.fn()
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useSearchStore).mockReturnValue(mockSearchStore)
    vi.mocked(useApp).mockReturnValue(mockApp)
  })

  describe('search', () => {
    it('should search successfully', async () => {
      mockSearchStore.searchApi.mockResolvedValue(mockApiSearchPage)
      const { search, searchResults, isLoading } = useHome()

      await search()

      expect(mockSearchStore.searchApi).toHaveBeenCalled()
      expect(searchResults.value).toBeInstanceOf(SearchPage)
      expect(isLoading.value).toBe(false)
      expect(mockApp.addError).not.toHaveBeenCalled()
    })

    it('should handle search error', async () => {
      const error = new Error('API Error')
      mockSearchStore.searchApi.mockRejectedValue(error)
      const { search, isLoading } = useHome()

      await search()

      expect(mockSearchStore.searchApi).toHaveBeenCalled()
      expect(isLoading.value).toBe(false)
      expect(mockApp.addError).toHaveBeenCalledWith(error)
    })
  })

  describe('handleSearch', () => {
    it('should update query and trigger search', async () => {
      mockSearchStore.searchApi.mockResolvedValue(mockApiSearchPage)
      const { handleSearch, query, exact, startDate, endDate } = useHome()

      query.value = 'test'
      exact.value = true
      startDate.value = '2024-03-14T00:00:00'
      endDate.value = '2024-03-15T00:00:00'

      await handleSearch()

      expect(mockSearchStore.searchApi).toHaveBeenCalledWith({
        query: 'test',
        startDate: '2024-03-14',
        endDate: '2024-03-15',
        exact: true
      })
    })
  })

  describe('initial state', () => {
    it('should have correct initial values', () => {
      const { searchResults, isLoading, quickQuery, query, exact, startDate, endDate, popDrawer } = useHome()

      expect(searchResults.value).toBeInstanceOf(SearchPage)
      expect(isLoading.value).toBe(false)
      expect(quickQuery.value).toBe('propriété')
      expect(query.value).toBe('')
      expect(exact.value).toBe(false)
      expect(startDate.value).toBeUndefined()
      expect(endDate.value).toBeUndefined()
      expect(popDrawer.value).toBe(false)
    })
  })
})
