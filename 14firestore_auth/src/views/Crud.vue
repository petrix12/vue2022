<template>
    <div v-if="isAuthenticated">
        <h1>CRUD</h1>
        <Cargando v-if="cargando" />
        <div v-else>
            <Error v-if="pintarError"/>
            <TodoForm />
            <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
            <p v-if="!todos.length">
                Sin Todos
            </p>
        </div>
    </div>
</template>

<script>
import { useAuth } from '@vueuse/firebase'
import { useDb } from '../composables/useDb'
import Cargando from '../components/Cargando'
import Error from '../components/Error'
import TodoForm from '../components/TodoForm'
import Todo from '../components/Todo'
import { computed, onMounted, provide, ref } from 'vue'

export default {
    components: {
        Cargando,
        Error,
        TodoForm,
        Todo
    },
    setup() {
        const { isAuthenticated } = useAuth()
        const { getTodos, cargando} = useDb()
        const todos = ref([])
        const error = ref(null)

        provide('error', error)
        provide('todos', todos)

        const pintarError = computed(() => error.value ? true : false)

        onMounted(async() => {
            todos.value = await getTodos()
            if(todos.value.res){
                console.log(todos.value.error)
                error.value =todos.value.error
            }
        })

        return {
            isAuthenticated,
            todos,
            cargando,
            pintarError
        }
    }
}
</script>