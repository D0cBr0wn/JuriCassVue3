import { ref, Ref } from 'vue'
import { useDecisionStore } from '@/stores/decisionStore'
import { Error } from '@model/Error'
import { errors } from '@/controllers/appController'
import { DecisionFull } from '@/data/model/DecisionFull'

export let decision: Ref<DecisionFull> = ref(new DecisionFull())
export let isLoading: Ref<boolean> = ref(false)

export const getDecision = async id => {
  const store = useDecisionStore()
  try {
    isLoading.value = true
    let result = await store.getDecisionApi(id)

    decision.value = DecisionFull.adaptFromApi(result)

    isLoading.value = false
  } catch (error) {
    console.error(error)
    errors.value.push(new Error({ message: error }))
  }
}
