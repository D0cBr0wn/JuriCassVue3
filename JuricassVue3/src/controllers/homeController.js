import { ref } from 'vue'
import { searchApi, apiSearchResult } from '@/repositories/searchPageRepository'
import { Error } from '@model/Error'
import { errors } from '@/controllers/appController'

export const searchResult = ref([])
export const isLoading = ref(false)
export const error = ref(undefined)

export const search = async (query = 'propriété') => {
  try {
    isLoading.value = true
    //TODO remove default value when API will be ready for home query
    await searchApi(query)
    searchResult.value = apiSearchResult.value
    isLoading.value = false
  } catch (error) {
    errors.value.push(new Error({ message: error }))
  }
}
