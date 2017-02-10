const state = {
  hamburger: 'off'
}
// possible states - 'off' 'modalAbout' 'modalArt'
const mutations = {
  'SET_MENU' (state, newState) {
    state.hamburger = newState;
  }
}

const actions = {
  setMenu: ({commit}, newState) => {
    commit('SET_MENU', newState);
  }
}

const getters = {
  menuState: state => {
    return state.hamburger;
  },
  isModalArt: state => {
    return state.hamburger === 'modalArt';
  },  
  isModalAbout: state => {
    return state.hamburger === 'modalAbout';
  },
  isModalOff: state => {
    return state.hamburger === 'off';
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
