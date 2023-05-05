import { getApiHealth, status } from '@/repositories/healthRepository'

export const getHealth = async () => {
  try {
    await getApiHealth()
    return status.value
  } catch (error) {
    console.error('error needs to be handled : ', error)
  }
}
