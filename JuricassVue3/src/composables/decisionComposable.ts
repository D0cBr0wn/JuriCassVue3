import { ref, Ref } from 'vue'
import { useDecisionStore } from '@/stores/decisionStore'
import { useApp } from './appComposable'
import { useNotification } from './notificationComposable'
import { DecisionFull } from '@/data/model/DecisionFull'

export const useDecision = () => {
  const decisionStore = useDecisionStore()
  const { addError } = useApp()
  const { showNotification } = useNotification()

  const decision: Ref<DecisionFull> = ref(new DecisionFull())
  const isLoading: Ref<boolean> = ref(false)

  const getDecision = async (id: string) => {
    try {
      isLoading.value = true
      const result = await decisionStore.getDecisionApi(id)

      if (result) {
        decision.value = DecisionFull.adaptFromApi(result)
      }
    } catch (error) {
      if (error instanceof Error) {
        addError(error)
        showNotification(error.message)
      } else {
        const errorMessage = String(error)
        addError(errorMessage)
        showNotification(errorMessage)
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    decision,
    isLoading,
    getDecision
  }
}
