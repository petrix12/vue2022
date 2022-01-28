<template>
    <div class="home">
		<h1 :style="{'color': color}">Contador: {{ contador }}</h1>
		<button @click="aumentar">+</button>
		<button @click="disminuir">-</button>
    </div>
</template>

<script>
export default {
	data() {
		return {
			contador: 0
		}
	},
	computed: {
		color() {
			return this.contador < 0 ? 'red' : 'blue'
		}
	},
	methods: {
		aumentar() {
			this.contador++
		},
		disminuir() {
			this.contador--
		}
	}
}
</script>