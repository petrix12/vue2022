<template>
    <h1>{{ texto }}</h1>
</template>

<script>
export default {
    name: 'Titulo',
    /* props: ['texto'] */  // Esta es una forma de capturar los props como array
    // Forma de capturar los props pero ahora como objetos:
    props: {
        texto: String
    }

}
</script>

<style scoped>
    h1 {
        color: peru;
    }
</style>