import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { Health } from '@model/Health'

export const status = ref({})
const apiService = new JudilibreApiService()

export const getApiHealth = async () => {
  const result = await apiService.fetch('healthcheck')
  status.value = new Health(result)
}
