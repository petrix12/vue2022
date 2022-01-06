const app = Vue.createApp({
    data() {
        return {
            titulo: 'Banco HS++',
            cantidad: 1700,
            enlace: 'https://cvpetrix.herokuapp.com',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad += 100
            this.desactivar = false
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0){
                this.desactivar = true
                alert('¡Saldo en cero!')
                return
            }
            this.cantidad -= valor
        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }
    }
})