<template>
    <div>
        <h1>Contador: {{ contador }}</h1>
        <Btn :textoBoton="'+'" @accion="aumentar" />
        <Btn :textoBoton="'-'" @accion="disminuir" />
    </div>
</template>

<script>
import Btn from '../components/Btn'
import { useContador } from '../hooks/useContador'

export default {
	components: {
		Btn
	},
    setup() {
        return { ...useContador() }
    }
}
</script>