<template>
	<div class="home">
		<h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
	</div>
	<button @click="accionIncrementar">Aumentar</button>
	<BtnDisminuir />

	<hr>
	<BotonAccion :estado="true" />
	<BotonAccion :estado="false" />
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import BtnDisminuir from '../components/BtnDisminuir'
import BotonAccion from '../components/BotonAccion'

export default {
	name: 'Home',
	components: {
		BtnDisminuir,
		BotonAccion
	},
	data() {
		return {
			titulo: 'Contador Vuex'
		}
	},
	computed: {
		...mapState(['contador']),
		colorContador(){
			return this.contador > 100 ? {'color': 'green'} : {'color': 'red'}
		}
	},
	methods: {
		...mapMutations(['incrementar']),
		...mapActions(['accionIncrementar'])
	}
}
</script>