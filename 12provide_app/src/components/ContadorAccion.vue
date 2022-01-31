<template>
    <div>
        <button @click="contador++">+</button>
        <button @click="disminuir">-</button>
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    setup() {
        const contador = inject('contador')

        const disminuir = () => contador.value--

        return {
            contador,
            disminuir
        }
    }
}
</script>

<style>

</style>