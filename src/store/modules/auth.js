import AuthService from '@/services/auth.service';

export default {
    namespaced: true,
    state: {
        user: null,
        token: null,
    },
    getters: {
        authenticated (state) {
            return state.token && state.user
        },

        user (state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER (state, user) {
            state.user = user
        }
    },
    actions: {
        async login ({ dispatch }, userCredentials) {
            return AuthService.login(userCredentials).then(
                user => {
                    dispatch('attempt', user.token)
                }
            )
        },
        async attempt ({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return
            }

            try{
                return AuthService.tokenVerify(token).then(
                    user => {
                        commit('SET_USER', user.data)
                    }
                )
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        logout ({ commit }) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    }
}