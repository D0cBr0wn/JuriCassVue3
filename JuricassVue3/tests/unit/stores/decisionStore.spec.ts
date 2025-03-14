import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDecisionStore } from '@/stores/decisionStore'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { ApiDecisionFull } from '@/data/apiModel/ApiDecisionFull'
import { DecisionFull } from '@/data/model/DecisionFull'
import { ApiZone } from '@/data/apiModel/ApiZone'

vi.mock('@/services/JudilibreApiService')

describe('decisionStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  describe('getDecisionApi', () => {
    const mockDecisionId = '123456'
    const mockApiDecision = new ApiDecisionFull({
      id: mockDecisionId,
      text: 'Test decision text',
      zones: {
        introduction: [],
        expose: [],
        moyens: [],
        motivations: [],
        dispositif: [],
        annexes: []
      }
    })

    it('should fetch decision successfully', async () => {
      const mockFetch = vi.fn().mockResolvedValue(mockApiDecision)
      const mockService = {
        fetch: mockFetch,
        apiKey: 'test-key',
        baseUrl: 'test-url',
        setHeader: vi.fn(),
        handleResponseServer: vi.fn()
      }
      vi.mocked(JudilibreApiService).mockImplementation(() => mockService)

      const store = useDecisionStore()
      const result = await store.getDecisionApi(mockDecisionId)

      expect(mockFetch).toHaveBeenCalledWith(`decision/?id=${mockDecisionId}&resolve_references=true`)
      expect(result).toBeInstanceOf(ApiDecisionFull)
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
      expect(store.apiDecision).toEqual(mockApiDecision)
    })

    it('should handle fetch error', async () => {
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

      const store = useDecisionStore()
      const result = await store.getDecisionApi(mockDecisionId)

      expect(mockFetch).toHaveBeenCalledWith(`decision/?id=${mockDecisionId}&resolve_references=true`)
      expect(result).toBeNull()
      expect(store.loading).toBe(false)
      expect(store.error).toBe('API Error')
      expect(store.apiDecision).toBeNull()
    })
  })

  describe('initial state', () => {
    it('should have correct initial values', () => {
      const store = useDecisionStore()

      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
      expect(store.apiDecision).toBeNull()
    })
  })
})
