/**
 * Manage Fetch action
 * @param {String} url url to fetch
 * @param {String} method  default GET
 * @param {Object} data data to send
 * @param {Object} headersParams  optional headers parameters
 * @returns {Response} response from server
 */
// const baseUrl = import.meta.env.BASE_URL
// const apiKey = import.meta.env.API_KEY
export class JudilibreApiService {
  constructor(baseUrl = import.meta.env.VITE_BASE_URL, apiKey = import.meta.env.VITE_API_KEY) {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
  }

  fetch = async (url, method = 'GET', data, headersParams = {}) => {
    // Set headers

    let headers = this.setHeader(headersParams)

    // Fetch
    try {
      let body
      body = JSON.stringify(data)
      headers['content-type'] = 'application/json'

      const res = await fetch(this.baseUrl + url, { method, headers, body })
      return await this.handleResponseServer(res)
    } catch (error) {
      throw error
    }
  }

  setHeader = headersParams => {
    let h = {
      // 'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Origin': '*',
      KeyId: this.apiKey,
      ...headersParams
    }
    return h
  }

  /**
   * Manage response from server
   * @param {Response} res
   * @returns
   */
  handleResponseServer = async res => {
    // Response
    const contentType = res.headers.get('content-type')
    const jsonType = contentType && contentType.includes('application/json') && !contentType.includes('text/plain')

    let result
    if (res.status === 401) {
      throw res.statusText
    }
    if (res.status === 204) return true
    else {
      result = await (jsonType ? res.json() : res.text())
      // Fetch Error
      if (!res.status.toString().startsWith('20')) {
        // Create error message
        let error
        // error from bdd
        if (result.validationErrors) {
          error = Object.entries(result.validationErrors)
            .map(([key, val]) => `${key} ${typeof val !== 'object' ? val.toLocaleLowerCase() : ''}`)
            .join('\r\n')
        } else {
          // handle undefined error
          error = Object.entries(typeof result === 'object' ? result : [result])
            .filter(([k, v]) => {
              if (v && typeof v === 'object')
                return Object.entries(v)
                  .map(([key, val]) => `${key} ${typeof val !== 'object' ? val.toLocaleLowerCase() : ''}.`)
                  .join('\r\n')
              else return v ? `${v.toLocaleLowerCase()}.` : ''
            })
            .join('\r\n')
        }

        // Set message error
        error = error || res.statusText || `Error ${res.status}`

        // Throw error
        throw error
      }

      // Fetch Success
      return result || true
    }
  }
}
export default { JudilibreApiService }
