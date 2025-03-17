import { ref, provide, inject } from 'vue'

const NOTIFICATION_KEY = Symbol('notification')

interface NotificationState {
  show: boolean
  text: string
  color: string
  timeout: number
  showNotification: (message: string, type?: 'error' | 'success' | 'warning' | 'info') => void
}

export const useNotification = () => {
  const state = inject<NotificationState>(NOTIFICATION_KEY)

  if (!state) {
    const show = ref(false)
    const text = ref('')
    const color = ref('error')
    const timeout = ref(5000)

    const showNotification = (message: string, type: 'error' | 'success' | 'warning' | 'info' = 'error') => {
      console.log('Showing notification:', { message, type })
      text.value = message
      color.value = type
      show.value = true
    }

    const newState = {
      show,
      text,
      color,
      timeout,
      showNotification
    }

    provide(NOTIFICATION_KEY, newState)
    return newState
  }

  return state
}
