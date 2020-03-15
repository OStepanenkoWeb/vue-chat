import { SET_USER } from './mutationConst'

export const state = () => ({
  user: {}

})

export const mutations = {
  [SET_USER]: (state, user) => {
    state.user = user
  }
}

export const actions = {
  SOCKET_newMessage (ctx, data) {
    console.log('Message received', data)
  }
}
