import { search, searchResult, isLoading } from '@/controllers/homeController'
import { errors } from '@/controllers/appController'
import * as repo from '@/repositories/searchPageRepository'
import { createSearchPageFixture, createSearchPageNoResultsFixture } from '@fixtures/SearchPageFixture'

afterEach(() => {
  jest.clearAllMocks()
  searchResult.value = {}
})

describe('HomeController tests', () => {
  test('Check init values', () => {
    expect(searchResult.value).toStrictEqual({})
    expect(errors.value).toStrictEqual([])
    expect(isLoading.value).toBeFalsy()
  })

  test('Search - no result', async () => {
    const searchPage = createSearchPageNoResultsFixture()
    repo.searchApi = jest.fn(() => searchPage)
    await search()
    expect(repo.searchApi).toHaveBeenCalled()
    expect(searchResult.value).toEqual(searchPage)
  })

  test('Search - result', async () => {
    const searchPage = createSearchPageFixture()
    repo.searchApi = jest.fn(() => searchPage)
    await search()
    expect(repo.searchApi).toHaveBeenCalled()
    expect(searchResult.value).toEqual(searchPage)
  })

  test('Search - error handling', async () => {
    repo.searchApi = jest.fn(() => {
      throw 'Test error message'
    })
    expect(errors.value).toStrictEqual([])
    await search()
    expect(repo.searchApi).toHaveBeenCalled()
    expect(searchResult.value).toEqual({})
    expect(errors.value[0].message).toStrictEqual('Test error message')
  })
})
