import differenceInMinutes from 'date-fns/difference_in_minutes'

const TWITTER_BASE_URL = 'https://twitter.com/'
const FETCH_WINDOW = 15

export const twitterOAuthURL = token => `${TWITTER_BASE_URL}oauth/authenticate?oauth_token=${token}`
export const haveFetchedInWindow = lastFetched => {
  const fetchedAgo = differenceInMinutes(
    new Date(),
    lastFetched
  )
  return fetchedAgo < FETCH_WINDOW
}