import { ref, Ref } from 'vue'
import { useSearchStore } from '@/stores/searchStore'
import { useApp } from './appComposable'
import { SearchPage } from '@/data/model/SearchPage'

interface SearchQuery {
  query: string
  startDate?: string
  endDate?: string
  exact?: boolean
}

export const useHome = () => {
  const searchStore = useSearchStore()
  const { addError } = useApp()

  const searchResults: Ref<SearchPage> = ref(new SearchPage({}))
  const isLoading: Ref<boolean> = ref(false)
  const quickQuery: Ref<string> = ref('propriété')
  const query: Ref<string> = ref('')
  const exact: Ref<boolean> = ref(false)
  const startDate: Ref<string | undefined> = ref(undefined)
  const endDate: Ref<string | undefined> = ref(undefined)
  const popDrawer: Ref<boolean> = ref(false)

  const queryObj: Ref<SearchQuery> = ref({ query: query.value || quickQuery.value })

  const search = async () => {
    try {
      isLoading.value = true
      const apiResult = await searchStore.searchApi(queryObj.value)
      if (apiResult) {
        try {
          searchResults.value = SearchPage.adaptFromApi(apiResult)
          console.warn(searchResults.value)
        } catch (error) {
          console.error(error)
        }
      }

      if (searchResults.value.results?.length) {
        popDrawer.value = false
      }
    } catch (error) {
      if (error instanceof Error) {
        addError(error)
      } else {
        addError(String(error))
      }
    } finally {
      isLoading.value = false
    }
  }

  const handleSearch = async () => {
    const queryDatas: SearchQuery = {
      query: query.value || quickQuery.value,
      startDate: startDate.value?.split('T')[0],
      endDate: endDate.value?.split('T')[0],
      exact: exact.value
    }
    queryObj.value = queryDatas
    await search()
  }

  return {
    searchResults,
    isLoading,
    quickQuery,
    query,
    exact,
    startDate,
    endDate,
    popDrawer,
    search,
    handleSearch
  }
}
