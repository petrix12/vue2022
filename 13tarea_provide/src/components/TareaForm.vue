<template>
    <div>
        <form @submit.prevent="agregarTarea">
            <input type="text" class="form-control my-2" placeholder="Ingrese tarea" v-model.trim="texto">
            <button class="btn btn-primary w-100">Agregar</button>
        </form>
    </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
    setup() {
        const texto = ref('')
        const tareas = inject('tareas')

        const agregarTarea = () => {
            if(texto.value === ''){
                return console.log('Texto vacio')
            }
            
            const tarea = {
                texto: texto.value,
                estado: false,
                id: Date.now()
            }

            tareas.value.push(tarea)
            texto.value = ''
        }

        return {
            texto,
            agregarTarea
        }
    }
}
</script>

<style>

</style>