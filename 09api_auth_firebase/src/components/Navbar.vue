<template>
    <div class="navbar navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">
            Formulario
        </router-link>
        <div class="d-flex">
            <router-link to="/" class="btn btn-dark" v-if="usuarioAutenticado">
                Tareas
            </router-link>
            <router-link to="/ingreso" class="btn btn-dark" v-if="!usuarioAutenticado">
                Ingresar
            </router-link>
            <router-link to="/registro" class="btn btn-dark" v-if="!usuarioAutenticado">
                Registrarse
            </router-link>
            <button v-if="usuarioAutenticado" class="btn btn-dark" @click="cerrarSesion">
                Cerrar Sesión
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['usuarioAutenticado'])
    },
    methods: {
        ...mapActions(['cerrarSesion'])
    }
}
</script>