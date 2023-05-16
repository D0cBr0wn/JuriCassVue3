import { ref } from 'vue'
import { searchApi } from '@/repositories/searchPageRepository'
import { Error } from '@model/Error'
import { SearchResult } from '@model/SearchResult'
import { errors } from '@/controllers/appController'

export let searchResult = ref({})
export let isLoading = ref(false)
export let quickQuery = ref('propriété')
export let query = ref(undefined)
export let exact = ref(false)
export let startDate = ref(undefined)
export let endDate = ref(undefined)
let queryObj = ref({ query: query?.value ?? quickQuery.value })

export const search = async () => {
  try {
    isLoading.value = true
    //TODO remove default value when API will be ready for home query
    let result = await searchApi(queryObj.value)
    // a true adapter implementation would have been a better approach, but it's a small demo project
    // We should also instanciate every object prop but I just really need Decision here
    result.results = result.results.map(r => new SearchResult(r))
    searchResult.value = result
    isLoading.value = false
  } catch (error) {
    errors.value.push(new Error({ message: error }))
  }
}

export const handleSearch = async () => {
  quickQuery.value = undefined //TODO handle default value when API will be ready
  const queryDatas = {
    query: query.value,
    startDate: startDate.value?.split('T')[0],
    endDate: endDate.value?.split('T')[0],
    exact: exact.value ? 'exact' : undefined
  }
  queryObj.value = queryDatas
  await search()
}
