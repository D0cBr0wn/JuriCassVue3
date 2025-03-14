import { ref, Ref } from 'vue'
import { Error } from '@/data/model/Error'

export const useApp = () => {
  const errors: Ref<Error[]> = ref([])

  const addError = (error: string | Error) => {
    if (typeof error === 'string') {
      errors.value.push(new Error({ message: error }))
    } else {
      errors.value.push(error)
    }
  }

  const clearErrors = () => {
    errors.value = []
  }

  return {
    errors,
    addError,
    clearErrors
  }
}
