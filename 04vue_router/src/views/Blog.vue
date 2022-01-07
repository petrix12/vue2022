<template>
    <Titulo texto="Título del Blog" />
    <div v-for="post in posts" :key="post.id">
        <router-link :to="`/blog/${post.id}`">
            {{ post.id }} - {{ post.title }}
        </router-link>
    </div>
</template>

<script>
import Titulo from '../components/Titulo'
export default {
    components: {
        Titulo
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async consumirApi(){
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                console.log(array)
                this.posts = array
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.consumirApi()
    }
}
</script>

<style>

</style>