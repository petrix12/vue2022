<template>
    <h1 :style="{'color': color}">Contador: {{ signoPeso }}</h1>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['contador', 'color'],

    /* computed: {
        signoPeso() {
            return '$' + this.contador
        }
    } */

    setup(props) {
        const signoPeso = computed(() => {
            return '$' + props.contador
        })

        return {
            signoPeso
        }
    }
}
</script>