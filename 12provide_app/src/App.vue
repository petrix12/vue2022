<template>
	<div>
		<h1>App contador: {{ contador }}</h1>
		<ContadorUno />
		<contador-accion />
	</div>
</template>

<script>
import { provide, ref } from 'vue'
import ContadorUno from './components/ContadorUno'
import ContadorAccion from './components/ContadorAccion.vue'

export default {
	name: 'App',
	components: {
		ContadorUno,
		ContadorAccion
	},
	setup() {
		const contador = ref(0)

		provide('contador', contador)

		return { 
			contador
		}
	}
}
</script>