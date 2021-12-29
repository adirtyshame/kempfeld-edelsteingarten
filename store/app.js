export const state = () => ({
  pageTitle: undefined,
})

export const mutations = {
  setPageTitle(state, pageTitle) {
    state.pageTitle = pageTitle
  }
}

export const actions = {
  updatePageTitle({ commit }, pageTitle) {
    commit('setPageTitle', pageTitle)
  }
}