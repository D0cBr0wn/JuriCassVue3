import { getDecision, decision, isLoading } from '@/controllers/decisionController'
import { errors } from '@/controllers/appController'
import * as repo from '@/repositories/decisionRepository'
import { createDecisionFixture } from '@fixtures/DecisionFixture'

afterEach(() => {
  jest.clearAllMocks()
  decision.value = {}
})

describe('DecisionController tests', () => {
  test('Check init values', () => {
    expect(decision.value).toStrictEqual({})
    expect(errors.value).toStrictEqual([])
    expect(isLoading.value).toBeFalsy()
  })

  test('GetDecision - no result', async () => {
    repo.getDecisionApi = jest.fn()
    await getDecision()
    expect(repo.getDecisionApi).toHaveBeenCalled()
    expect(decision.value).toEqual(undefined)
  })

  test('GetDecision - result', async () => {
    const fakeDecision = createDecisionFixture()
    repo.getDecisionApi = jest.fn(() => fakeDecision)
    await getDecision()
    expect(repo.getDecisionApi).toHaveBeenCalled()
    expect(decision.value).toEqual(fakeDecision)
  })

  test('GetDecision - error handling', async () => {
    repo.getDecisionApi = jest.fn(() => {
      throw 'Test error message'
    })
    expect(errors.value).toStrictEqual([])
    await getDecision()
    expect(repo.getDecisionApi).toHaveBeenCalled()
    expect(decision.value).toEqual({})
    expect(errors.value[0].message).toStrictEqual('Test error message')
  })
})
