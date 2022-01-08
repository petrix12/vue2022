<template>
	<form @submit.prevent="procesarFormulario">
		<input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
		<div class="form-check form-check-inline">
			<input class="form-check-input" type="checkbox" id="check-1" value="JavaScript" v-model="tarea.categorias">
			<label class="form-check-label" for="check-1">JavaScript</label>
		</div>
		<div class="form-check form-check-inline">
			<input class="form-check-input" type="checkbox" id="check-2" value="Node.js" v-model="tarea.categorias">
			<label class="form-check-label" for="check-2">Node.js</label>
		</div>
		<div class="mt-2">
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" id="radio-1" value="Urgente" v-model="tarea.estado">
				<label class="form-check-label" for="radio-1">Urgente</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" id="radio-2" value="Rilax" v-model="tarea.estado">
				<label class="form-check-label" for="radio-2">Rilax</label>
			</div>
		</div>
		<div class="mt-2">
			<input type="number" v-model.number="tarea.numero" class="form-control">
		</div>
		<button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
	</form>
	<hr>
	<p>{{ tarea }}</p>
</template>

<script>

export default {
	name: 'Home',
	components: {
	},
	data() {
		return {
			tarea: {
				nombre: '',
				categorias: [],
				estado: '',
				numero: 0
			}
		}
	},
	methods: {
		procesarFormulario() {
			console.log(this.tarea)
			if(this.tarea.nombre.trim() === ''){
				console.log('Campo vacío')
				return
			}
			// enviar los datos
			this.tarea = {
				nombre: '',
				categorias: [],
				estado: '',
				numero: 0
			}
		}
	},
	computed: {
		bloquear() {
			return this.tarea.nombre.trim() === '' ? true : false
		}
	}
}
</script>