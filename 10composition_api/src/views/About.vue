<template>
	<div>
		<div class="about">
			<Titulo :contador="contador" :color="color" />
			<!-- <button @click="aumentar">+</button>
			<button @click="disminuir">-</button> -->
			<Btn :textoBoton="'+'" @accion="aumentar" />
			<Btn :textoBoton="'-'" @accion="disminuir" />
		</div>
		<hr>
		<input type="text" v-model="texto">
		<p>{{ texto }}</p>
	</div>
</template>

<script>
import Titulo from '../components/Titulo'
import Btn from '../components/Btn'
import { computed, ref } from 'vue'

export default {
	components: {
		Titulo,
		Btn
	},
	setup() {
		// Variables
		const contador = ref(0)
		const texto = ref('')

		// Propiedades computadas
		const color = computed(() => contador.value < 0 ? 'red' : 'blue')

		// Métodos
		const aumentar = () => {
			contador.value++
		}
		const disminuir = () => {
			contador.value--
		}

		// Retorno de variables y métodos
		return {
			contador,
			texto,
			color,
			aumentar,
			disminuir
		}
	}
}
</script>