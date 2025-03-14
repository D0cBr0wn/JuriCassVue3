import { defineStore } from 'pinia'
import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { Health } from '@/data/model/Health'

const apiService = new JudilibreApiService()

export const useHealthStore = defineStore('health', () => {
  const status = ref<Health | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getApiHealth = async (): Promise<Health | null> => {
    loading.value = true
    error.value = null

    try {
      const result = await apiService.fetch('healthcheck')
      status.value = new Health(result)
      return status.value
    } catch (err) {
      error.value = (err as Error).message
      return null
    } finally {
      loading.value = false
    }
  }

  return { status, loading, error, getApiHealth }
})
