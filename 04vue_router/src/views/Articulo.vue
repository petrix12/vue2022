<template>
    <Titulo texto="Ruta con parámetros" />
    <h2>Parámetro: {{ $route.params.id }}</h2>
    <h3>{{ articulo.id }} - {{ articulo.title }}</h3>
    <p>{{ articulo.body }}</p>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components: {
        Titulo
    },
    data() {
        return {
            articulo: {}
        }
    },
    methods: {
        async consumirArticulo(){
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const articulo = await data.json()
                console.log(articulo)
                this.articulo = articulo
            } catch (error) {
                console.log(error)
            }
        }
    },
    created(){
        this.consumirArticulo()
    }
}
</script>

<style>

</style>