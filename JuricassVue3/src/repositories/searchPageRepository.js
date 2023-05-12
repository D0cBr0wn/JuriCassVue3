import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { SearchPage } from '@model/SearchPage'

const apiService = new JudilibreApiService()

export const searchApi = async query => {
  const result = await apiService.fetch(`search/?query=${query}&resolve_references=true`)
  return new SearchPage(result)
}
