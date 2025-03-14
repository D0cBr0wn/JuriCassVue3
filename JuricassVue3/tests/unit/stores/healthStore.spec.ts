import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useHealthStore } from '@/stores/healthStore'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { Health as ApiHealth } from '@/data/apiModel/Health'
import { Health } from '@/data/model/Health'

vi.mock('@/services/JudilibreApiService')

describe('healthStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  describe('getApiHealth', () => {
    const mockApiHealth = new ApiHealth({
      status: 'ok'
    })

    it('should fetch health status successfully', async () => {
      const mockFetch = vi.fn().mockResolvedValue(mockApiHealth)
      const mockService = {
        fetch: mockFetch,
        apiKey: 'test-key',
        baseUrl: 'test-url',
        setHeader: vi.fn(),
        handleResponseServer: vi.fn()
      }
      vi.mocked(JudilibreApiService).mockImplementation(() => mockService)

      const store = useHealthStore()
      const result = await store.getApiHealth()

      expect(mockFetch).toHaveBeenCalledWith('healthcheck')
      expect(result).toBeInstanceOf(Health)
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
      expect(store.status?.status).toBe('ok')
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

      const store = useHealthStore()
      const result = await store.getApiHealth()

      expect(mockFetch).toHaveBeenCalledWith('healthcheck')
      expect(result).toBeNull()
      expect(store.loading).toBe(false)
      expect(store.error).toBe('API Error')
      expect(store.status).toBeNull()
    })
  })

  describe('initial state', () => {
    it('should have correct initial values', () => {
      const store = useHealthStore()

      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
      expect(store.status).toBeNull()
    })
  })
})
