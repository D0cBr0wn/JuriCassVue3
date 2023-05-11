import { ref } from 'vue'
import { searchApi, apiSearchResult } from '@/repositories/searchPageRepository'
import { Error } from '@model/Error'
import { SearchResult } from '@model/SearchResult'
import { errors } from '@/controllers/appController'

export const searchResult = ref([])
export const isLoading = ref(false)

export const search = async (query = 'propriété') => {
  try {
    isLoading.value = true
    //TODO remove default value when API will be ready for home query
    await searchApi(query)
    searchResult.value = apiSearchResult.value
    // a true adapter implementation would have been a better approach, but it's a small demo project
    // We should also instanciate every object prop but I just really need Decision here
    searchResult.value.results = searchResult.value.results.map(r => new SearchResult(r))
    isLoading.value = false
  } catch (error) {
    errors.value.push(new Error({ message: error }))
  }
}
