import { createClient } from "contentful"

export const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
})

// make API call to Contentful
export const getProjects = async () => {
  try {
    const entries = await client.getEntries()
    return { projects: entries.items }
  } catch (error) {
    console.log(error.message)
  }
}
