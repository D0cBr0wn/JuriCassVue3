import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useHealth } from '@/composables/healthComposable'
import { useHealthStore } from '@/stores/healthStore'
import { useApp } from '@/composables/appComposable'
import { Health } from '@/data/model/Health'

vi.mock('@/stores/healthStore')
vi.mock('@/composables/appComposable')

describe('healthComposable', () => {
  const mockHealth = new Health({ status: 'ok' })
  const mockHealthStore = {
    status: { value: mockHealth },
    loading: { value: false },
    error: { value: null },
    getApiHealth: vi.fn()
  }

  const mockApp = {
    addError: vi.fn()
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useHealthStore).mockReturnValue(mockHealthStore)
    vi.mocked(useApp).mockReturnValue(mockApp)
  })

  it('should get health status successfully', async () => {
    mockHealthStore.getApiHealth.mockResolvedValue(mockHealth)
    const { getHealth } = useHealth()

    const result = await getHealth()

    expect(result).toBe(mockHealth)
    expect(mockHealthStore.getApiHealth).toHaveBeenCalled()
    expect(mockApp.addError).not.toHaveBeenCalled()
  })

  it('should handle error when getting health status', async () => {
    const error = new Error('API Error')
    mockHealthStore.getApiHealth.mockRejectedValue(error)
    const { getHealth } = useHealth()

    const result = await getHealth()

    expect(result).toBeNull()
    expect(mockHealthStore.getApiHealth).toHaveBeenCalled()
    expect(mockApp.addError).toHaveBeenCalledWith(error)
  })

  it('should expose store properties', () => {
    const { status, loading, error } = useHealth()

    expect(status).toBe(mockHealthStore.status)
    expect(loading).toBe(mockHealthStore.loading)
    expect(error).toBe(mockHealthStore.error)
  })
})
