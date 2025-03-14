import { describe, it, expect, beforeEach } from 'vitest'
import { useApp } from '@/composables/appComposable'
import { Error } from '@/data/model/Error'

describe('appComposable', () => {
  beforeEach(() => {
    const { errors, clearErrors } = useApp()
    clearErrors()
  })

  it('should start with empty errors array', () => {
    const { errors } = useApp()
    expect(errors.value).toEqual([])
  })

  it('should add string error message', () => {
    const { errors, addError } = useApp()
    addError('Test error')
    expect(errors.value).toHaveLength(1)
    expect(errors.value[0]).toBeInstanceOf(Error)
    expect(errors.value[0].message).toBe('Test error')
  })

  it('should add Error object', () => {
    const { errors, addError } = useApp()
    const error = new Error({ message: 'Test error' })
    addError(error)
    expect(errors.value).toHaveLength(1)
    expect(errors.value[0]).toStrictEqual(error)
  })

  it('should clear errors', () => {
    const { errors, addError, clearErrors } = useApp()
    addError('Test error')
    expect(errors.value).toHaveLength(1)
    clearErrors()
    expect(errors.value).toEqual([])
  })
})
