import wretch from 'wretch'

export const server = () => {
  let wretchInstance = wretch()
    .headers({ Accept: 'application/json', 'Content-Type': 'application/json' })
    .resolve(resolver => resolver.json())

  const self = {
    baseUrl: baseUrl => {
      wretchInstance = wretchInstance.url(baseUrl, true)
      return self
    },
    url: (url, replace) => {
      wretchInstance = wretchInstance.url(url, replace)
      return self
    },
    get: options => {
      return wretchInstance.get(options)
    }
  }

  return self
}
