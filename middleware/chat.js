export default function ({ store, redirect }) {
  const { user } = store.state

  if (user && !Object.keys(user).length) {
    redirect('/?message=noUser')
  }
}
