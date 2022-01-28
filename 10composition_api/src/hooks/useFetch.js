import { onMounted, ref } from 'vue'

export function useFetch(url) {
    const paises = ref([])

    onMounted(async() => {
        try {
            const res = await fetch(url)
            paises.value = await res.json()
        } catch (error) {
            console.log(error)
        }
    })

    return {
        paises
    }
}