import { CLEAR_DATA, NEW_MESSAGE, SET_USER } from './mutationConst'

export const state = () => ({
  user: {},
  messages: []
})

export const mutations = {
  [SET_USER]: (state, user) => {
    state.user = user
  },
  [CLEAR_DATA]: (state) => {
    state.user = {}
    state.messages = []
  },
  [NEW_MESSAGE]: (state, message) => {
    console.log(message)
    state.messages.push(message)
  }
}

export const actions = {
  SOCKET_newMessage (ctx, data) {
    console.log('Message received', data, ctx)
    ctx.commit(NEW_MESSAGE, data)
  }
}
