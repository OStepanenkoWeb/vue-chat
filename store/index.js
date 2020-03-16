import { CLEAR_DATA, SET_USER } from './mutationConst'

export const state = () => ({
  user: {},
  messages: [{ text: 'test text' }]

})

export const mutations = {
  [SET_USER]: (state, user) => {
    state.user = user
  },
  [CLEAR_DATA]: (state) => {
    state.user = {}
    state.messages = []
  }
}

export const actions = {
  SOCKET_newMessage (ctx, data) {
    console.log('Message received', data)
  }
}
