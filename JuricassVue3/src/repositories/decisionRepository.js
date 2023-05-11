import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { Decision } from '@model/Decision'

export const apiDecision = ref({})
const apiService = new JudilibreApiService()

export const getDecisionApi = async id => {
  const result = await apiService.fetch(`decision/?id=${id}&resolve_references=true`)
  apiDecision.value = new Decision(result)
}
