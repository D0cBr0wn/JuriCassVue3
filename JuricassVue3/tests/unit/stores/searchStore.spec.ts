import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useSearchStore } from '@/stores/searchStore'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { ApiSearchPage } from '@/data/apiModel/ApiSearchPage'

vi.mock('@/services/JudilibreApiService')

describe('searchStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  describe('searchApi', () => {
    const mockQuery = {
      query: 'test',
      startDate: '2024-03-14',
      endDate: '2024-03-15',
      exact: true
    }

    const mockSearchResult = new ApiSearchPage({
      page: 0,
      page_size: 10,
      results: []
    })

    it('should search successfully', async () => {
      const mockFetch = vi.fn().mockResolvedValue(mockSearchResult)
      const mockService = {
        fetch: mockFetch,
        apiKey: 'test-key',
        baseUrl: 'test-url',
        setHeader: vi.fn(),
        handleResponseServer: vi.fn()
      }
      vi.mocked(JudilibreApiService).mockImplementation(() => mockService)

      const store = useSearchStore()
      const result = await store.searchApi(mockQuery)

      expect(mockFetch).toHaveBeenCalledWith(
        'search/?query=test&date_start=2024-03-14&date_end=2024-03-15&operator=true&resolve_references=true'
      )
      expect(result).toBeInstanceOf(ApiSearchPage)
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
      expect(store.searchResults).toEqual(mockSearchResult)
    })

    it('should handle search error', async () => {
      const error = new Error('API Error')
      const mockFetch = vi.fn().mockRejectedValue(error)
      const mockService = {
        fetch: mockFetch,
        apiKey: 'test-key',
        baseUrl: 'test-url',
        setHeader: vi.fn(),
        handleResponseServer: vi.fn()
      }
      vi.mocked(JudilibreApiService).mockImplementation(() => mockService)

      const store = useSearchStore()
      const result = await store.searchApi(mockQuery)

      expect(mockFetch).toHaveBeenCalledWith(
        'search/?query=test&date_start=2024-03-14&date_end=2024-03-15&operator=true&resolve_references=true'
      )
      expect(result).toBeNull()
      expect(store.loading).toBe(false)
      expect(store.error).toBe('API Error')
      expect(store.searchResults).toBeNull()
    })
  })

  describe('resetSearchResults', () => {
    it('should reset search results and error', () => {
      const store = useSearchStore()
      store.searchResults = new ApiSearchPage({ page: 1 })
      store.error = 'Some error'

      store.resetSearchResults()

      expect(store.searchResults).toBeNull()
      expect(store.error).toBeNull()
    })
  })

  describe('initial state', () => {
    it('should have correct initial values', () => {
      const store = useSearchStore()

      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
      expect(store.searchResults).toBeNull()
    })
  })
})
