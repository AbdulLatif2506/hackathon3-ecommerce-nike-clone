export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skbNYyBq5u7pxRLy5M0IFoHWfBNANBA1JyIbBb3R9Kjo0IAr9KhkWis9xrA0d7yUQ11MLoWlsNjrR5zDb76vqgaBkgyE66bPh02dg1bM9RSg6NLkosdGlgF2tQ8yVfiUtQQDHjIbKQ0l3Aydj2uHUmRScMO9yskxwnfccSifzAyl6tjiFOAP",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
