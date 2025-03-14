import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useDecision } from '@/composables/decisionComposable'
import { useDecisionStore } from '@/stores/decisionStore'
import { useApp } from '@/composables/appComposable'
import { DecisionFull } from '@/data/model/DecisionFull'
import { ApiDecisionFull } from '@/data/apiModel/ApiDecisionFull'

vi.mock('@/stores/decisionStore')
vi.mock('@/composables/appComposable')

describe('decisionComposable', () => {
  const mockDecision = new DecisionFull({
    id: 'test-id',
    jurisdiction: 'test-jurisdiction'
  })

  const mockApiDecision = new ApiDecisionFull({
    id: 'test-id',
    jurisdiction: 'test-jurisdiction'
  })

  const mockDecisionStore = {
    getDecisionApi: vi.fn()
  }

  const mockApp = {
    addError: vi.fn(),
    errors: { value: [] },
    clearErrors: vi.fn()
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useDecisionStore).mockReturnValue(mockDecisionStore)
    vi.mocked(useApp).mockReturnValue(mockApp)
  })

  describe('getDecision', () => {
    it('should get decision successfully', async () => {
      mockDecisionStore.getDecisionApi.mockResolvedValue(mockApiDecision)
      const { getDecision, decision, isLoading } = useDecision()

      await getDecision('test-id')

      expect(mockDecisionStore.getDecisionApi).toHaveBeenCalledWith('test-id')
      expect(decision.value).toBeInstanceOf(DecisionFull)
      expect(isLoading.value).toBe(false)
      expect(mockApp.addError).not.toHaveBeenCalled()
    })

    it('should handle error when getting decision', async () => {
      const error = new Error('API Error')
      mockDecisionStore.getDecisionApi.mockRejectedValue(error)
      const { getDecision, isLoading } = useDecision()

      await getDecision('test-id')

      expect(mockDecisionStore.getDecisionApi).toHaveBeenCalledWith('test-id')
      expect(isLoading.value).toBe(false)
      expect(mockApp.addError).toHaveBeenCalledWith(error)
    })
  })

  describe('initial state', () => {
    it('should have correct initial values', () => {
      const { decision, isLoading } = useDecision()

      expect(decision.value).toBeInstanceOf(DecisionFull)
      expect(isLoading.value).toBe(false)
    })
  })
})
