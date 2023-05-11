import { ref } from 'vue'
import { getDecisionApi, apiDecision } from '@/repositories/decisionRepository'
import { Error } from '@model/Error'
import { Zone } from '@model/Zone'
import { errors } from '@/controllers/appController'

export const decision = ref({})
export const isLoading = ref(false)

export const getDecision = async id => {
  try {
    isLoading.value = true
    await getDecisionApi(id)
    decision.value = apiDecision.value
    // a true adapter implementation would have been a better approach, but it's a small demo project
    // We should also instanciate every object prop but I just really need Zones here
    if (decision.value.zones) {
      let instantiatedZones = []
      for (const [key, value] of Object.entries(decision.value.zones)) {
        value.forEach(segment => {
          const zone = new Zone({
            name: key,
            start: segment.start,
            end: segment.end
          })
          instantiatedZones.push(zone)
        })
      }
      // zones are not sorted by the API so we need to do it here
      instantiatedZones.sort((a, b) => (a.end > b.end ? 1 : -1))
      decision.value.zones = instantiatedZones
    }

    isLoading.value = false
  } catch (error) {
    errors.value.push(new Error({ message: error }))
  }
}
