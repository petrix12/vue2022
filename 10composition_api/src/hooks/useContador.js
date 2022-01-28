import { ref } from 'vue'

export function useContador() {
    // Variables
    const contador = ref(0)

    // Métodos
    const aumentar = () => {
        contador.value++
    }
    const disminuir = () => {
        contador.value--
    }

    // Retorno de variables y métodos
    return {
        contador,
        aumentar,
        disminuir
    }
}