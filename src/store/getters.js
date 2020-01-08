const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  showLogin: state => state.app.showLogin,
  token: state => state.authentication.token,
  avatar: state => state.authentication.avatar,
  name: state => state.authentication.name
}
export default getters
