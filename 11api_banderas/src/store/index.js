import { createStore } from 'vuex'

export default createStore({
	state: {
		paises: [],
		paisesFiltrados: []
	},
	mutations: {
		setPaises(state, payload) {
			state.paises = payload
		},
		setPaisesFiltrados(state, payload) {
			state.paisesFiltrados = payload
		}
	},
	actions: {
		async getPaises({ commit }) {
			try {
				// const res = await fetch('https://restcountries.com/v2/all')
				const res = await fetch('api.json')
				const data = await res.json()
				// console.log(data)
				commit('setPaises', data)
			} catch (error) {
				console.log(error)
			}
		},
		filtrarRegion({ commit, state }, region) {
			const filtro = state.paises.filter(pais => pais.region.includes(region))
			// Otra forma:
			// const filtro = state.paises.filter(pais => pais.region === region)

			commit('setPaisesFiltrados', filtro)
		},
		filtrarPais({ commit, state }, texto) {
			const textoCliente = texto.toLowerCase()
			const filtro = state.paises.filter(pais => {
				const textoApi = pais.name.toLowerCase()
				if(textoApi.includes(textoCliente)) {
					return pais
				}
			})
			commit('setPaisesFiltrados', filtro)
		}
	},
	getters: {
		topPaisesPoblacion(state) {
			return state.paisesFiltrados.sort((a, b) => {
				return a.population < b.population ? 1 : -1
			})
		}
	},
	modules: {
	}
})