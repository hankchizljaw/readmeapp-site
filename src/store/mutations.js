import * as types from './mutation-types'

export default {
  [types.LOGOUT] (state) {
    state.user = null
  },
  [types.SET_OAUTH_TOKEN] (state, { oAuthToken }) {
    state.oAuthToken = oAuthToken
  },
  [types.SET_OAUTH_TOKEN_SECRET] (state, { oAuthTokenSecret }) {
    state.oAuthTokenSecret = oAuthTokenSecret
  },
  [types.SET_OAUTH_ACCESS_TOKEN] (state, { oAuthAccessToken }) {
    state.oAuthAccessToken = oAuthAccessToken
  },
  [types.SET_OAUTH_ACCESS_TOKEN_SECRET] (state, { oAuthAccessTokenSecret }) {
    state.oAuthAccessTokenSecret = oAuthAccessTokenSecret
  },
  [types.SET_USER] (state, { user }) {
    state.user = user
  },
  [types.SET_LAST_FETCHED] (state, { lastFetched }) {
    state.lastFetched = lastFetched
  }
}
