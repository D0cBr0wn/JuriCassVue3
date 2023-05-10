import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { SearchPage } from '@model/SearchPage'

export const apiSearchResult = ref({})
const apiService = new JudilibreApiService()

export const searchApi = async query => {
  const result = await apiService.fetch(`search/?query=${query}&resolve_references=true`)
  apiSearchResult.value = new SearchPage(result)
}
