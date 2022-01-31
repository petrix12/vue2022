<template>
    <div>
        <h1>App Tareas</h1>
        <tarea-form />
        <tarea-item 
            v-for="tarea in tareas"
            :key="tarea.id"
            :tarea="tarea"
        />

        <div class="alert alert-dark mt-5" v-if="!tareas.length">
            Sin tareas pendientes 🤷‍♀️
        </div>
        {{ tareas }}
    </div>
</template>

<script>
import { watchEffect, provide, ref } from 'vue'
import TareaForm from './TareaForm'
import TareaItem from './TareaItem'

export default {
    components: {
        TareaForm,
        TareaItem
    },
    setup() {
        const tareas = ref([])

        provide('tareas', tareas)

        if(localStorage.getItem('tareas')){
            tareas.value = JSON.parse(localStorage.getItem('tareas'))
        }

        watchEffect(() => {
            localStorage.setItem('tareas', JSON.stringify(tareas.value))
        })

        return {
            tareas
        }
    }
}
</script>

<style>

</style>