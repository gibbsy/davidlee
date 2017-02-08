const state = {
    width: 0,
    height: 0
};

const mutations = {
    'SET_DIMENSIONS' (state) {
        state.width = window.innerWidth;
        state.height = window.innerHeight;
       // console.log(state.height);
    }
};

const actions = {
    setWinSize({commit}) {
        commit('SET_DIMENSIONS');
    }
};

const getters = {
    winWidth: state => {
        return state.width;
    },
    winHeight: state => {
        return state.height;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}