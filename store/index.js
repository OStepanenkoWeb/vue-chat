import { CLEAR_DATA, NEW_MESSAGE, SET_USER, UPDATE_USERS } from './mutationConst'

export const state = () => ({
  user: {},
  users: [],
  messages: []
})

export const mutations = {
  [SET_USER]: (state, user) => {
    state.user = user
  },
  [CLEAR_DATA]: (state) => {
    state.user = {}
    state.messages = []
    state.users = []
  },
  [NEW_MESSAGE]: (state, message) => {
    console.log(message)
    state.messages.push(message)
  },
  [UPDATE_USERS]: (state, users) => {
    state.users = users
  }
}

export const actions = {
  SOCKET_newMessage (ctx, data) {
    ctx.commit(NEW_MESSAGE, data)
  },
  SOCKET_updateUsers (ctx, data) {
    ctx.commit(UPDATE_USERS, data)
  }
}
