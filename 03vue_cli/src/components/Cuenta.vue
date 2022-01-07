<template>
    <h2>Tipo de cuenta: {{ cuenta }}</h2>
    <h2>Saldo: {{ saldo }}</h2>
    <h2>Estado: {{ estado ? 'Activa' : 'Desactivada' }}</h2>
    <div v-for="(servicio, item) in servicios" :key="item">
        {{ item + 1 }} - {{ servicio }}
    </div>
    <AccionSaldo texto="Aumentar saldo" @accion="aumentar" />
    <AccionSaldo texto="Disminuir saldo" @accion="disminuir" :desactivar="desactivar" />
</template>

<script>
import AccionSaldo from './AccionSaldo'
export default {
    components: {
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta: 'Corriente',
            estado: true,
            servicios: ['giro', 'abono', 'transferencia'],
            desactivar: false
        }
    },
    methods: {
        aumentar(){
            this.saldo += 100
            this.desactivar = false
        },
        disminuir(){
            if(this.saldo === 0){
                this.desactivar = true
                alert('Saldo agotado')
                return
            }
            this.saldo -= 100
        }
    }
}
</script>

<style>

</style>