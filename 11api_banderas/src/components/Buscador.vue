<template>
    <input 
        type="text"
        placeholder ="Ingrese país"
        class="form-control my-3"
        v-model="pais"
        @keyup="procesarInput"
    >
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const pais = ref('')
        const store = useStore()

        const procesarInput = () => {
            // console.log(pais.value)
            store.dispatch('filtrarPais', pais.value)
        }

        return {
            pais,
            procesarInput
        }
    }
}
</script>