import Vue from 'vue';

const state = {
    artworks: null,
    selected: null,
    isLoaded: false,
    intro: true
};

const mutations = {
    'SET_WORK' (state, data) {
        state.isLoaded = true;
        state.artworks = data.works;
    },
    'SET_SELECTED' (state, index) {
        state.selected = state.artworks[index];
       // console.log(state.selected.thumbnail);
    },
    'INTRO_DONE' (state) {
        state.intro = false;
    }
};

const actions = {
    loadData({commit}) {
         Vue.http.get('./src/data/data.json')
        .then(response => response.json())
        .then(data => {
             commit('SET_WORK', data);
        });
    },
    setSelected({commit},selectedIndex) {
        commit('SET_SELECTED', selectedIndex);
    },
     setIntroDone({commit}) {
        commit('INTRO_DONE');
    }
};

const getters = {
    artworks: state => {
        return state.artworks;
    },
    selected: state => {
        return state.selected;
    },
    isLoaded: state => {
        return state.isLoaded;
    },
    isIntro: state => {
        return state.intro;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
