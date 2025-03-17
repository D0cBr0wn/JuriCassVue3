import { useHealthStore } from '@/stores/healthStore'
import { useApp } from './appComposable'
import { useNotification } from './notificationComposable'

export const useHealth = () => {
  const healthStore = useHealthStore()
  const { addError } = useApp()
  const { showNotification } = useNotification()

  const getHealth = async () => {
    try {
      return await healthStore.getApiHealth()
    } catch (error) {
      if (error instanceof Error) {
        addError(error)
        showNotification(error.message)
      } else {
        const errorMessage = String(error)
        addError(errorMessage)
        showNotification(errorMessage)
      }
      return null
    }
  }

  return {
    getHealth,
    status: healthStore.status,
    loading: healthStore.loading,
    error: healthStore.error
  }
}
