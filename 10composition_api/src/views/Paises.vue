<template>
    <div>
        <h1>Lista de paises</h1>
        <p v-for="(pais, index) in paises" :key="index">
            <router-link :to="`/paises/${pais.name}`">
                {{ pais.name }}
            </router-link>
        </p>
    </div>
</template>

<script>
import { useFetch } from '../hooks/useFetch'

export default {
    setup() {
        return {
            /* ...useFetch('https://restcountries.eu/rest/v2/all') */
            ...useFetch('api.json')
        }
    }
}
</script>