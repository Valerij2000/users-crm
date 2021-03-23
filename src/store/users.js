export default {
    state: {

        page: {
            current: 1,
            length: 3
        },

        users: [],

    },
    mutations: {
        setUsersStore (state, payload) {
            state.users = payload;
        }
    }, 
    actions: {
        setUsersStore ({commit}, payload) {
            commit('setUsersStore', payload);
        }
    },
    getters: {
       getUsersArray (state) {
           return state.users;
       },

       getPage (state) {
        return state.page;
       },
    },


}

