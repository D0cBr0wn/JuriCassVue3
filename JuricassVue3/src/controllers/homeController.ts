import { ref } from 'vue'
//import { searchApi } from '@/repositories/searchPageRepository'
import { useSearchStore } from '@/stores/searchStore'
import { Error } from '@model/Error'
import { errors } from '@/controllers/appController'
import { Decision } from '@/data/model/Decision'
import { ApiSearchPage } from '@/data/apiModel/ApiSearchPage'
import { SearchResult } from '@/data/apiModel/SearchResult_toDelete'
import { SearchPage } from '@/data/model/SearchPage'

export let searchResults = ref(new SearchResult())
export let isLoading = ref(false)
export let quickQuery = ref('propriété')
export let query = ref(undefined)
export let exact = ref(false)
export let startDate = ref(undefined)
export let endDate = ref(undefined)
export let popDrawer = ref(false)

let queryObj = ref({ query: query?.value ?? quickQuery.value })

export const search = async () => {
  const store = useSearchStore()
  try {
    isLoading.value = true
    //TODO remove default value when API will be ready for home query
    let apiResult: ApiSearchPage = await store.searchApi(queryObj.value)

    if (apiResult) {
      searchResults.value = SearchPage.adaptFromApi(apiResult)
    }

    if (searchResults.value.results.length) popDrawer.value = false
    isLoading.value = false
  } catch (error) {
    console.error(error)
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
