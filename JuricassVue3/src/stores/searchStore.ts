import { defineStore } from 'pinia'
import { ref } from 'vue'
import { JudilibreApiService } from '@/services/JudilibreApiService'
import { ApiSearchPage } from '@/data/apiModel/ApiSearchPage'

const apiService = new JudilibreApiService()

export const useSearchStore = defineStore('search', () => {
  const searchResults = ref<ApiSearchPage | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const searchApi = async (queryObj: {
    query: string
    startDate?: string
    endDate?: string
    exact?: boolean
  }): Promise<ApiSearchPage | null> => {
    loading.value = true
    error.value = null

    try {
      let queryString = `?query=${queryObj.query}`
      if (queryObj.startDate) queryString += `&date_start=${queryObj.startDate}`
      if (queryObj.endDate) queryString += `&date_end=${queryObj.endDate}`
      if (queryObj.exact) queryString += `&operator=${queryObj.exact}`
      queryString += '&resolve_references=true'

      const result = await apiService.fetch(`search/${queryString}`)

      searchResults.value = new ApiSearchPage(result)
      return searchResults.value
    } catch (err) {
      error.value = (err as Error).message
      return null
    } finally {
      loading.value = false
    }
  }

  const resetSearchResults = () => {
    searchResults.value = null
    error.value = null
  }

  return { searchResults, loading, error, searchApi, resetSearchResults }
})
