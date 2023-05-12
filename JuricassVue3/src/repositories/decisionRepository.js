import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { Decision } from '@model/Decision'

const apiService = new JudilibreApiService()

export const getDecisionApi = async id => {
  const result = await apiService.fetch(`decision/?id=${id}&resolve_references=true`)
  return new Decision(result)
}
