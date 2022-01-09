import { createStore } from 'vuex'
import router from '../router'

export default createStore({
	state: {
		tareas: [],
		tarea: {
			id: '',
			nombre: '',
			categorias: [],
			estado: '',
			numero: 0
		}
	},
	mutations: {
		cargar(state, payload) {
			state.tareas = payload
		},
		set(state, payload){
			state.tareas.push(payload)
		},
		eliminar(state, payload){
			state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
		},
		tarea(state, payload) {
			if(!state.tareas.find(tarea => tarea.id === payload)){
				router.push('/')
				return
			}
			state.tarea = state.tareas.find(tarea => tarea.id === payload)
		},
		update(state, payload) {
			state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
			router.push('/')
		}
	},
	actions: {
		async cargarLocalStorage({ commit }){
			try {
				const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas.json`)
				const dataDB = await res.json()
				
				const tareas = []
				for (let id in dataDB){
					tareas.push(dataDB[id])
				}
				commit('cargar', tareas)
			} catch (error) {
				console.log(error)
			}
		},
		async setTareas({ commit }, tarea) {
			try {
				const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(tarea)
				})
				const dataDB = await res.json()
				console.log(dataDB)
			} catch (error) {
				console.log(error)
			}
			commit('set', tarea)
		},
		async deleteTareas({ commit }, id) {
			try {
				await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${id}.json`, {
					method: 'DELETE'
				})
				commit('eliminar', id)
			} catch (error) {
				console.log(error)
			}
		},
		setTarea({ commit }, id) {
			commit('tarea', id)
		},
		async updateTarea({ commit}, tarea) {
			try {
				const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
					method: 'PUT',
					body: JSON.stringify(tarea)
				})
				const dataDB = await res.json()
				commit('update', tarea)
			} catch (error) {
				console.log(error)
			}
		},
	},
	modules: {
	}
})