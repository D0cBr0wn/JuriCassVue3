import { useHealthStore } from '@/stores/healthStore'
import { useApp } from './appComposable'

export const useHealth = () => {
  const healthStore = useHealthStore()
  const { addError } = useApp()

  const getHealth = async () => {
    try {
      return await healthStore.getApiHealth()
    } catch (error) {
      if (error instanceof Error) {
        addError(error)
      } else {
        addError(String(error))
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
