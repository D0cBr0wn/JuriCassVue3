import { defineStore } from 'pinia'
import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { ApiDecisionFull } from '@/data/apiModel/ApiDecisionFull'

const apiService = new JudilibreApiService()

export const useDecisionStore = defineStore('decision', () => {
  const apiDecision = ref<ApiDecisionFull | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getDecisionApi = async (id: string): Promise<ApiDecisionFull | null> => {
    loading.value = true
    error.value = null

    try {
      const result = await apiService.fetch(`decision/?id=${id}&resolve_references=true`)
      apiDecision.value = new ApiDecisionFull(result)
      return apiDecision.value
    } catch (err) {
      console.error(err)
      error.value = (err as Error).message
      return null
    } finally {
      loading.value = false
    }
  }

  return { apiDecision, loading, error, getDecisionApi }
})
