# Vue js 3 [Actualizado] ¡De 0 a Experto! + Firebase + MEVN
+ [URL del curso en Udemy](https://www.udemy.com/course/curso-vue)
+ [URL del repositorio en GitHub](https://github.com/petrix12/vue2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **vue2022**.
    + **Description**: Proyecto para seguir el curso de "Vue js 3 [Actualizado] ¡De 0 a Experto! + Firebase + MEVN", creado por Ignacio Gutiérrez en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/vue2022.git
    + $ git push -u origin main


## Sección 1: Introducción
### 1. Presentación al curso Vue - Vuex - VueRouter - Firebase
+ **Contenido**: Presentación del curso.


## Sección 2: ¡Importante! por favor ver este video :)
### 2. Actualización del curso de Vue 2 a Vue 3
+ https://bluuweb.github.io/vue-udemy/01-fundamentos
+ **Contenido**: sobre Vue 2 y Vue 3.


## Sección 3: Fundamentos de Javascript (sección opcional)
### 3. Introducción a Fundamentos de Javascript
+ https://bluuweb.github.io/javascript/fundamentos
+ **Contenido**: sobre los fundamentos de JavaScript.

### 4. Var vs Let vs Const
+ **Contenido**: comparativa entre **var**, **let** y **const**.

### 5. Funciones de Flecha (Arrow Functions)
+ **Contenido**: sobre las funciones de flecha en JavaScript.

### 6. Template String
+ **Contenido**: sobre los template string.

### 7. Objetos
+ **Contenido**: sobre los objetos en JavaScript.

### 8. Destructuring JavaScript Objects
+ https://wesbos.com/destructuring-objects
+ **Contenido**: sobre destructuring.

### 9. Practicando con Objetos
+ **Contenido**: prácticas sobre objetos y destructuring.

### 10. Fetch API
+ **Contenido**: sobre el uso de fetch para consumir API's.

### 11. Async Await
1. Ejemplo de **async - await**:
    + Sin usar **async - await**:
    ```js
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => {
            //console.log(data.results)
            data.results.forEach(element => console.log(element.name))
        })
        .catch(error => console.log(error)))
    ```
    + Usando **async - await**:
    ```js
    const obtenerPokemons = async() => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()
            //console.log(data.results)
            data.results.forEach(element => console.log(element.name))
        } catch (error) {
            console.log(error)
        }
    }

    obtenerPokemons()
    ```

### 12. Map
1. Ejemplo práctico del uso de **map**:
    ```js
    // Obteniendo nombres de pokemon con push.
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => {
            let nombres = []
            data.results.forEach(element => nombres.push(element.name))
            console.log('Método 1:' + nombres)
        })
        .catch(error => console.log(error))

    // Obteniendo nombres de pokemon con map.
    const obtenerPokemons = async() => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()
            const nombres = data.results.map(pokemon => pokemon.name)
            console.log('Método 2:' + nombres)
        } catch (error) {
            console.log(error)
        }
    }

    obtenerPokemons()
    ```

### 13. Filter
1. Ejemplo práctico del uso de **filter**:
    ```js
    const obtenerPokemons = async() => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()
            /* const nombres = data.results.filter(pokemon => pokemon.name === 'bulbasaur') */
            const nombres = data.results.filter(pokemon => pokemon.name !== 'bulbasaur')
            console.log(nombres)
        } catch (error) {
            console.log(error)
        }
    }

    obtenerPokemons()
    ```

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Fundamentos de Javascript"
+ $ git push -u origin main


## Sección 4: Vue JS 3! - Fundamentos
### 14. Introducción
+ https://bluuweb.github.io/vue-udemy/01-fundamentos

### 15. ¿Qué es Vue 3?
+ **Contenido**: sobre los fundamentos de Vue 3.

### 16. Página oficial de Vue js 3 y CDN
+ Guía oficial de Vue 3: https://v3.vuejs.org/guide/introduction.html
+ CDN:
    ```html
    <script src="https://unpkg.com/vue@next"></script>
    ```
    + **Nota**: verificar siempre en la página oficial
+ No confundir con la documentación de Vue 2: https://vuejs.org/v2/guide/ ya que ahí el CDN es distinto.
+ Por defecto si abren o buscan Vue los llevará a la versión 2, esperemos que a principios de año lance la versión 3 con todo!

### 17. Hola mundo con Vue 3
+ https://v3.vuejs.org/guide/installation.html#vue-devtools
1. Crear **02hola\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola Mundo</title>

        <script src="https://unpkg.com/vue@next"></script>
    </head>
    <body>
        <div id="app">
            <h1>{{ titulo }}</h1>
        </div>

        <script src="main.js"></script>
        <script>
            const mountedApp = app.mount('#app')
        </script>
    </body>
    </html>
    ```
2. Crear **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            return {
                titulo: 'HS++'
            }
        }
    })
    ```

### 18. Renderizar datos de forma declarativa
1. Modificar **02hola\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola Mundo</title>

        <script src="https://unpkg.com/vue@next"></script>
    </head>
    <body>
        <div id="app">
            <h1>{{ titulo }}</h1>
            <!-- <h2>{{ cantidad > 11000000 ? 'Es mayor a 11 M' : 'Es menor a 11 M' }}</h2> -->
            <h2>Saldo disponible: {{ cantidad }}</h2>
        </div>

        <script src="main.js"></script>
        <script>
            const mountedApp = app.mount('#app')
        </script>
    </body>
    </html>
    ```
2. Modificar **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            return {
                titulo: 'Banco HS++',
                cantidad: 1700
            }
        }
    })
    ```

### 19. Atributo v-bind
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <div id="app">
        <h1>{{ titulo }}</h1>
        <h2>Saldo disponible: {{ cantidad }}</h2>
        <!-- <a v-bind:href="enlace">Ir a CVPetrix</a> -->
        <a :href="enlace">Ir a CVPetrix</a>
    </div>
    ≡
    ```
2. Modificar **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            return {
                titulo: 'Banco HS++',
                cantidad: 1700,
                enlace: 'https://cvpetrix.herokuapp.com'
            }
        }
    })
    ```

### 20. v-if v-else
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <div id="app">
        <h1>{{ titulo }}</h1>
        <h2>Saldo disponible: {{ cantidad }}</h2>
        <a :href="enlace">Ir a CVPetrix</a>

        <hr>
        <h2 v-if="estado">Cuenta activa</h2>
        <h2 v-else>Cuenta inactiva</h2>

        <hr>
        <h2 v-if="cantidad > 500">Cantidad: {{ cantidad }}</h2>
        <h2 v-else-if="cantidad <= 500 && cantidad > 0">Cantidad: <span style="color: red">{{ cantidad }}</span></h2>
        <h2 v-else>Sin dinero</h2>

    </div>
    ≡
    ```
2. Modificar **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            return {
                titulo: 'Banco HS++',
                cantidad: 0,
                enlace: 'https://cvpetrix.herokuapp.com',
                estado: true
            }
        }
    })
    ```

### 21. v-for
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <div id="app">
        ≡
        <hr>

        <h2>Servicios disponibles</h2>
        <ul>
            <li v-for="(servicio, item) in servicios" :key="item">{{ item + 1 }} - {{ servicio }}</li>
        </ul>
    </div>
    ≡
    ```
2. Modificar **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            return {
                titulo: 'Banco HS++',
                cantidad: 0,
                enlace: 'https://cvpetrix.herokuapp.com',
                estado: true,
                servicios: ['transferencias', 'pagos', 'giros', 'cheques']
            }
        }
    })
    ```

### 22. Evento Click
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <div id="app">
        ≡
        <hr>
        <!-- <button v-on:click="agregarSaldo">Agregar saldo</button> -->
        <button @click="agregarSaldo">Agregar saldo</button>
    </div>
    ≡
    ```
2. Modificar **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            ≡
        },
        methods: {
            agregarSaldo(){
                this.cantidad += 100
            }
        }
    })
    ```
3. Abreviaturas:
    + v-on:click    -> @clik
    + v-bind:       -> :

### 23. Botón desactivar
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <div id="app">
        ≡
        <hr>
        <button @click="disminuirSaldo" :disabled="desactivar">Disminuir saldo</button>
    </div>
    ≡
    ```
2. Modificar **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            return {
                titulo: 'Banco HS++',
                cantidad: 0,
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
            disminuirSaldo(){
                if(this.cantidad === 0){
                    this.desactivar = true
                    alert('¡Saldo en cero!')
                    return
                }
                this.cantidad -= 100
            }
        }
    })
    ```

### 24. Parámetros en methods
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <button @click="disminuirSaldo(500)" :disabled="desactivar">Disminuir saldo</button>
    ≡
    ```
2. Modificar **02hola\main.js**:
    ```js
    ≡
    disminuirSaldo(valor){
        if(this.cantidad === 0){
            this.desactivar = true
            alert('¡Saldo en cero!')
            return
        }
        this.cantidad -= valor
    }
    ≡
    ```

### 25. Class dinámico
1. Modificar **02hola\index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        ≡
        <script src="https://unpkg.com/vue@next"></script>

        <!-- CSS only - Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <div id="app">
            <h1>{{ titulo }}</h1>
            <h2 class="bg-dark" :class="[cantidad > 500 ? 'text-success' : 'text-danger']">Saldo disponible: {{ cantidad }}</h2>
            <a :href="enlace">Ir a CVPetrix</a>
            ≡
        </div>
        ≡
    </body>
    </html>
    ```

### 26. Propiedades computadas (computed)
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <h1>{{ mayusculasTexto }}</h1>
    <h2 class="bg-dark" :class="colorCantidad">Saldo disponible: {{ cantidad }}</h2>
    <a :href="enlace">Ir a CVPetrix</a>
    ≡
    ```
2. Modificar **02hola\main.js**:
    ```js
    const app = Vue.createApp({
        data() {
            ≡
        },
        methods: {
            ≡
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
    ```

### 27. Computed VS Methods
+ Computed VS Methods:
    + Respuesta oficial: https://es.vuejs.org/v2/guide/computed.html#Caching-computado-vs-Metodos
    + Resumen:
        ```
        Se puede lograr el mismo resultado pero las propiedades computadas se almacenan en el caché. Una propiedad computada solo se volverá a evaluar cuando alguna de sus dependencias haya cambiado.

        En comparación, una invocación de método siempre ejecutará la función cada vez que ocurre una re-renderizacion.

        ¿Por qué necesitamos caché? Imagina que tenemos una costosa propiedad computada A, que requiere hacer un bucle a través de una gran matriz y hace muchos cálculos. Entonces podemos tener otras propiedades computadas que a su vez dependen de A. Sin caché, estaríamos ejecutando el captador de A muchas veces más de lo necesario. En los casos en que no desee el almacenamiento en caché, utilice un método en su lugar.
        ```

### 28. Introducción a componentes
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <body>
        <div id="app">
            ≡
            <hr>
            <button @click="disminuirSaldo(100)" :disabled="desactivar">Disminuir saldo</button>

            <footer-banco/>
        </div>

        <script src="main.js"></script>
        <script src="components/Footer.js"></script>
        <script>
            const mountedApp = app.mount('#app')
        </script>
    </body>
    ≡
    ```
2. Crear componente **02hola\components\Footer.js**:
    ```js
    app.component('footer-banco', {
        template: /*html*/`
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>Footer de mi sitio web</h3>
        </div>
        `
    })
    ```
    + **Nota**: para dar formato a los template se recomienda la extensión de VS Code:
        + es6-string-html
            + Tobermory
            + Syntax highlighting in es6 multiline strings

### 29. Data en componentes
1. Modificar **02hola\components\Footer.js**:
    ```js
    app.component('footer-banco', {
        template: /*html*/`
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>{{ texto }} - {{ cantidad }}</h3>
        </div>
        `,
        data() {
            return {
                texto: 'Footer de mi sitio web dinámico',
                cantidad: 1000
            }
        }
    })
    ```

### 30. Props - Comunicación entre componentes
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <div id="app">
        ≡
        <footer-banco cantidad="700" fecha="Enero 2022" />
    </div>
    ≡
    ```
2. Modificar **02hola\components\Footer.js**:
    ```js
    app.component('footer-banco', {
        props: ['cantidad', 'fecha'],
        template: /*html*/`
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>{{ texto }} - {{ cantidad }}</h3>
            <p>{{ fecha }}</p>
        </div>
        `,
        data() {
            return {
                texto: 'Footer de mi sitio web dinámico'
            }
        }
    })
    ```

### 31. Props dinámicos
1. Modificar **02hola\index.html**:
    ```html
    ≡
    <footer-banco :valor="cantidad" fecha="Enero 2022" />
    ≡
    ```
2. Modificar **02hola\components\Footer.js**:
    ```js
    app.component('footer-banco', {
        props: ['valor', 'fecha'],
        template: /*html*/`
        <div class="bg-dark py-3 mt-2 text-white">
            <h3>{{ texto }} - {{ valor }}</h3>
            <p>{{ fecha }}</p>
        </div>
        `,
        data() {
            return {
                texto: 'Footer de mi sitio web dinámico'
            }
        }
    })
    ```

### 32. Archivos Terminados de esta Sección
+ **Contenido**: código fuente de la sección.

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Fundamentos de Vue 3"
+ $ git push -u origin main


## Sección 5: Vue CLI 4 - Acelerando el desarrollo web
### 33. Mi primer proyecto con Vue Cli
+ https://bluuweb.github.io/vue-udemy/02-cli
1. Descargar e instalar [Node.js](https://nodejs.org/es).
2. Abrir una terminal como administrador y ejecutar:
    + $ node -v                     (Para verificar la versión de **Node.js**)
    + $ npm -v                      (Para verificar la versión de **Node package manager** - sistema de gestión de paquetes)
    + $ npm install -g @vue/cli     (Para instalar **Vue CLI**)
    + $ vue --version               (Para verificar la versión de **Vue CLI**)
3. Crear proyecto Vue:
    + $ vue create 03vue_cli
    + Seleccionar: Manually select features
    + Seleccionar solamente:
        + (*) Choose Vue version
        + (*) Babel
    + Seleccionar: 3.x
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
4. Ejecutar proyecto **03vue_cli**:
    + $ cd 03vue_cli
    + $ npm run serve

### 34. Vetur can't find tsconfig.json or jsconfig.json
+ **Nota**: si ven una pequeña advertencia en VSCode pueden solucionarla creando un archivo en su directorio raíz llamado: **jsconfig.json** (al mismo nivel que su **package.json**), con la siguiente información:
    ```json
    {
        "include": [
        "./src/**/*"
        ]
    }
    ```
    + Esperemos que pronto el CLI de Vue 3 actualice y cree de forma predeterminada el archivo en cuestión.

### 35. Analizando archivos de nuestro proyecto con Vue cli
+ **Contenido**: explicación de la estructura de un proyecto Vue CLI recién creado.
1. Modificar componente **03vue_cli\src\components\HelloWorld.vue**:
    ```vue
    <template>
        <div class="hello">
            <h1>{{ msg }}</h1>
        </div>
    </template>

    <script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    </style>
    ```
    + **Nota**: para trabajar con proyectos **Vue CLI** se recomienda instalar las siguientes extensiones de VS Code:
        + **Vetur**
            + Pine Wu
            + Vue tooling for VS Code
        + **Vue VSCode Snippets**
            + sarah.drasner
            + Snippets that will supercharge your Vue workflow

### 36. Creando nuestro primer componente
1. Modificar componente principal **03vue_cli\src\App.vue**:
    ```vue
    <template>
        <img alt="Vue logo" src="./assets/logo.png">
        <Titulo texto="Mi banco dinámico HS++ 2.0" />
    </template>

    <script>
    import Titulo from './components/Titulo'

    export default {
        name: 'App',
        components: {
            Titulo
        }
    }
    </script>

    <style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    </style>
    ```
2. Crear componente **03vue_cli\src\components\Titulo.vue**:
    ```vue
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
    ```

### 37. Refuerzo sobre componentes
1. Crear componente **03vue_cli\src\components\Cuenta.vue**:
    ```vue
    <template>
        <h2>Tipo de cuenta: {{ cuenta }}</h2>
        <h2>Saldo: {{ saldo }}</h2>
        <h2>Estado: {{ estado ? 'Activa' : 'Desactivada' }}</h2>
        <div v-for="(servicio, item) in servicios" :key="item">
            {{ item + 1 }} - {{ servicio }}
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                saldo: 1000,
                cuenta: 'Corriente',
                estado: true,
                servicios: ['giro', 'abono', 'transferencia']
            }
        },
    }
    </script>

    <style>

    </style>
    ```
2. Modificar el componente principal **03vue_cli\src\App.vue** para incorporar el nuevo componente **Cuenta**:
    ```vue
    <template>
        ≡
        <Cuenta />
    </template>

    <script>
    import Titulo from './components/Titulo'
    import Cuenta from './components/Cuenta'

    export default {
        name: 'App',
        components: {
            Titulo,
            Cuenta
        }
    }
    </script>
    ≡
    ```

### 38. Comunicación entre componentes (parte 1)
1. Modificar componente **03vue_cli\src\components\Cuenta.vue**:
    ```vue
    <template>
        <h2>Tipo de cuenta: {{ cuenta }}</h2>
        <h2>Saldo: {{ saldo }}</h2>
        <h2>Estado: {{ estado ? 'Activa' : 'Desactivada' }}</h2>
        <div v-for="(servicio, item) in servicios" :key="item">
            {{ item + 1 }} - {{ servicio }}
        </div>
        <AccionSaldo />
        <AccionSaldo />
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
                servicios: ['giro', 'abono', 'transferencia']
            }
        },
        methods: {
            aumentar(){
                this.saldo += 100
            },
            disminuir(){
                this.saldo -= 100
            }
        }
    }
    </script>

    <style>

    </style>
    ```
2. Crear componente **03vue_cli\src\components\AccionSaldo.vue**:
    ```vue
    <template>
        <button>Disminuir/Aumentar saldo</button>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```

### 39. Comunicación entre componentes (parte 2)
1. Modificar componente **03vue_cli\src\components\Cuenta.vue**:
    ```vue
    <template>
        ≡
        <AccionSaldo texto="Aumentar saldo" />
        <AccionSaldo texto="Disminuir saldo" />
    </template>
    ≡
    ```
2. Modificar componente **03vue_cli\src\components\AccionSaldo.vue**:
    ```vue
    <template>
        <button>{{ texto }}</button>
    </template>

    <script>
    export default {
        props: {
            texto: String
        }
    }
    </script>
    ≡
    ```

### 40. Custom Events (emit): Comunicación del hijo al padre (componentes)
1. Modificar componente **03vue_cli\src\components\Cuenta.vue**:
    ```vue
    <template>
        <h2>Tipo de cuenta: {{ cuenta }}</h2>
        <h2>Saldo: {{ saldo }}</h2>
        <h2>Estado: {{ estado ? 'Activa' : 'Desactivada' }}</h2>
        <div v-for="(servicio, item) in servicios" :key="item">
            {{ item + 1 }} - {{ servicio }}
        </div>
        <AccionSaldo texto="Aumentar saldo" @accion="aumentar" />
        <AccionSaldo texto="Disminuir saldo" @accion="disminuir" />
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
                servicios: ['giro', 'abono', 'transferencia']
            }
        },
        methods: {
            aumentar(){
                this.saldo += 100
            },
            disminuir(){
                if(this.saldo === 0){
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
    ```
2. Modificar componente **03vue_cli\src\components\AccionSaldo.vue**:
    ```vue
    <template>
        <button @click="accion">{{ texto }}</button>
    </template>

    <script>
    export default {
        props: {
            texto: String
        },
        methods: {
            accion() {
                this.$emit('accion')
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 41. Resolviendo tarea "bloquear botón"
1. Modificar componente **03vue_cli\src\components\Cuenta.vue**:
    ```vue
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
    ```
2. Modificar componente **03vue_cli\src\components\AccionSaldo.vue**:
    ```vue
    <template>
        <button @click="accion" :disabled="desactivar">{{ texto }}</button>
    </template>

    <script>
    export default {
        props: {
            texto: String,
            desactivar: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            accion() {
                this.$emit('accion')
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 42. Deploy a Hosting Gratuito
1. Compilar el proyecto **03vue_cli** para deploy:
    + $ npm run build
    + **Nota**: al terminar de compilar el proyecto se generará una carpeta de nombre **dist** lista para alojar en un servidor
2. Ir a la página de **Netlify** y subir la carpeta **dist**.

### 43. Archivos Terminados de esta sección
+ **Contenido**: código fuente de la sección.

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Vue CLI 4 - Acelerando el desarrollo web"
+ $ git push -u origin main


## Sección 6: Vue Roiter | Aprendiendo a trabajar con rutas
### 44. Introducción a Vue Router
+ https://bluuweb.github.io/vue-udemy/03-router
+ **Contenido**: sobre Vue Router.

### 45. Primeros pasos con Vue Router
1. Crear proyecto **04vue_router**:
    + $ vue create 04vue_router
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
    + Seleccionar: 3.x
    + ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: In dedicated config files
    + ? Save this as a preset for future projects? (y/N): n
2. Ejecutar proyecto **04vue_router**:
    + $ cd 04vue_router
    + $ npm run serve

### 46. Router-Link Router-View
+ **Contenido**: análisis de la estructura del componente principal **04vue_router\src\App.vue**.

### 47. Analizando configuración de Router
+ **Contenido**: análisis de la estructura del archivo de rutas **04vue_router\src\router\index.js**.

### 48. View - Primeros pasos
1. Crear vista **04vue_router\src\views\Blog.vue**:
    ```vue
    <template>
        <h1>Blog</h1>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
2. Modificar archivo de rutas **04vue_router\src\router\index.js**:
    ```js
    ≡
    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
            path: '/blog',
            name: 'Blog',
            component: () => import('../views/Blog.vue')
        }
    ]
    ≡
    ```
3. Modificar componente principal **04vue_router\src\App.vue**:
    ```vue
    <template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/blog">Blog</router-link>
        </div>
        <router-view/>
    </template>
    ≡
    ```

### 49. Componentes vs View
1. Crear componente **04vue_router\src\components\Titulo.vue**:
    ```vue
    <template>
        <h1>{{ texto }}</h1>
    </template>

    <script>
    export default {
        props: {
            texto: String
        }
    }
    </script>

    <style>

    </style>
    ```
2. Modificar vista **04vue_router\src\views\Blog.vue**:
    ```vue
    <template>
        <Titulo texto="Título del Blog" />
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        components: {
            Titulo
        }
    }
    </script>

    <style>

    </style>
    ```
3. Modificar vista **04vue_router\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png">
        <Titulo texto="Página de inicio" />
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        name: 'Home',
        components: {
            Titulo
        }
    }
    </script>
    ```
4. Modificar vista **04vue_router\src\views\About.vue**:
    ```vue
    <template>
        <div class="about">
            <Titulo texto="Título de About" />
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        components: {
            Titulo
        }
    }
    </script>
    ```

### 50. Rutas con Parámetros
1. Crear vista **04vue_router\src\views\Articulo.vue**:
    ```vue
    <template>
        <Titulo texto="Ruta con parámetros" />
        <h2>Parámetro: {{ $route.params.id }}</h2>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        components: {
            Titulo
        }
    }
    </script>

    <style>

    </style>
    ```
2. Modificar archivo de rutas **04vue_router\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/blog/:id',
            name: 'Articulo',
            component: () => import('../views/Articulo.vue')
        }							
    ]
    ≡
    ```

### 51. Práctica: Fetch ( consumir API )
+ https://jsonplaceholder.typicode.com
+ https://jsonplaceholder.typicode.com/posts
1. Modificar vista **04vue_router\src\views\Blog.vue**:
    ```vue
    <template>
        <Titulo texto="Título del Blog" />
        <button @click="consumirApi">Consumir API</button>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        components: {
            Titulo
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            async consumirApi(){
                try {
                    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                    const array = await data.json()
                    console.log(array)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 52. Práctica: Pintar títulos de blog
1. Modificar vista **04vue_router\src\views\Blog.vue**:
    ```vue
    <template>
        <Titulo texto="Título del Blog" />
        <button @click="consumirApi">Consumir API</button>
        <div v-for="post in posts" :key="post.id">
            {{ post.id }} - {{ post.title }}
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        components: {
            Titulo
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            async consumirApi(){
                try {
                    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                    const array = await data.json()
                    console.log(array)
                    this.posts = array
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 53. Created: Ciclo de vida de Vue
+ https://v3.vuejs.org/guide/instance.html#lifecycle-diagram
1. Modificar vista **04vue_router\src\views\Blog.vue**:
    ```vue
    <template>
        <Titulo texto="Título del Blog" />
        <!-- <button @click="consumirApi">Consumir API</button> -->
        <div v-for="post in posts" :key="post.id">
            {{ post.id }} - {{ post.title }}
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        ≡
        created() {
            this.consumirApi()
        }
    }
    </script>
    ≡
    ```

### 54. Práctica: Rutas con Parámetros (parte 1)
1. Modificar vista **04vue_router\src\views\Blog.vue**:
    ```vue
    <template>
        <Titulo texto="Título del Blog" />
        <div v-for="post in posts" :key="post.id">
            <router-link :to="`/blog/${post.id}`">
                {{ post.id }} - {{ post.title }}
            </router-link>
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        components: {
            Titulo
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            async consumirApi(){
                try {
                    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                    const array = await data.json()
                    console.log(array)
                    this.posts = array
                } catch (error) {
                    console.log(error)
                }
            }
        },
        created() {
            this.consumirApi()
        }
    }
    </script>

    <style>

    </style>
    ```

### 55. Práctica: Rutas con Parámetros (parte 2)
1. Modificar vista **04vue_router\src\views\Articulo.vue**:
    ```vue
    <template>
        <Titulo texto="Ruta con parámetros" />
        <h2>Parámetro: {{ $route.params.id }}</h2>
        <h3>{{ articulo.id }} - {{ articulo.title }}</h3>
        <p>{{ articulo.body }}</p>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    export default {
        components: {
            Titulo
        },
        data() {
            return {
                articulo: {}
            }
        },
        methods: {
            async consumirArticulo(){
                try {
                    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                    const articulo = await data.json()
                    console.log(articulo)
                    this.articulo = articulo
                } catch (error) {
                    console.log(error)
                }
            }
        },
        created(){
            this.consumirArticulo()
        }
    }
    </script>

    <style>

    </style>
    ```

### 56. Deploy a Hosting Gratuito
1. Compilar el proyecto **04vue_router** para deploy:
    + $ npm run build
    + **Nota**: al terminar de compilar el proyecto se generará una carpeta de nombre **dist** lista para alojar en un servidor
2. Ir a la página de **Netlify** y subir la carpeta **dist**.

### 57. Refresh 404 Hosting Netlify
+ **Nota**: Al hacer refresh en su sitio web desplegado en Netlify con el modo History de vue, tira un 404.
+ **Solución**:
    + Agregar archivo a su carpeta "public" con el siguiente nombre: _redirects
    + El código de este archivo será: /* /index.html  200
    + Compilar nuevamente con npm run build y subir proyecto a Netlify.
+ Aquí más info:
    + https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps
    + https://stackoverflow.com/questions/55990467/catch-all-redirect-for-create-react-app-in-netlify

### 58. Refresh 404 Hosting compartido
+ Error 404 al refrescar la página - Sección 6:VUE ROUTER - Video 55 y 56:
    + https://router.vuejs.org/guide/essentials/history-mode.html
    + https://stackoverflow.com/questions/36399319/vue-router-return-404-when-revisit-to-the-url
    + Los pasos aplicados para corregir el error fueron los siguientes:
        + Agregar archivo a su carpeta "public" con el siguiente nombre: **.htaccess**:
        ```htaccess
        <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.html [L]
        </IfModule>        
        ```
        + Compilar nuevamente con npm run build y subir proyecto en el hosting empleado.
        + **Nota**: se utilizó hostgator como hosting.

### 59. Archivos Terminados de esta sección
+ Recursos de esta sección: **00recursos\Router.zip**.

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Vue Roiter | Aprendiendo a trabajar con rutas"
+ $ git push -u origin main


## Sección 7: VUEX - Fundamentos
### 60. Introducción a Sección Vuex
+ https://bluuweb.github.io/vue-udemy/04-vuex
+ **Contenido**: sobre Vuex.

### 61. ¿Qué es Vuex?
+ **Contenido**: sobre Vuex.

### 62. Más información sobre Vuex
+ Guía sobre Vuex: https://vuejsdevelopers.com

### 63. Instalación de Vuex
1. Crear proyecto **05vuex**:
    + $ vue create 05vuex
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Seleccionar: 3.x
    + ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: In dedicated config files
    + ? Save this as a preset for future projects? (y/N): n
2. Crear proyecto **05vuex**:
    + $ cd 05vuex
    + $ npm run serve

### 64. State: Primeros pasos
1. Modificar tienda **05vuex\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            contador: 100
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Modificar vista **05vuex\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png">
            <h1>Contador: {{ $store.state.contador }}</h1>
        </div>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        }
    }
    </script>
    ```
3. Modificar vista **05vuex\src\views\About.vue**:
    ```vue
    <template>
        <div class="about">
            <h1>This is an about page</h1>
            <h1>Contador: {{ $store.state.contador }}</h1>
        </div>
    </template>
    ```

### 65. MapState
1. Modificar vista **05vuex\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1>Contador: {{ contador }}</h1>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        components: {
        },
        computed: {
            ...mapState(['contador'])
        }
    }
    </script>  
    ```

### 66. Propiedades computadas
1. Modificar vista **05vuex\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
        </div>
    </template>

    <script>
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                titulo: 'Contador Vuex'
            }
        },
        computed: {
            ...mapState(['contador']),
            colorContador(){
                return this.contador > 100 ? {'color': 'green'} : {'color': 'red'}
            }
        }
    }
    </script>
    ```

### 67. Mutations y MapMutation
1. Modificar tienda **05vuex\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            contador: 50
        },
        mutations: {
            incrementar(state) {
                state.contador += 10
            }
        },
        actions: {
        },
        modules: {
        }
    })
    ```
2. Modificar componente **05vuex\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
        </div>
        <button @click="incrementar">Aumentar</button>
    </template>

    <script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                titulo: 'Contador Vuex'
            }
        },
        computed: {
            ...mapState(['contador']),
            colorContador(){
                return this.contador > 100 ? {'color': 'green'} : {'color': 'red'}
            }
        },
        methods: {
            ...mapMutations(['incrementar'])
        }
    }
    </script>
    ```

### 68. Actions y MapAction
1. Modificar tienda **05vuex\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            contador: 50
        },
        mutations: {
            incrementar(state) {
                state.contador += 10
            }
        },
        actions: {
            accionIncrementar({ commit }){
                commit('incrementar')
            }
        },
        modules: {
        }
    })
    ```
2. Modificar vista **05vuex\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
        </div>
        <button @click="accionIncrementar">Aumentar</button>
    </template>

    <script>
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                titulo: 'Contador Vuex'
            }
        },
        computed: {
            ...mapState(['contador']),
            colorContador(){
                return this.contador > 100 ? {'color': 'green'} : {'color': 'red'}
            }
        },
        methods: {
            ...mapMutations(['incrementar']),
            ...mapActions(['accionIncrementar'])
        }
    }
    </script>
    ```

### 69. Práctica con componentes
1. Crear componente **05vuex\src\components\BtnDisminuir.vue**:
    ```vue
    <template>
        <button @click="accionDisminuir">Disminuir</button>
    </template>

    <script>
    import { mapActions } from 'vuex'
    export default {  
        name: 'BtnDisminuir', 
        methods: {
            ...mapActions(['accionDisminuir'])
        }
    }
    </script>
    ```
2. Modificar vist **05vuex\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
        </div>
        <button @click="accionIncrementar">Aumentar</button>
        <BtnDisminuir />
    </template>

    <script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    import BtnDisminuir from '../components/BtnDisminuir'

    export default {
        name: 'Home',
        components: {
            BtnDisminuir
        },
        ≡
    }
    </script>
    ```
3. Modificar tienda **05vuex\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            contador: 50
        },
        mutations: {
            incrementar(state) {
                state.contador += 10
            },
            disminuir(state) {
                state.contador -= 10
            }
        },
        actions: {
            accionIncrementar({ commit }){
                commit('incrementar')
            },
            accionDisminuir({ commit }){
                commit('disminuir')
            }
        },
        modules: {
        }
    })
    ```

### 70. Parámetros en Vuex
1. Modificar componente **05vuex\src\components\BtnDisminuir.vue**:
    ```vue
    <template>
        <button @click="accionDisminuir(50)">Disminuir</button>
    </template>
    ≡
    ```
2. Modificar tienda **05vuex\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            contador: 50
        },
        mutations: {
            incrementar(state) {
                state.contador += 10
            },
            disminuir(state, payload) {
                state.contador -= payload
            }
        },
        actions: {
            accionIncrementar({ commit }){
                commit('incrementar')
            },
            accionDisminuir({ commit }, numero){
                commit('disminuir', numero)
            }
        },
        modules: {
        }
    })
    ```

### 71. Props en botón aumentar/disminuir
1. Crear componente **05vuex\src\components\BotonAccion.vue**:
    ```vue
    <template>
        <button>{{ textoBoton }}</button>
    </template>

    <script>
    export default {
        props: {
            estado: Boolean
        },
        computed: {
            textoBoton() {
                return this.estado ? 'Aumentar' : 'Disminuir'
            }
        }
    }
    </script>
    ```
2. Modificar vista **05vuex\src\views\Home.vue**:
    ```vue
    <template>
        ≡
        <BtnDisminuir />

        <hr>
        <BotonAccion :estado="true" />
        <BotonAccion :estado="false" />
    </template>

    <script>
    ≡
    import BotonAccion from '../components/BotonAccion'

    export default {
        name: 'Home',
        components: {
            BtnDisminuir,
            BotonAccion
        },
        ≡
    }
    </script>
    ```

### 72. Actions y Mutations en botonAccion
1. Modificar tienda **05vuex\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            contador: 50
        },
        mutations: {
            incrementar(state, payload) {
                state.contador += payload
            },
            disminuir(state, payload) {
                state.contador -= payload
            }
        },
        actions: {
            accionIncrementar({ commit }){
                commit('incrementar', 10)
            },
            accionDisminuir({ commit }, numero){
                commit('disminuir', numero)
            },
            accionBoton({ commit }, objeto){
                if (objeto.estado){
                    commit('incrementar', objeto.numero)
                } else {
                    commit('disminuir', objeto.numero)
                }
            }
        },
        modules: {
        }
    })
    ```
2. Modificar componente **05vuex\src\components\BotonAccion.vue**:
    ```vue
    <template>
        <button @click="accionBoton({ estado: estado, numero: 15 })">{{ textoBoton }}</button>
    </template>

    <script>
    import { mapActions } from 'vuex'
    export default {
        props: {
            estado: Boolean
        },
        computed: {
            textoBoton() {
                return this.estado ? 'Aumentar' : 'Disminuir'
            }
        },
        methods: {
            ...mapActions(['accionBoton'])
        }
    }
    </script>
    ```

### 73. V-model: Comunicación directa entre input y data
1. Modificar vista **05vuex\src\views\About.vue05vuex\src\views\About.vue**:
    ```vue
    <template>
        <div class="about">
            <h1>This is an about page</h1>
            <h1>Contador: {{ $store.state.contador }}</h1>
            <input type="text" v-model="texto">
            <h2>{{ texto }}</h2>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                texto: ''
            }
        },
    }
    </script>
    ```

### 74. Archivos Terminados de esta sección
+ Código fuente de la sección: 00recursos\Vuex.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "VUEX - Fundamentos"
+ $ git push -u origin main


## Sección 8: Forumularios (v-model)
### 75. Presentación Formularios con Vue.js
+ https://bluuweb.github.io/vue-udemy/05-form
+ **Contenido**: sobre el trabajo con formularios en Vue.js

### 76. Instalación de un nuevo proyecto
+ https://bluuweb.github.io/vue-udemy/05-form
1. Crear proyecto **06formulario**:
    + $ vue create 06formulario
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Seleccionar: 3.x
    + ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: In dedicated config files
    + ? Save this as a preset for future projects? (y/N): n
2. Ejecutar proyecto :
    + $ cd 06formulario
    + $ npm run serve
3. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            Inicio
        </div>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        }
    }
    </script>
    ```

### 77. Atención muy importante!
+ **Atención**: Está sección se trabaja con **Bootstrap versión 4** y si visitan la web ya está disponible la **versión 5**.
+ Documentación oficial de Bootstrap y su CDN: **https://getbootstrap.com/docs/4.5/getting-started/introduction**.
+ Algunas clases cambiaron con **Bootstrap 5** por lo que se recomienda trabajar con **Bootstrap 4**.
+ Tutorial de **Bootstrap 5** gratuito en Youtube (creado por mi persona Ignacio Gutiérrez): **https://youtu.be/1kNwZbRiVcQ**.

### 78. Navbar de Bootstrap 4
1. Modificar **06formulario\public\index.html** para añadir CDN de **Bootstrap 4**:
    ```html
    <!DOCTYPE html>
    <html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <title><%= htmlWebpackPlugin.options.title %></title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    </head>
    <body>
        <noscript>
            <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
    </body>
    </html>
    ```
    + CDN Bootstrap 4: https://getbootstrap.com/docs/4.6/getting-started/introduction
2. Modificar componente principal **06formulario\src\App.vue**:
    ```vue
    <template>
        <Navbar />
        <div class="container">
            <router-view/>
        </div>
    </template>

    <script>
    import Navbar from './components/Navbar'
    export default {
        components: {
            Navbar
        }
    }
    </script>
    ```
3. Eliminar archivos:
    + 06formulario\src\components\HelloWorld.vue
    + 06formulario\src\assets\logo.png
4. Crear componente **06formulario\src\components\Navbar.vue**:
    ```vue
    <template>
        <div class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">
                Formulario
            </router-link>
            <div class="d-flex">
                <router-link to="/" class="btn btn-dark">
                    Tareas
                </router-link>
            </div>
        </div>
    </template>

    <script>
    export default {

    }
    </script>
    ```

### 79. v-model: text
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model="tarea.nombre">
        </form>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                tarea: {
                    nombre: ''
                }
            }
        }
    }
    </script>
    ```

### 80. v-model: checkbox
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model="tarea.nombre">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-1" value="JavaScript" v-model="tarea.categorias">
                <label class="form-check-label" for="check-1">JavaScript</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-2" value="Node.js" v-model="tarea.categorias">
                <label class="form-check-label" for="check-2">Node.js</label>
            </div>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                tarea: {
                    nombre: '',
                    categorias: []
                }
            }
        }
    }
    </script>
    ```

### 81. v-model: radio
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            ≡
            <div class="mt-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="radio-1" value="Urgente" v-model="tarea.estado">
                    <label class="form-check-label" for="radio-1">Urgente</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="radio-2" value="Rilax" v-model="tarea.estado">
                    <label class="form-check-label" for="radio-2">Rilax</label>
                </div>
            </div>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                tarea: {
                    nombre: '',
                    categorias: [],
                    estado: ''
                }
            }
        }
    }
    </script>
    ```

### 82. v-model: number
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            ≡
            <div class="mt-2">
                <input type="number" v-model.number="tarea.numero" class="form-control">
            </div>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        data() {
            return {
                tarea: {
                    ≡
                    numero: 0
                }
            }
        }
    }
    </script>
    ```

### 83. trim y submit
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
            ≡
            <button class="btn btn-dark mt-2 btn-block" type="submit">Procesar</button>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
            }
        }
    }
    </script>
    ```

### 84. Validación
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            ≡
            <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="false">Procesar</button>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }
            }
        }
    }
    </script>
    ```

### 85. Bloquear botón submit
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            ≡
            <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        computed: {
            bloquear() {
                return this.tarea.nombre.trim() === '' ? true : false
            }
        }
    }
    </script>
    ```

### 86. Limpiar campos
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    ≡
    <script>

    export default {
        ≡
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }
                // enviar los datos
                this.tarea = {
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        },
        ≡
    }
    </script>
    ```

### 87. Archivos Terminados de esta sección
+ Código fuente de la sección: 00recursos\Formularios.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Forumularios (v-model)"
+ $ git push -u origin main


## Sección 9: CRUD + LocalStorage
### 88. Presentación CRUD + LocalStorage
+ https://bluuweb.github.io/vue-udemy
+ **Contenido**: sobre lo que haremos en esta sección.

### 89. Clonar proyecto anterior
1. Crear proyecto **07formulario_crud** a partir del proyecto **06formulario**:
    + Realizar una copia del proyecto **06formulario** sin el directorio **06formulario\node_modules** y renombrarlo **07formulario_crud**.
2. Instalar las dependencias del nuevo proyecto **07formulario_crud** y ejecutarlo:
    + $ cd 07formulario_crud
    + $ npm i
    + $ npm run serve

### 90. Separar inputs en un componente
1. Instalar **ShortId** (para generar id) en el proyecto **07formulario_crud**:
    + $ cd 07formulario_crud
    + $ npm i shortid
2. Crear componente **07formulario_crud\src\components\Input.vue**:
    ```vue
    <template>
        <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="check-1" value="JavaScript" v-model="tarea.categorias">
            <label class="form-check-label" for="check-1">JavaScript</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="check-2" value="Node.js" v-model="tarea.categorias">
            <label class="form-check-label" for="check-2">Node.js</label>
        </div>
        <div class="mt-2">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="radio-1" value="Urgente" v-model="tarea.estado">
                <label class="form-check-label" for="radio-1">Urgente</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="radio-2" value="Rilax" v-model="tarea.estado">
                <label class="form-check-label" for="radio-2">Rilax</label>
            </div>
        </div>
        <div class="mt-2">
            <input type="number" v-model.number="tarea.numero" class="form-control">
        </div>
        <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
    </template>

    <script>
    export default {
        props: {
            tarea: Object
        },
        computed: {
            bloquear() {
                return this.tarea.nombre.trim() === '' ? true : false
            }
        }
    }
    </script>
    ```
3. Modificar vista **07formulario_crud\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>
    import Input from '../components/Input'

    export default {
        name: 'Home',
        components: {
            Input
        },
        data() {
            return {
                tarea: {
                    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        },
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }
                // enviar los datos
                this.tarea = {
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        }
    }
    </script>
    ```

### 91. Vuex y generar IDs
1. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        },
        mutations: {
            set(state, payload){
                state.tareas.push(payload)
                console.log(state.tareas)
            }
        },
        actions: {
            setTareas({ commit }, tarea) {
                commit('set', tarea)
            }
        },
        modules: {
        }
    })
    ```
2. Modificar vista **07formulario_crud\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>
    import Input from '../components/Input'
    import { mapActions } from 'vuex'
    const shortid = require('shortid')

    export default {
        name: 'Home',
        components: {
            Input
        },
        data() {
            return {
                tarea: {
                    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        },
        methods: {
            ...mapActions(['setTareas']),
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }

                // generar id
                this.tarea.id = shortid.generate()
                console.log(this.tarea.id)

                // enviar los datos
                this.setTareas(this.tarea)

                // limpiar formulario
                this.tarea = {
				    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        }
    }
    </script>
    ```

### 92. Pintar Tareas en una tabla
+ https://getbootstrap.com/docs/4.5/content/tables
1. Crear componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    <template>
        {{ tareas }}
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categorías</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Número</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tarea in tareas" :key="tarea.id">
                    <th scope="row">{{ tarea.id }}</th>
                    <td>{{ tarea.nombre }}</td>
                    <td>{{ tarea.categorias }}</td>
                    <td>{{ tarea.estado }}</td>
                    <td>{{ tarea.numero }}</td>
                    <td>Acción</td>
                </tr>
            </tbody>
        </table>
    </template>

    <script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['tareas'])
        }
    }
    </script>
    ```
2. Modificar vista **07formulario_crud\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <ListaTareas />
    </template>

    <script>
    import Input from '../components/Input'
    import ListaTareas from '../components/ListaTareas'
    ≡

    export default {
        name: 'Home',
        components: {
            Input,
            ListaTareas
        },
        ≡
    }
    </script>
    ```

### 93. Pintar categorías (v-for dentro de otro v-for)
1. Modificar componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    ≡
    <tbody>
        <tr v-for="tarea in tareas" :key="tarea.id">
            <th scope="row">{{ tarea.id }}</th>
            <td>{{ tarea.nombre }}</td>
            <td>
                <span v-for="(categoria, index) in tarea.categorias" :key="index">
                    {{ categoria + (tarea.categorias.length === index + 1 ? '' : ', ') }} 
                </span>
            </td>
            <td>{{ tarea.estado }}</td>
            <td>{{ tarea.numero }}</td>
            <td>Acción</td>
        </tr>
    </tbody>
    ≡
    ```

### 94. Función join() Javascript
+ Función join() Javascript: solución más elegante al punto anterior - Array.join(', ') para unir con comas:
    ```vue
    <td>{{ tarea.categorias.join(', ') }}</td>
    ```

### 95. Eliminar items
1. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    ≡
    mutations: {
        ≡
        eliminar(state, payload){
            state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
        }
    },
    actions: {
        ≡
        deleteTareas({ commit }, id) {
            commit('eliminar', id)
        }
    },
    ≡
    ```
2. Modificar componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    <template>
        {{ tareas }}
        <table class="table">
            ≡
            <tbody>
                <tr v-for="tarea in tareas" :key="tarea.id">
                    ≡
                    <td>{{ tarea.numero }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="deleteTareas(tarea.id)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['tareas'])
        },
        methods: {
            ...mapActions(['deleteTareas'])
        }
    }
    </script>   
    ```

### 96. Editar items (parte 1 - capturar id)
1. Crear vista **07formulario_crud\src\views\Editar.vue**:
    ```vue
    <template>
        Editar {{ $route.params.id }} - {{ tarea }}
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['tarea'])
        },
        methods: {
            ...mapActions(['setTarea'])
        },
        created(){
            this.setTarea(this.$route.params.id)
        }
    }
    </script>
    ```
2. Modificar archivo de rutas **07formulario_crud\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/editar/:id',
            name: 'Editar',
            component: () => import('../views/Editar.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router
    ```
3. Modificar componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    <tbody>
        <tr v-for="tarea in tareas" :key="tarea.id">
            <th scope="row">{{ tarea.id }}</th>
            <td>{{ tarea.nombre }}</td>
            <td>{{ tarea.categorias.join(', ') }}</td>
            <td>{{ tarea.estado }}</td>
            <td>{{ tarea.numero }}</td>
            <td>
                <router-link class="btn btn-warning btn-sm" :to="{ name: 'Editar', params: { id: tarea.id} }">
                    Editar
                </router-link>
                <button class="btn btn-danger btn-sm ml-2" @click="deleteTareas(tarea.id)">
                    Eliminar
                </button>
            </td>
        </tr>
    </tbody>
    ```
4. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            ≡
            tarea(state, payload) {
                state.tarea =state.tareas.find(tarea => tarea.id === payload)
            }
        },
        actions: {
            ≡
            setTarea({ commit }, id) {
                commit('tarea', id)
            }
        },
        modules: {
        }
    })
    ```

### 97. Editar items (parte 2 - formulario edición)
1. Modificar vista **07formulario_crud\src\views\Editar.vue**:
    ```vue
    <template>
        Editar {{ $route.params.id }} - {{ tarea }}
        <form @submit.prevent="updateTarea(tarea)">
            <Input :tarea="tarea" />
        </form>
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    import Input from '../components/Input'

    export default {
        components: {
            Input
        },
        computed: {
            ...mapState(['tarea'])
        },
        methods: {
            ...mapActions(['setTarea', 'updateTarea'])
        },
        created(){
            this.setTarea(this.$route.params.id)
        }
    }
    </script>
    ```
2. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        ≡
        mutations: {
            ≡
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            ≡
            updateTarea({ commit}, tarea) {
                commit('update', tarea)
            },
        },
        modules: {
        }
    })
    ```

### 98. Respaldar información en LocalStorage
1. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
                router.push('/')
            }
        },
        actions: {
            cargarLocalStorage({ commit }){
                if(localStorage.getItem('tareas')){
                    const tareas = JSON.parse(localStorage.getItem('tareas'))
                    commit('cargar', tareas)
                    return
                }
                localStorage.setItem('tareas', JSON.stringify([]))
            },
            ≡
        },
        ≡
    })
    ```
2. Modificar componente principal **07formulario_crud\src\App.vue**:
    ```vue
    <template>
        <Navbar />
        <div class="container">
            <router-view/>
        </div>
    </template>

    <script>
    import Navbar from './components/Navbar'
    import { mapActions } from 'vuex'
    export default {
        components: {
            Navbar
        },
        methods: {
            ...mapActions(['cargarLocalStorage'])
        },
        created(){
            this.cargarLocalStorage()
        }
    }
    </script>
    ```

### 99. Archivos Terminados de esta sección
+ Código fuente de esta sección: 00recursos\Formulario+CRUD.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "CRUD + LocalStorage"
+ $ git push -u origin main


## Sección 10: API Rest Firebase
### 100. API REST Firebase - Introducción
+ https://bluuweb.github.io/vue-udemy
+ **Contenido**: sobre Firebase como Backend.

### 101. Firebase - Primeros pasos
1. Clonar el proyecto anterior **07formulario_crud** excluyendo la carpeta **07formulario_crud\node_modules** y llamándolo **08api_firebase**.
2. Instalar todas las dependencias del nuevo proyecto **08api_firebase** y ejecutar:
    + $ cd 08api_firebase
    + $ npm i
    + $ npm run serve
3. Ir a [firebase](https://firebase.google.com)
    + Ingresar y agregar proyecto.
    + Nombre: **api-firebase**.
    + Dashabilitar Google Analytics.
    + Ir a Realtime Database, crear una base de datos y comenzar en modo de prueba.
    + Obtener ruta raiz para consumir API's:
        + https://api-firebase-56408-default-rtdb.firebaseio.com

### 102. PUT o POST: Agregar tareas a nuestra base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        },
        mutations: {
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cargarLocalStorage({ commit }){
            },
            async setTareas({ commit }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            deleteTareas({ commit }, id) {
                commit('eliminar', id)
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            updateTarea({ commit}, tarea) {
                commit('update', tarea)
            },
        },
        modules: {
        }
    })
    ```

### 103. DevTools failed to load sourcemap
+ **Contenido**: sobre como quitar el mensaje de advertencia de DevTools en la consola del navegador.

### 104. GET: Leer base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            ≡
        },
        actions: {
            async cargarLocalStorage({ commit }){
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas.json`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            ≡
        },
        ≡
    })
    ```

### 105. PATCH: Editar tarea de base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    async updateTarea({ commit}, tarea) {
        try {
            const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(tarea)
            })
            const dataDB = await res.json()
            commit('update', tarea)
        } catch (error) {
            console.log(error)
        }
    },
    ≡
    ```

### 106. DELETE: Eliminar tarea de base de datos
+ https://firebase.google.com/docs/database/rest/save-data
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    async deleteTareas({ commit }, id) {
        try {
            await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${id}.json`, {
                method: 'DELETE'
            })
            commit('eliminar', id)
        } catch (error) {
            console.log(error)
        }
    },
    ≡
    ```

### 107. Archivos Terminados de esta sección
+ Código fuente: 00recursos\API+Firebase.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "API Rest Firebase"
+ $ git push -u origin main


## Sección 11: API Auth Firebase - Rutas protegidas
### 108. Introducción API AUTH FIREBASE
+ https://bluuweb.github.io/vue-udemy/08-01-auth
+ **Contenido**: sobre autenticación con Firebase.

### 109. Importante - Recomendación
+ **Contenido**: recomendación para esta sección.

### 110. Reglas de seguridad Firebase
1. Clonar el proyecto anterior **08api_firebase** excluyendo la carpeta **08api_firebase\node_modules** y llamándolo **09api_auth_firebase**.
2. Instalar todas las dependencias del nuevo proyecto **09api_auth_firebase** y ejecutar:
    + $ cd 09api_auth_firebase
    + $ npm i
2. Ir a [firebase](https://firebase.google.com):
    + Ingresar al proyecto **api-firebase**.
    + Ir a **Realtime Database > Reglas** y configurar las reglas:
        ```json
        {
        "rules": {
            "tareas": {
                ".read": "auth != null",
                ".write": "auth != null"
            }
        }
        }
        ```
    + Presionar el botón **Publicar**.
3. Ejecutar proyecto:
    + $ npm run serve 

### 111. Formulario Registro con Validaciones en Vue.js
1. Modificar archivo de rutas **09api_auth_firebase\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/registro',
            name: 'Registro',
            component: () => import('../views/Registro.vue')
        }
    ]
    ≡
    ```
2. Crear vista **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <form>
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            }
        }
    }
    </script>
    ```

### 112. Registrar usuario en Firebase
+ https://firebase.google.com/docs/reference/rest/auth
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		async registrarUsuario({ commit }, user) {
			try {
				// [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
					method: 'POST',
					body: JSON.stringify({
						email: user.email,
						password: user.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json()
				console.log(userDB)
			} catch (error) {
				console.log(error)
			}
		},
        ≡
    }
    ≡
    ```
    + **Nota 1**: ir a la documentación de [firebase](https://firebase.google.com/docs/reference/rest/auth) para obtener la estructura del endpoint para la autenticación:
        + https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
    + **Nota 2**: para obtener **API_KEY**:
        + Ir a [firebase](https://console.firebase.google.com)
        + Ir al proyecto **api-firebase**.
        + Ir a confguración del proyecto.
        + Ubicar **Clave de API de la web** (AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0).
        + En el panel izquierdo ir a **Authentication**.
        + Presionar en **Comenzar**.
        + En **Agrega tu primer método de acceso y comienza a utilizar Firebase Auth** presionar en **Correo electrónico/contraseña**.
        + Habilitar **Correo electrónico/contraseña** y presionar **Guardar**.
2. Modificar vista **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <form @submit.prevent="procesarFormulario">
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions(['registrarUsuario']),
            procesarFormulario() {
                this.registrarUsuario({ email: this.email, password: this.pass1 })

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
                this.pass2 = ''
            }
        }
    }
    </script>
    ```

### 113. ¿No ves la API KEY?
+ **Nota**: en caso de **No hay clave de API web para este proyecto**, seguir los siguientes pasos:
    + Ir al panel **Tus apps** y presionar en **</>**.
    + Registrar app:
        + Sobrenombre de la app: api-firebase
    + Presionar en **Registrar app**.
    + Aparecerá un código similar a este:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0",
            authDomain: "api-firebase-56408.firebaseapp.com",
            databaseURL: "https://api-firebase-56408-default-rtdb.firebaseio.com",
            projectId: "api-firebase-56408",
            storageBucket: "api-firebase-56408.appspot.com",
            messagingSenderId: "652091577563",
            appId: "1:652091577563:web:7183b8e2883b7c8a3da8fe"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        ```
    + Obtener del código anterior **apiKey: "AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0"**.
    + Presionar en **Ir a la consola**.
    + En el panel izquierdo ir a **Authentication**.
    + Presionar en **Comenzar**.
    + En **Agrega tu primer método de acceso y comienza a utilizar Firebase Auth** presionar en **Correo electrónico/contraseña**.
    + Habilitar **Correo electrónico/contraseña** y presionar **Guardar**.

### 114. Corrección error video anterior + commit de usuario
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
    async registrarUsuario({ commit }, user) {
        try {
            // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
            const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email,
                    password: user.password,
                    returnSecureToken: true
                })
            })
            const userDB = await res.json()
            console.log(userDB)
            if(userDB.error) {
                console.log(userDB.error)
                return
            }
            commit('setUser', userDB)
			router.push('/')
        } catch (error) {
            console.log(error)
        }
        ≡
    },
    ≡
    ```

### 115. Ingreso de usuario (Login)
+ https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
1. Agregar ruta ing**reso en **09api_auth_firebase\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/ingreso',
            name: 'Ingreso',
            component: () => import('../views/Ingreso.vue')
        }
    ]
    ≡
    ```
2. Crear la vista **09api_auth_firebase\src\views\Ingreso.vue**:
    ```vue
    <template>
        <h1 class="my-5">Ingreso de usuarios</h1>
        <form @submit.prevent="procesarFormulario">
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Ingresar</button>
        </form>
    </template>

    <script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5){
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions(['ingresoUsuario']),
            procesarFormulario() {
                this.ingresoUsuario({ email: this.email, password: this.pass1 })

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
            }
        }
    }
    </script>
    ```
3. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		async ingresoUsuario({ commit }, user) {
			try {
				// [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
					method: 'POST',
					body: JSON.stringify({
						email: user.email,
						password: user.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json()
				console.log(userDB)
				if(userDB.error) {
					console.log(userDB.error)
					return
				}
				commit('setUser', userDB)
				router.push('/')
			} catch (error) {
				console.log(error)
			}
		},
        ≡
    }
    ≡
    ```

### 116. Reglas de seguridad Firebase
+ https://firebase.google.com/docs/database/rest/auth#authenticate_with_an_id_token
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        actions: {
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('INGRESO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('REGISTRO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        ≡
    })
    ```
2. Modificar vista **09api_auth_firebase\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <ListaTareas />
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            ...mapActions(['setTareas', 'cargarLocalStorage']),
            ≡
        },
        created(){
            this.cargarLocalStorage()
        }
    }
    </script>
    ```
3. Cambiar reglas para la lista de tareas:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Realtime Database** en igresar a **Reglas**.
    + Modificar Reglas:
        ```json
        {
            "rules": {
                "tareas": {
                    "$uid": {
                        ".write": "$uid === auth.uid",
                        ".read": "$uid === auth.uid"
                    }
                }
            }
        }
        ```
        + **Nota 1**: presionar en **Publicar** para guardar los cambios.
        + **Nota 2**: en el objeto **user** el **localId** equivale al **uid**.

### 117. Getters: Ocultar enlaces navbar
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	getters: {
		usuarioAutenticado(state) {
			return !!state.user		// Si user existe retornará true
		}
	},
	modules: {
	}
    ≡
    ```
2. Modificar componente **09api_auth_firebase\src\components\Navbar.vue**:
    ```vue
    <template>
        {{ usuarioAutenticado }}
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
                <button v-if="usuarioAutenticado" class="btn btn-dark">Cerrar Sesión</button>
            </div>
        </div>
    </template>
    ≡
    ```

### 118. Cerrar sesión
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		cerrarSesion({ commit }) {
			commit('setUser', null)
			router.push('/ingreso')
		},
        ≡
    }
    ```
2. Modificar componente **09api_auth_firebase\src\components\Navbar.vue**:
    ```vue
    <template>
        <div class="navbar navbar-dark bg-dark">
            ≡
            <div class="d-flex">
                ≡
                <button v-if="usuarioAutenticado" class="btn btn-dark" @click="cerrarSesion">
                    Cerrar Sesión
                </button>
            </div>
        </div>
    </template>

    <script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        ≡
        methods: {
            ...mapActions(['cerrarSesion'])
        }
    }
    </script>
    ```

### 119. Router: Rutas protegidas
1. Modificar archivo de rutas **09api_auth_firebase\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'
    import store from '../store'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {rutaProtegida: true}
        },
        {
            path: '/editar/:id',
            name: 'Editar',
            component: () => import('../views/Editar.vue'),
            meta: {rutaProtegida: true}
        },
        {
            path: '/registro',
            name: 'Registro',
            component: () => import('../views/Registro.vue')
        },
        {
            path: '/ingreso',
            name: 'Ingreso',
            component: () => import('../views/Ingreso.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    router.beforeEach((to, from, next) => {
        console.log(to.meta.rutaProtegida)
        if(to.meta.rutaProtegida) {
            if(store.getters.usuarioAutenticado) {
                next()
            } else {
                next('/ingreso')
            }
        } else {
            next()
        }
    })

    export default router
    ```
2. Eliminar vista **09api_auth_firebase\src\views\About.vue**.

### 120. Guardar Token en LocalStorage
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
            user: null
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            },
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cerrarSesion({ commit }) {
                commit('setUser', null)
                router.push('/ingreso')
                localStorage.removeItem('usuario')
            },
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('INGRESO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('REGISTRO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                if(localStorage.getItem('usuario')){
                    commit('setUser', JSON.parse(localStorage.getItem('usuario')))
                } else {
                    return commit('setUser', null)
                }
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        getters: {
            usuarioAutenticado(state) {
                return !!state.user		// Si user existe retornará true
            }
        },
        modules: {
        }
    })
    ```

### 121. Hosting Firebase
1. Compilar el proyecto **09api_auth_firebase** para hacer deploy en Google Firebase:
    + $ cd 09api_auth_firebase
    + $ npm run build
2. Instalar las herramientas de Firebase en la PC:
    + $ npm install -g firebase-tools
3. Hacer deploy:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Hosting** y presionar en **Comenzar**.
    + Presionar en **Siguiente**.
    + En consola de la pc ubicados en la raíz del proyecto:
        + $ firebase login
        + $ firebase init
            + ? Are you ready to proceed? (Y/n): y
            + Seleccionar:
                + ( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            + Seleccionar: > Use an existing project
            + Seleccionar: > api-firebase-56408 (api-firebase)
            + ? What do you want to use as your public directory? (public): dist
            + ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N): y
            + ? Set up automatic builds and deploys with GitHub? (y/N): n
            + ? File dist/index.html already exists. Overwrite? (y/N): n
    + Presionar en **Siguiente**.
    + En consola de la pc ubicados en la raíz del proyecto:
        + $ firebase deploy
            + URL de la aplicación: https://api-firebase-56408.web.app

### 122. Hosting Netlify
1. Ir a la página de **Netlify** y subir la carpeta **dist**:
    + Nombre del sitio: https://firebase-api-hspp.netlify.app
2. En Google Firebase:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Authentication** y luego a **Sign-in method**.
    + En **Dominios autorizado** presionar en **Agregar un dominio** y agregar: https://firebase-api-hspp.netlify.app

### 123. Refresh 404 Hosting Netlify
+ **Nota**: si al hacer refresh en su sitio web desplegado en Netlify con el modo History de vue, tira un 404, seguir los siguientes pasos:
    + Crear archivo **09api_auth_firebase\public\_redirects**:
        ```
        /* /index.html  200
        ```
    + Compilar nuevamente:
        + $ cd 09api_auth_firebase
        + $ npm run build
    + Subir nuevamente el proyecto a Netlify.

### 124. Mensajes error Firebase
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
            user: null,
            error: {
                tipo: null,
                mensaje: null
            },
        },
        mutations: {
            setError(state, payload) {
                if(payload === null) {
                    return state.error = { tipo: null, mensaje: null}
                }
                if(payload === "EMAIL_NOT_FOUND") {
                    return state.error = { tipo: 'email', mensaje: 'Email no registrado'}
                }
                if(payload === "INVALID_PASSWORD") {
                    return state.error = { tipo: 'password', mensaje: 'Contraseña incorrecta'}
                }
                if(payload === "EMAIL_EXISTS") {
                    return state.error = { tipo: 'email', mensaje: 'El email ya existe'}
                }
                if(payload === "INVALID_EMAIL") {
                    return state.error = { tipo: 'email', mensaje: 'Email no válido'}
                }
            },
            setUser(state, payload) {
                state.user = payload
            },
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cerrarSesion({ commit }) {
                commit('setUser', null)
                router.push('/ingreso')
                localStorage.removeItem('usuario')
            },
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    if(userDB.error) {
                        console.log(userDB.error)
                        return commit('setError', userDB.error.message)
                    }
                    commit('setUser', userDB)
                    commit('setError', null)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    if(userDB.error) {
                        console.log(userDB.error)
                        return commit('setError', userDB.error.message)
                    }
                    commit('setUser', userDB)
                    commit('setError', null)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                if(localStorage.getItem('usuario')){
                    commit('setUser', JSON.parse(localStorage.getItem('usuario')))
                } else {
                    return commit('setUser', null)
                }
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        getters: {
            usuarioAutenticado(state) {
                return !!state.user		// Si user existe retornará true
            }
        },
        modules: {
        }
    })
    ```
2. Modificar componente **09api_auth_firebase\src\views\Ingreso.vue**:
    ```vue
    <template>
        <h1 class="my-5">Ingreso de usuarios</h1>
        <div class="alert alert-danger" v-if="error.tipo !== null">
            {{ error.mensaje }}
        </div>
        <form @submit.prevent="procesarFormulario">
            <input 
                type="email" 
                placeholder="email" 
                class="form-control my-2" 
                v-model.trim="email"
                :class="[error.tipo === 'email' ? 'is-invalid' : '']"
            >
            <input 
                type="password" 
                placeholder="password" 
                class="form-control my-2" 
                v-model.trim="pass1"
                :class="[error.tipo === 'password' ? 'is-invalid' : '']"
            >
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Ingresar</button>
        </form>
    </template>

    <script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5){
                    return false
                }
                return true
            },
            ...mapState(['error'])
        },
        methods: {
            ...mapActions(['ingresoUsuario']),
            async procesarFormulario() {
                await this.ingresoUsuario({ email: this.email, password: this.pass1 })
                if(this.error.tipo !== null){
                    return
                }

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
            }
        }
    }
    </script>
    ```
3. Modificar componente **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <div class="alert alert-danger" v-if="error.tipo !== null">
            {{ error.mensaje }}
        </div>
        <form @submit.prevent="procesarFormulario">
            <input 
                type="email" 
                placeholder="email" 
                class="form-control my-2" 
                v-model.trim="email"
                :class="[error.tipo === 'email' ? 'is-invalid' : '']"
            >
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            },
            ...mapState(['error'])
        },
        methods: {
            ...mapActions(['registrarUsuario']),
            async procesarFormulario() {
                await this.registrarUsuario({ email: this.email, password: this.pass1 })
                if(this.error.tipo !== null){
                    return
                }

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
                this.pass2 = ''
            }
        }
    }
    </script>
    ```

### 125. Archivos Terminados de esta sección
+ Código fuente: 00recursos\API+AUTH+Firebase.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "API Auth Firebase - Rutas protegidas"
+ $ git push -u origin main


## Sección 12: Composition API - Fundamentos
### 126. Composition API - Introducción
+ **Contenido**: introducción a la sección.

### 127. ¿Por qué utilizar Composition API?
1. Crear proyecto **10composition_api**:
    + $ vue create 10composition_api
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Choose a version of Vue.js that you want to start the project with (Use arrow keys): 3.x
    + Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys): In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar vista **10composition_api\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
        </div>
    </template>

    <script>
    export default {
    }
    </script>
    ```

### 128. Setup, Ref y Métodos
1. Modificar vista **10composition_api\src\views\Home.vue** (Ejemplo de **Options API**):
    ```vue
    <template>
        <div class="home">
            <h1>Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            aumentar() {
                this.contador++
            },
            disminuir() {
                this.contador--
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div class="about">
            <h1>Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    import { ref } from 'vue'

    export default {
        setup() {
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
    }
    </script>
    ```

### 129. Propiedades computadas (computed)
1. Modificar vista **10composition_api\src\views\Home.vue** (Ejemplo de **Options API**):
    ```vue
    <template>
        <div class="home">
            <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        computed: {
            color() {
                return this.contador < 0 ? 'red' : 'blue'
            }
        },
        methods: {
            aumentar() {
                this.contador++
            },
            disminuir() {
                this.contador--
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div class="about">
            <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    import { computed, ref } from 'vue'

    export default {
        setup() {
            // Variables
            const contador = ref(0)

            // Propiedades computadas
            const color = computed(() => contador.value < 0 ? 'red' : 'blue')

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
                color,
                aumentar,
                disminuir
            }
        }
    }
    </script>
    ```

### 130. v-model
1. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div>
            <div class="about">
                <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
                <button @click="aumentar">+</button>
                <button @click="disminuir">-</button>
            </div>
            <hr>
            <input type="text" v-model="texto">
            <p>{{ texto }}</p>
        </div>
    </template>

    <script>
    import { computed, ref } from 'vue'

    export default {
        setup() {
            // Variables
            const contador = ref(0)
            const texto = ref('')

            // Propiedades computadas
            const color = computed(() => contador.value < 0 ? 'red' : 'blue')

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
                texto,
                color,
                aumentar,
                disminuir
            }
        }
    }
    </script>
    ```

### 131. Props - Comunicación entre componentes
1. Crear componente **10composition_api\src\components\Titulo.vue**:
    ```vue
    <template>
        <h1 :style="{'color': color}">Contador: {{ signoPeso }}</h1>
    </template>

    <script>
    import { computed } from 'vue'

    export default {
        props: ['contador', 'color'],

        /* computed: {
            signoPeso() {
                return '$' + this.contador
            }
        } */

        setup(props) {
            const signoPeso = computed(() => {
                return '$' + props.contador
            })

            return {
                signoPeso
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div>
            <div class="about">
                <Titulo :contador="contador" :color="color" />
                <!-- <h1 :style="{'color': color}">Contador: {{ contador }}</h1> -->
                <button @click="aumentar">+</button>
                <button @click="disminuir">-</button>
            </div>
            <hr>
            <input type="text" v-model="texto">
            <p>{{ texto }}</p>
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    import { computed, ref } from 'vue'

    export default {
        components: {
            Titulo
        },
        setup() {
            // Variables
            const contador = ref(0)
            const texto = ref('')

            // Propiedades computadas
            const color = computed(() => contador.value < 0 ? 'red' : 'blue')

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
                texto,
                color,
                aumentar,
                disminuir
            }
        }
    }
    </script>
    ```

### 132. emit: Comunicación del hijo al padre (componentes)
1. Crear componente **10composition_api\src\components\Btn.vue**:
    ```vue
    <template>
        <!-- <button @click="$emit('accion')">{{ textoBoton }}</button> -->
        <button @click="accionHijo">{{ textoBoton }}</button>
    </template>

    <script>
    export default {
        props: ['textoBoton'],
        setup(props, context) {
            const accionHijo = () => {
                context.emit('accion')
            }

            return {
                accionHijo
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue**:
    ```vue
    <template>
        <div>
            <div class="about">
                <Titulo :contador="contador" :color="color" />
                <!-- <button @click="aumentar">+</button>
                <button @click="disminuir">-</button> -->
                <Btn :textoBoton="'+'" @accion="aumentar" />
                <Btn :textoBoton="'-'" @accion="disminuir" />
            </div>
            <hr>
            <input type="text" v-model="texto">
            <p>{{ texto }}</p>
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    import Btn from '../components/Btn'
    import { computed, ref } from 'vue'

    export default {
        components: {
            Titulo,
            Btn
        },
        ≡
    }
    </script>
    ```

### 133. Reutilizando lógica de componentes
1. Crear vista **10composition_api\src\views\Contador.vue**:
    ```vue
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
    ```
2. Crear **10composition_api\src\hooks\useContador.js**:
    ```js
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
    ```
3. Modificar archivo de rutas **10composition_api\src\router\index.js**:
    ```js
    ≡
    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contador',
            name: 'Contador',
            component: () => import('../views/Contador.vue')
        }
    ]
    ≡
    ```
4. Modificar componente principal **10composition_api\src\App.vue**:
    ```vue
    <template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contador">Contador</router-link>
        </div>
        <router-view/>
    </template>
    ≡
    ```

### 134. Práctica consumir API Pública (fetch y onMounted)
1. Crear **10composition_api\public\api.json**:
    ```json
    [
        {
            "name": "Afghanistan",
            "topLevelDomain": [
                ".af"
            ],
            "alpha2Code": "AF",
            "alpha3Code": "AFG",
            "callingCodes": [
                "93"
            ],
            "capital": "Kabul",
            "altSpellings": [
                "AF",
                "Afġānistān"
            ],
            "region": "Asia",
            "subregion": "Southern Asia",
            "population": 27657145,
            "latlng": [
                33,
                65
            ],
            "demonym": "Afghan",
            "area": 652230,
            "gini": 27.8,
            "timezones": [
                "UTC+04:30"
            ],
            "borders": [
                "IRN",
                "PAK",
                "TKM",
                "UZB",
                "TJK",
                "CHN"
            ],
            "nativeName": "افغانستان",
            "numericCode": "004",
            "currencies": [
                {
                    "code": "AFN",
                    "name": "Afghan afghani",
                    "symbol": "؋"
                }
            ],
            "languages": [
                {
                    "iso639_1": "ps",
                    "iso639_2": "pus",
                    "name": "Pashto",
                    "nativeName": "پښتو"
                },
                {
                    "iso639_1": "uz",
                    "iso639_2": "uzb",
                    "name": "Uzbek",
                    "nativeName": "Oʻzbek"
                },
                {
                    "iso639_1": "tk",
                    "iso639_2": "tuk",
                    "name": "Turkmen",
                    "nativeName": "Türkmen"
                }
            ],
            "translations": {
                "de": "Afghanistan",
                "es": "Afganistán",
                "fr": "Afghanistan",
                "ja": "アフガニスタン",
                "it": "Afghanistan",
                "br": "Afeganistão",
                "pt": "Afeganistão",
                "nl": "Afghanistan",
                "hr": "Afganistan",
                "fa": "افغانستان"
            },
            "flag": "https://restcountries.eu/data/afg.svg",
            "regionalBlocs": [
                {
                    "acronym": "SAARC",
                    "name": "South Asian Association for Regional Cooperation",
                    "otherAcronyms": [],
                    "otherNames": []
                }
            ],
            "cioc": "AFG"
        },
        {
            "name": "Åland Islands",
            ≡
        },
        ≡
    ]
    ```
    + **Nota**: descargar archivo completo del repositorio.
2. Crear vista **10composition_api\src\views\Paises.vue**:
    ```vue
    <template>
        <h1>Lista de paises</h1>
        <p v-for="(pais, index) in paises" :key="index">{{ pais.name }}</p>
    </template>

    <script>
    import { onMounted, ref } from 'vue'

    export default {
        setup() {
            const paises = ref([])

            onMounted(async() => {
                try {
                    /* const res = await fetch('https://restcountries.eu/rest/v2/all') */
                    const res = await fetch('api.json')
                    paises.value = await res.json()
                } catch (error) {
                    console.log(error)
                }
            })

            /* const fetchData = async() => {
                try {
                    // const res = await fetch('https://restcountries.eu/rest/v2/all')
                    const res = await fetch('api.json')
                    paises.value = await res.json()
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData() */

            return {
                paises
            }
        }
    }
    </script>
    ```
3. Modificar archivo de rutas **10composition_api\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/paises',
            name: 'Paises',
            component: () => import('../views/Paises.vue')
        }
    ]
    ≡
    ```
4. Modificar componente principal **10composition_api\src\App.vue**:
    ```vue
    <template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contador">Contador</router-link> |
            <router-link to="/paises">Paises</router-link>
        </div>
        <router-view/>
    </template>
    ≡
    ```

### 135. Params en setup()
1. Modificar archivo de rutas **10composition_api\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/paises/:nombre',
            name: 'Pais',
            props: true,
            component: () => import('../views/Pais.vue')
        }
    ]
    ≡
    ```
2. Crear vista **10composition_api\src\views\Pais.vue**:
    ```vue
    <template>
        <div>
            <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
            <h1>Detalle: {{ nombre }}</h1>
        </div>
    </template>

    <script>
    import { useRoute } from 'vue-router'
    export default {
        props: ['nombre'],
        setup(props) {
            console.log(props.nombre)
            const nombreParams = useRoute()
            console.log(nombreParams.params.nombre)
        }
    }
    </script>
    ```
3. Modificar vista **10composition_api\src\views\Paises.vue**:
    ```vue
    <template>
        <div>
            <h1>Lista de paises</h1>
            <p v-for="(pais, index) in paises" :key="index">
                <router-link :to="`/paises/${pais.name}`">
                    {{ pais.name }}
                </router-link>
            </p>
        </div>
    </template>
    ```

### 136. Hooks - Reutilización
1. Crear **10composition_api\src\hooks\useFetch.js**:
    ```js
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
    ```
2. Modificar vista **10composition_api\src\views\Paises.vue**:
    ```vue
    <template>
        <div>
            <h1>Lista de paises</h1>
            <p v-for="(pais, index) in paises" :key="index">
                <router-link :to="`/paises/${pais.name}`">
                    {{ pais.name }}
                </router-link>
            </p>
        </div>
    </template>

    <script>
    import { useFetch } from '../hooks/useFetch'

    export default {
        setup() {
            return {
                /* ...useFetch('https://restcountries.eu/rest/v2/all') */
                ...useFetch('api.json')
            }
        }
    }
    </script>
    ```
3. Modificar vista **10composition_api\src\views\Pais.vue**:
    ```vue
    <template>
        <div>
            <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
            <h1>Detalle: {{ nombre }}</h1>
            <p v-for="(pais, index) in arrayData" :key="index">
                {{ pais.name }} - {{ pais.region }}
            </p>
        </div>
    </template>

    <script>
    import { useFetch } from '../hooks/useFetch'
    import { useRoute } from 'vue-router'

    export default {
        props: ['nombre'],
        setup(props) {
            /* console.log(props.nombre) */
            const nombreParams = useRoute()
            console.log(nombreParams.params.nombre)
            const { arrayData } = useFetch(`https://restcountries.eu/rest/v2/${nombreParams.params.nombre}`)

            return {
                arrayData
            }
        }
    }
    </script>
    ```

### 137. Archivos Terminados de esta sección
+ **Código fuente de esta sección**: 00recursos\composition-fundamentos.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Composition API - Fundamentos"
+ $ git push -u origin main


## Sección 13: Vuex y Composition API
### 138. Introducción a Vuex y Composition API
+ https://bluuweb.github.io/vue-udemy/21-vuex-composition
+ https://next.vuex.vuejs.org/guide/composition-api.html#accessing-state-and-getters
+ **Contenido**: sobre la aplicación que desarrollaremos en esta sección.

### 139. Instalación de Vue 3 + Vuex
1. Crear proyecto **11api_banderas**:
    + $ vue create 11api_banderas
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Vuex
    + Choose a version of Vue.js that you want to start the project with (Use arrow keys): 3.x
    + Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys): In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div>
            api Paises
        </div>
    </template>

    <script>
    export default {
        name: 'App',
        components: {
        }
    }
    </script>
    ```
3. Eliminar los siguientes archivos:
    + 11api_banderas\src\components\HelloWorld.vue
    + 11api_banderas\src\assets\logo.png
4. Modificar **11api_banderas\public\index.html** para incorporar Bootstrap:
    ```html
    ≡
    <head>
        ≡
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    ≡
    ```

### 140. URL API
1. Aquí puedes revisar la lista de todos los paises en la v3 de la API:
    + https://restcountries.com/v3/all
    + **Nota**: La versión 2 utilizada está con problemas, así que recomiendo utilizar la v3
2. Crear **11api_banderas\public\api-paises.json**:
    ```json
    [
        {
            "name": {
                "common": "Djibouti",
                "official": "Republic of Djibouti",
                "nativeName": {
                    "ara": {
                        "official": "جمهورية جيبوتي",
                        "common": "جيبوتي‎"
                    },
                    "fra": {
                        "official": "République de Djibouti",
                        "common": "Djibouti"
                    }
                }
            },
            ≡
        }
        ≡
    ]
    ```
    + **Nota**: descargar archivo completo del repositorio.

### 141. Composition API - Actions
1. Modificar componente principal **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <h1 class="text-center">Paises API</h1>
            <CardList />
        </div>
    </template>

    <script>
    import CardList from './components/CardList'
    export default {
        name: 'App',
        components: {
            CardList
        }
    }
    </script>
    ```
2. Crear componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    <template>
        <div class="row">
            <div class="col-12">
                Card
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'
    import { onMounted } from 'vue'

    export default {
        setup() {
            const store = useStore()
            onMounted(() => {
                store.dispatch('getPaises')
            })
        }
    }
    </script>

    <style>

    </style>
    ```
3. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            paises: [],
            paisesFiltrados: []
        },
        mutations: {
            setPaises(state, payload) {
                state.paises = payload
            },
            setPaisesFiltrados(state, payload) {
                state.paisesFiltrados = payload
            }
        },
        actions: {
            async getPaises({ commit }) {
                try {
                    const res = await fetch('https://restcountries.com/v2/all')
                    const data = await res.json()
                    // console.log(data)
                    commit('setPaises', data)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        modules: {
        }
    })
    ```

### 142. Composition API - State
1. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    <template>
        <div class="row">
            <div class="col-12">
                {{ paises }}
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'
    import { computed, onMounted } from 'vue'

    export default {
        setup() {
            const store = useStore()

            const paises = computed(() => {
                return store.state.paises
            })

            onMounted(() => {
                store.dispatch('getPaises')
            })

            return {
                paises
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 143. Configurar Getters
1. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        getters: {
            topPaisesPoblacion(state) {
                return state.paises.sort((a, b) => {
                    return a.population < b.population ? 1 : -1
                })
            }
        },
        modules: {
        }
    })
    ```
2. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    ≡
    setup() {
        const store = useStore()

        const paises = computed(() => {
            return store.getters.topPaisesPoblacion
        })

        onMounted(() => {
            store.dispatch('getPaises')
        })

        return {
            paises
        }
    }
    ≡
    ```

### 144. Composition API - Getters
1. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    <template>
        <div class="row">
            <div class="col-12" v-for="pais in paises" :key="pais.name">
                <Card :pais="pais" />
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'
    import { computed, onMounted } from 'vue'
    import Card from './Card'

    export default {
        components: {
            Card
        },
        ≡
    }
    </script>
    ≡
    ```
2. Crear componente **11api_banderas\src\components\Card.vue**:
    ```vue
    <template>
        <div class="card">
            <div class="card-body">
                <h5>{{ pais.name }}</h5>
                <p class="cart-text">
                    <span class="badge bg-secondary d-block mb-1">nativeName: {{ pais.nativeName }}</span>
                    <span class="badge bg-info p-3 d-block mb-1">population: {{ pais.population }}</span>
                    <span class="badge bg-secondary d-block mb-1">capital: {{ pais.capital }}</span>
                    <span class="badge bg-secondary d-block mb-1">region: {{ pais.region }}</span>
                </p>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: ['pais']
    }
    </script>

    <style>

    </style>
    ```

### 145. Formatear número
1. Modificar componente **11api_banderas\src\components\Card.vue**:
    ```vue
    <template>
        <div class="card mb-2">
            <div class="card-body">
                <h5>{{ pais.name }}</h5>
                <p class="cart-text">
                    <span class="badge bg-secondary d-block mb-1">nativeName: {{ pais.nativeName }}</span>
                    <span class="badge bg-info p-3 d-block mb-1">population: {{ numeroFormato(pais.population) }}</span>
                    <span class="badge bg-secondary d-block mb-1">capital: {{ pais.capital }}</span>
                    <span class="badge bg-secondary d-block mb-1">region: {{ pais.region }}</span>
                </p>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: ['pais'],
        setup() {
            const numeroFormato = (num) => {
                return new Intl.NumberFormat("de-DE").format(num)
            }

            return {
                numeroFormato
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 146. Pintar Banderas
1. Modificar componente **11api_banderas\src\components\Card.vue**:
    ```vue
    ≡
    <div class="card-body">
        <h5 class="text-center">{{ pais.name }}</h5>
        <p class="text-center">
            <img :src="pais.flag" :alt="`bandera-${pais.name}`" class="img-fluid w-50">
        </p>
        <p class="cart-text">
            <span class="badge bg-secondary d-block mb-1">nativeName: {{ pais.nativeName }}</span>
            <span class="badge bg-info p-3 d-block mb-1">population: {{ numeroFormato(pais.population) }}</span>
            <span class="badge bg-secondary d-block mb-1">capital: {{ pais.capital }}</span>
            <span class="badge bg-secondary d-block mb-1">region: {{ pais.region }}</span>
        </p>
    </div>
    ≡
    ```

### 147. Vuex - Filtrar países
1. Crear componente **11api_banderas\src\components\Continentes.vue**:
    ```vue
    <template>
        <div class="text-center">
            <h3>Continentes</h3>
            <div class="btn-group mb-3">
                <button class="btn btn-secondary">AM</button>
                <button class="btn btn-secondary">EU</button>
                <button class="btn btn-secondary">AS</button>
                <button class="btn btn-secondary">OC</button>
                <button class="btn btn-secondary">AF</button>
                <button class="btn btn-secondary">ALL</button>
            </div>
        </div>
    </template>

    <script>
    export default {

    }
    </script>
    ```
2. Modificar componente principal **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <h1 class="text-center">Paises API</h1>
            <Continentes />
            <CardList />
        </div>
    </template>

    <script>
    import CardList from './components/CardList'
    import Continentes from './components/Continentes'

    export default {
        name: 'App',
        components: {
            CardList,
            Continentes
        }
    }
    </script>
    ```
3. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            paises: [],
            paisesFiltrados: []
        },
        mutations: {
            setPaises(state, payload) {
                state.paises = payload
            },
            setPaisesFiltrados(state, payload) {
                state.paisesFiltrados = payload
            }
        },
        actions: {
            async getPaises({ commit }) {
                try {
                    // const res = await fetch('https://restcountries.com/v2/all')
                    const res = await fetch('api.json')
                    const data = await res.json()
                    // console.log(data)
                    commit('setPaises', data)
                } catch (error) {
                    console.log(error)
                }
            },
            filtrarRegion({ commit, state }, region) {
                const filtro = state.paises.filter(pais => pais.region.includes(region))
                // Otra forma:
                // const filtro = state.paises.filter(pais => pais.region === region)

                commit('setPaisesFiltrados', filtro)
            }
        },
        getters: {
            topPaisesPoblacion(state) {
                return state.paisesFiltrados.sort((a, b) => {
                    return a.population < b.population ? 1 : -1
                })
            }
        },
        modules: {
        }
    })
    ```
4. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    ≡
    onMounted(async() => {
        await store.dispatch('getPaises')
        await store.dispatch('filtrarRegion', 'Americas')
    })
    ≡
    ```

### 148. Vuex - Filtrar por región
1. Modificar componente **11api_banderas\src\components\Continentes.vue**:
    ```vue
    <template>
        <div class="text-center">
            <h3>Continentes</h3>
            <div class="btn-group mb-3">
                <button class="btn btn-secondary" @click="filtro('Americas')">AM</button>
                <button class="btn btn-secondary" @click="filtro('Europe')">EU</button>
                <button class="btn btn-secondary" @click="filtro('Asia')">AS</button>
                <button class="btn btn-secondary" @click="filtro('Oceania')">OC</button>
                <button class="btn btn-secondary" @click="filtro('Africa')">AF</button>
                <button class="btn btn-secondary" @click="filtro('')">ALL</button>
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'

    export default {
        setup() {
            const store = useStore()

            const filtro = (region) => {
                store.dispatch('filtrarRegion', region)
            }

            return {
                filtro
            }
        }
    }
    </script>
    ```

### 149. KeyUp: Buscador en tiempo real
1. Crear componente **11api_banderas\src\components\Buscador.vue**:
    ```vue
    <template>
        <input 
            type="text"
            placeholder ="Ingrese país"
            class="form-control my-3"
            v-model="pais"
            @keyup="procesarInput"
        >
    </template>

    <script>
    import { ref } from 'vue'

    export default {
        setup() {
            const pais = ref('')

            const procesarInput = () => {
                console.log(pais.value)
            }

            return {
                pais,
                procesarInput
            }
        }
    }
    </script>
    ```
2. Modificar vista principal rutas **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <h1 class="text-center">Paises API</h1>
            <Continentes />
            <Buscador />
            <CardList />
        </div>
    </template>

    <script>
    import CardList from './components/CardList'
    import Continentes from './components/Continentes'
    import Buscador from './components/Buscador'

    export default {
        name: 'App',
        components: {
            CardList,
            Continentes,
            Buscador
        }
    }
    </script>
    ```

### 150. Vuex - Buscador
1. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    ≡
	actions: {
		≡
		filtrarPais({ commit, state }, texto) {
			const textoCliente = texto.toLowerCase()
			const filtro = state.paises.filter(pais => {
				const textoApi = pais.name.toLowerCase()
				if(textoApi.includes(textoCliente)) {
					return pais
				}
			})
			commit('setPaisesFiltrados', filtro)
		}
	},
    ≡
    ```
2. Modificar componente **11api_banderas\src\components\Buscador.vue**:
    ```vue
    ≡
    <script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const pais = ref('')
            const store = useStore()

            const procesarInput = () => {
                // console.log(pais.value)
                store.dispatch('filtrarPais', pais.value)
            }

            return {
                pais,
                procesarInput
            }
        }
    }
    </script>
    ```

### 151. Optimizar código (aporte estudiante)
+ Optimizar código sobre las funciones de acciones para filtrar:
    ```js
    function filtrarPor({ commit, state }, { propiedad, valor }) {
        return state.paises.filter(pais => pais[propiedad].includes(valor))
    }
    ```

### 152. Deploy a Hosting Gratuito
1. Compilar el proyecto **11api_banderas**:
    + $ npm run build
2. Arrastrar carpeta **dist** a Netlify.

### 153. Archivos Terminados de esta sección
+ Código fuente: 00recursos\Api+Banderas+Vue+3.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Vuex y Composition API"
+ $ git push -u origin main

## Sección 14: PROVIDE E INJECT - Trabajando sin VUEX
### 154. Instalación del proyecto con Vue 3
+ https://bluuweb.github.io/vue-udemy/22-provide
1. Crear proyecto **12provide_app**:
    + $ vue create 12provide_app
    + Selccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
    + Choose a version of Vue.js that you want to start the project with: 3.x
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar componente principal **12provide_app\src\App.vue**:
    ```vue
    <template>
        <div>
            Provide
        </div>
    </template>

    <script>
    export default {
        name: 'App',
        components: {
        }
    }
    </script>
    ```
3. Eliminar archivos:
    + 12provide_app\src\components\HelloWorld.vue
    + 12provide_app\src\assets\logo.png

### 155. Provide e Inject - Aprendiendo con la práctica
1. Crear componente **12provide_app\src\components\ContadorUno.vue**:
    ```vue
    <template>
        <div>
            <h2>Contador: {{ contador }}</h2>
        </div>
    </template>

    <script>
    import { inject } from 'vue'

    export default {
        setup() {
            const contador = inject('contador')

            return {
                contador
            }
        }
    }
    </script>
    ```
2. Crear componente **12provide_app\src\components\ContadorAccion.vue**:
    ```vue
    <template>
        <div>
            <button @click="contador++">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    import { inject } from 'vue'

    export default {
        setup() {
            const contador = inject('contador')

            const disminuir = () => contador.value--

            return {
                contador,
                disminuir
            }
        }
    }
    </script>
    ```

### 156. Presentación del proyecto a realizar
+ **Contenido**: sobre el proyecto a desarrollar en el resto de la sección.

### 157. Bootstrap 5 y FontAwersome 5
+ https://getbootstrap.com
+ https://cdnjs.com/libraries/font-awesome
1. Crear proyecto **13tarea_provide**:
    + $ vue create 13tarea_provide
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
    + Choose a version of Vue.js that you want to start the project with: 3.x
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar componente principal **13tarea_provide\src\App.vue**:
    ```vue
    <template>
        <div>
            Tarea Provide
        </div>
    </template>

    <script>
    export default {
        name: 'App',
        components: {
        }
    }
    </script>
    ```
3. Eliminar archivos:
    + 13tarea_provide\src\components\HelloWorld.vue
    + 13tarea_provide\src\assets\logo.png
4. Agregar CDN's de Bootstrap y font-awesome en **13tarea_provide\public\index.html**:
    ```html
    ≡
    <head>
        ≡
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    ≡
    ```

### 158. Componente Formulario (utilizando Provide e inject)
1. Crear componente **13tarea_provide\src\components\TareaApp.vue**:
    ```vue
    <template>
        <div>
            <h1>App Tareas</h1>
            <tarea-form />
            {{ tareas }}
        </div>
    </template>

    <script>
    import { provide, ref } from 'vue'
    import TareaForm from './TareaForm'

    export default {
        components: {
            TareaForm
        },
        setup() {
            const tareas = ref([])

            provide('tareas', tareas)

            return {
                tareas
            }
        }
    }
    </script>
    ```
2. Crear componente **13tarea_provide\src\components\TareaItem.vue**:
    ```vue
    <template>
        <div>
            TareaItem
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
3. Crear componente **13tarea_provide\src\components\TareaForm.vue**:
    ```vue
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
    ```
4. Modificar componente principal **13tarea_provide\src\App.vue**:
    ```vue
    <template>
        <div class="container mt-3">
            <tarea-app />
        </div>
    </template>

    <script>
    import TareaApp from './components/TareaApp'
    export default {
        name: 'App',
        components: {
            TareaApp
        }
    }
    </script>
    ```

### 159. Componente Pintar Tareas (Props)
1. Modificar componente **13tarea_provide\src\components\TareaItem.vue**:
    ```vue
    <template>
        <div>
            <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
                <p class="m-0">{{ tarea.texto }}</p>
                <div>
                    <i class="fas fa-check-circle mx-2 text-success" role="button"></i>
                    <i class="fas fa-minus-circle text-danger" role="button"></i>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: {
            tarea: {
                type: Object,
                required: true
            }
        }
    }
    </script>
    ```
2. Modificar componente **13tarea_provide\src\components\TareaApp.vue**:
    ```vue
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
    ≡
    ```

### 160. Eliminar y Editar (utilizando Provide e inject)
1. Modificar componente **13tarea_provide\src\components\TareaItem.vue**:
    ```vue
    <template>
        <div>
            <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
                <p class="m-0" :class="{'tachado': tarea.estado}">{{ tarea.texto }}</p>
                <div>
                    <i class="fas fa-undo-alt mx-2 text-success" role="button" @click="modificar(tarea.id)" v-if="tarea.estado"></i>
                    <i class="fas fa-check-circle mx-2 text-success" role="button" @click="modificar(tarea.id)" v-else></i>
                    <i class="fas fa-minus-circle text-danger" role="button" @click="eliminar(tarea.id)"></i>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { inject } from 'vue'

    export default {
        props: {
            tarea: {
                type: Object,
                required: true
            }
        },
        setup() {
            const tareas = inject('tareas')

            const modificar = id => {
                tareas.value = tareas.value.map(item => {
                    if(item.id === id){
                        item.estado = !item.estado
                    }
                    return item
                })
            }

            const eliminar = id => {
                tareas.value = tareas.value.filter(item => item.id !== id)
            }

            return {
                modificar,
                eliminar
            }
        }
    }
    </script>

    <style scoped>
    .tachado {
        text-decoration: line-through;
    }
    </style>
    ```

### 161. watchEffect en Vue 3
1. Modificar componente **13tarea_provide\src\components\TareaApp.vue**:
    ```js
    ≡
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
    ≡
    ```

### 162. Deploy a Hosting Gratuito
1. Subir el proyecto **13tarea_provide** a Netlify.

### 163. Archivos Terminados de esta sección
+ Código fuente: 00recursos\TodoApp+con+Provide+e+inject+vue+3.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "PROVIDE E INJECT - Trabajando sin VUEX"
+ $ git push -u origin main


## Sección 15: VUE 3 - Trucos y Tips
### 164. Vetur can't find tsconfig.json or jsconfig.json
+ https://bluuweb.github.io/vue-udemy/23-trucos-vue-3
+ https://vuejs.github.io/vetur/guide/setup.html#project-setup
1. Para solventar el mensaje de **Vetur can't find jsconfig.json**, crear en la raíz del proyecto un archivo de nombre **jsconfig.json**:
    ```json
    {
        "include": [
            "./src/**/*"
        ]
    }
    ```

### 165. script setup
+ script setup:
    + El <script setup> genera automaticamente el return al trabajando con Composition API
    + Aún script setup NO está 100% estable por ende no se recomienda en producción.
    + Ejemplo:
        ```vue
        <template>
            <img alt="Vue logo" src="./assets/logo.png">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            <input type="text" v-model="nombre">
            <p>Hola: {{saludar}}</p>
        </template>

        <script setup>
        import { ref, computed } from 'vue'
        import HelloWorld from './components/HelloWorld.vue'

        const nombre = ref('')
        const saludar = computed(() => {
            return !nombre.value.trim() ? 'Invitado' : nombre.value
        })
        </script>
        ```

### 166. script setup con props
+ Ejemplo: 
    ```vue
    <script setup>
        import { defineProps } from "vue";

        const props = defineProps({
            todo: Object
        })

    </script>
    ```

### 167. Reactive vs Ref (parte 1)
+ **Contenido**: sobre Reactive vs Ref.
+ https://bluuweb.github.io/vue-udemy/23-trucos-vue-3/#reactive

### 168. Reactive vs Ref (parte 2)
+ **Contenido**: más sobre Reactive vs Ref.
+ https://bluuweb.github.io/vue-udemy/23-trucos-vue-3/#reactive

### 169. Reactive vs Ref (parte 3)
+ **Contenido**: más sobre Reactive vs Ref.
+ https://bluuweb.github.io/vue-udemy/23-trucos-vue-3/#reactive

### 170. Suspense
+ **Contenido**: sobre Suspense
+ https://bluuweb.github.io/vue-udemy/23-trucos-vue-3/#suspense

### 171. Próximamente...
+ **Contenido**: despedida de la sección.

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "VUE 3 - Trucos y Tips"
+ $ git push -u origin main


## Sección 16: VUE 3 + Composition API + Firestone + Auth Google
### 172. Presentación: VUE 3 + Composition API + Firestore + Auth Google
+ **Contenido**: sobre la aplicación que desarrollaremos en esta sección.

### 173. Versión de Firebase (¡Importante!)
+ Actualmente salió una nueva versión de Firebase (9.0.0), pero cambiaron la forma de trabajar.
+ Para evitar errores y que todo funcione por favor instalen esta versión:
    + npm i firebase@8.7.1
+ **Nota**: No les resultará los ejemplos vistos en clases con la versión 9, por ende es muy importante trabajar con la versión 8.

### 174. Instalar y configurar Vue 3 + Firebase
1. Crear proyecto **14firestore_auth**:
    + $ vue create 14firestore_auth
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Linter / Formatter
    + Choose a version of Vue.js that you want to start the project with (Use arrow keys): 3.x
    + Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: ESLint with error prevention only
    + Seleccionar unicamente: 
        + (*) Lint on save
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Crear proyecto en [Firebase](https://console.firebase.google.com/u/0/):
    + Nombre del proyecto: firestore-auth
    + Desactivar Google Analytics
3. Habilitar la autenticación con Google:
    + Click en **Authentication**.
    + Click en **Comenzar**.
    + En **Proveedores de Accesso > Proveedores adicionales**: Google.
    + Seleccionar **Habilitar**.
    + Ingresar un correo electrónico: bazo.pedro@gmail.com
    + Click en **Guardar**.
4. Crear base de datos Firestone:
    + Click en **Firestone Database**.
    + Click en **Crear base de datos**.
    + Seleccionar: **Comenzar en modo de prueba**. (Siguiente)
    + Seleccionar el servidor más cercano. (Habilitar)
5. Crear colección (tabla):
    + Click en **Iniciar colección**.
    + ID de la colección: todos (Siguiente)
    + Generar ID de documento dando click en **Automático**.
    + Agrgar campos:
        + texto: string, valor: todo 1
        + uid: string, valor: fsaldddkkjj
        + estado: boolean, valor: false
        + fecha: timestamp, valor: 01/02/2022
    + Click en **Guardar**.
6. Configuración del proyecto:
    + Ir a **Configuración del proyecto** (En la tuerca).
    + Seleccionar en **Tus app**: el icono **</>**.
    + Sobrenombre de la app: firestore-1
    + Click en **Registrar app**.
    + Obtener las API Keys:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyAjk9MwESypj7StFC7m5f2A9p0uKABeLTI",
        authDomain: "firestore-auth-55075.firebaseapp.com",
        projectId: "firestore-auth-55075",
        storageBucket: "firestore-auth-55075.appspot.com",
        messagingSenderId: "649212089254",
        appId: "1:649212089254:web:341b45be81ab49415f7567"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        ```
    + mmm
7. Regresar a la consola del proyecto **14firestore_auth** en local e instalar firebase y bootstrap:
    + $ npm i firebase@8.7.1
    + $ npm i @vueuse/firebase
        + **Nota**: por problemas en la ejecución terminé instalando la versión "@vueuse/firebase": "^4.9.0".
    + $ npm install bootstrap
8. Modificar **14firestore_auth\src\main.js**:
    ```js
    ≡
    import 'bootstrap/dist/css/bootstrap.min.css'

    createApp(App).use(router).mount('#app')
    ```
9. Modificar vista **14firestore_auth\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1 class="text-primary">Hola Vue</h1>
            ≡
        </div>
    </template>
    ≡
    ```
10. Crear archivo **jsconfig.json**:
    ```json
    {
        "include": [
            "./src/**/*"
        ]
    }
    ```

### 175. Configurar Rutas y limpiar proyecto
1. Modificar vista **14firestore_auth\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1>Home</h1>
        </div>
    </template>

    <script>
    export default {
        name: 'Home',
        components: {
        }
    }
    </script>
    ```
2. Eliminar archivos:
    + 14firestore_auth\src\components\HelloWorld.vue
    + 14firestore_auth\src\views\About.vue
    + 14firestore_auth\src\assets\logo.png
3. Crear vista **14firestore_auth\src\views\Perfil.vue**:
    ```vue
    <template>
        <div>
            <h1>Perfil</h1>
        </div>
    </template>
    ```
4. Crear vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div>
            <h1>CRUD</h1>
        </div>
    </template>
    ```
5. Modificar archivo de rutas **14firestore_auth\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
            path: '/perfil',
            name: 'Perfil',
            component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
        },
        {
            path: '/crud',
            name: 'Crud',
            component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router
    ```
6. Modificar componente principal **14firestore_auth\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <router-view/>
        </div>
    </template>
    ```

### 176. Configurar Auth y Firestore en Vue 3
1. Crear archivo **14firestore_auth\src\firebase.js**:
    ```js
    import firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/auth'

    const firebaseConfig = {
        apiKey: "AIzaSyAjk9MwESypj7StFC7m5f2A9p0uKABeLTI",
        authDomain: "firestore-auth-55075.firebaseapp.com",
        projectId: "firestore-auth-55075",
        storageBucket: "firestore-auth-55075.appspot.com",
        messagingSenderId: "649212089254",
        appId: "1:649212089254:web:341b45be81ab49415f7567"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore()
    const auth = firebase.auth()
    const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp

    export { db, auth, marcaTiempo, firebase }
    ```

### 177. Componente Navbar
1. Crear componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    Firestore
                </router-link>
                <div>
                    <button class="btn btn-primary">Acceder</button>
                    <button class="btn btn-danger">Salir</button>
                </div>
            </div>
        </nav>
    </template>
    ```
2. Modificar componente principal **14firestore_auth\src\App.vue**:
    ```vue
    <template>
        <div>
            <Navbar />
            <div class="container">
                <router-view/>
            </div>
        </div>
    </template>

    <script>
    import Navbar from '@/components/Navbar'
    export default {
        components: {
            Navbar
        },
        setup() {
            
        }
    }
    </script>
    ```

### 178. Iniciar sesión con Google
1. Crear composable **14firestore_auth\src\composables\useUser.js**:
    ```js
    import {auth, firebase} from '../firebase'
    import {useRouter} from 'vue-router'

    export const useUser = () => {

        const router = useRouter()
        
        const signIn = async () => {
            try {
                const provider = new firebase.auth.GoogleAuthProvider()
                await auth.signInWithPopup(provider)
                router.push('/perfil')
            } catch (error) {
                console.log(error)
            }
        }

        const signOut = async () => {
            try {
                await auth.signOut()
                router.push('/')
            } catch (error) {
                console.log(error)
            } 
        }

        return {signIn, signOut}
    }
    ```
2. Modificar componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    Firestore
                </router-link>
                <div>
                    <button class="btn btn-primary" @click="signIn">Acceder</button>
                    <button class="btn btn-danger" @click="signOut">Salir</button>
                </div>
            </div>
        </nav>
    </template>

    <script>
    import { useUser } from '../composables/useUser'

    export default {
        setup() {
            const { signIn, signOut } = useUser()

            return {
                signIn,
                signOut
            }
        }
    }
    </script>
    ```

### 179. Importante - Leer
+ **Nota**: en los siguientes videos utilizaremos useAuth pero esto se actualizó hace unos días: https://vueuse.org/firebase/useAuth/
    + Para seguir el curso sin problemas por favor instalar la versión 4.11:
        + $ npm i @vueuse/firebase@4.11.1
    + https://www.npmjs.com/package/@vueuse/firebase/v/4.11.1
    + En caso contrario tendrán que ajustar su código según la documentación oficial:  https://vueuse.org/firebase/useAuth/

### 180. Composable useFirebase
1. Modificar componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    {{ userName }}
                </router-link>
                <div>
                    <button class="btn btn-primary" @click="signIn" v-if="!isAuthenticated">Acceder</button>
                    <button class="btn btn-danger" @click="signOut" v-else>Salir</button>
                </div>
            </div>
        </nav>
    </template>

    <script>
    import { useUser } from '../composables/useUser'
    import { useAuth } from '@vueuse/firebase'
    import { computed } from 'vue'

    export default {
        setup() {
            const { signIn, signOut } = useUser()
            const {user, isAuthenticated} = useAuth()

            const userName = computed(() => {
                return isAuthenticated.value ? user.value.displayName : 'sin Auth'
            })

            return {
                signIn,
                signOut,
                user, 
                isAuthenticated,
                userName
            }
        }
    }
    </script>
    ```
2. Modificar vista **14firestore_auth\src\views\Perfil.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>Perfil</h1>
            <pre>
                {{ user }}
            </pre>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'

    export default {
        setup() {
            const {user, isAuthenticated} = useAuth()

            return {
                user, 
                isAuthenticated
            }
        }
    }
    </script>
    ```

### 181. Configurar rutas protegidas con Firebase
1. Modificar archivo de rutas **14firestore_auth\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import { firebase } from '../firebase'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
            path: '/perfil',
            name: 'Perfil',
            component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue'),
            mata: {
                requiresAuth: true
            }
        },
        {
            path: '/crud',
            name: 'Crud',
            component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue'),
            mata: {
                requiresAuth: true
            }
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    router.beforeEach(async(to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        if(requiresAuth && !(await firebase.getCurrentUser())) {
            next('/')
        } else {
            next()
        }
    })

    export default router
    ```
2. Modificar **14firestore_auth\src\firebase.js**:
    ```js
    ≡
    firebase.getCurrentUser = () => {
        return new Promise((resolve, reject) => {
            const unsuscribe = firebase.auth().onAuthStateChanged(user => {
                unsuscribe()
                resolve(user)
            }, reject)
        })
    }

    export { db, auth, marcaTiempo, firebase }
    ```

### 182. Loading para nuestra aplicación web
1. Crear componente **14firestore_auth\src\components\Cargando.vue**:
    ```vue
    <template>
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </template>
    ```
2. Modificar componente principal **14firestore_auth\src\App.vue**:
    ```vue
    <template>
        <div>
            <Cargando v-if="loading" class="mt-5" />
            <div v-else>
                <Navbar />
                <div class="container">
                    <router-view/>
                </div>
            </div>
        </div>
    </template>

    <script>
    import Navbar from '@/components/Navbar'
    import Cargando from '@/components/Cargando'
    import { firebase } from '@/firebase'
    import { onMounted, ref } from 'vue'

    export default {
        components: {
            Navbar,
            Cargando
        },
        setup() {
            const loading = ref(false)

            onMounted(async() => {
                loading.value = true
                await firebase.getCurrentUser()
                loading.value = false
            })

            return {
                loading
            }
        }
    }
    </script>
    ```

### 183. Vista CRUD
1. Modificar componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    {{ userName }}
                </router-link>
                <div>
                    <button class="btn btn-primary" @click="signIn" v-if="!isAuthenticated">Acceder</button>
                    <div v-else>
                        <router-link to="/crud" class="btn btn-primary mx-1">
                            CRUD
                        </router-link>
                        <router-link to="/perfil" class="btn btn-primary mx-1">
                            Perfil
                        </router-link>
                        <button class="btn btn-danger mx-1" @click="signOut">Salir</button>
                    </div>
                </div>
            </div>
        </nav>
    </template>
    ≡
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'

    export default {
        setup() {
            const { isAuthenticated } = useAuth()

            return {
                isAuthenticated
            }
        }
    }
    </script>
    ```

### 184. Obtener Documentos de Firestore
1. Crear composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    import { ref } from 'vue'
    import { db } from '../firebase'

    export const useDb = () => {
        const referencia = db.collection('todos')
        const cargando = ref(false)

        const getTodos = async() => {
            try {
                cargando.value = true
                const res = await referencia.get()
                return res.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            } catch (error) {
                return {
                    error,
                    res: true
                }
            } finally {
                cargando.value = false
            }
        }

        return {
            getTodos,
            cargando
        }
    }
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <pre>{{ todos }}</pre>
            </div>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'
    import { useDb } from '../composables/useDb'
    import Cargando from '../components/Cargando.vue'
    import { onMounted, ref } from 'vue'

    export default {
        components: {
            Cargando
        },
        setup() {
            const { isAuthenticated } = useAuth()
            const { getTodos, cargando} = useDb()
            const todos = ref([])

            onMounted(async() => {
                todos.value = await getTodos()
                if(todos.value.res){
                    console.log(todos.value.error)
                }
            })

            return {
                isAuthenticated,
                todos,
                cargando
            }
        }
    }
    </script>
    ```

### 185. Pintar componente Error
1. Crear componente **14firestore_auth\src\components\Error.vue**:
    ```vue
    <template>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Ocurrio un error: </strong> {{ error }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="error = null"></button>
        </div>
    </template>

    <script>
    import { inject } from 'vue'
    export default {
        setup() {
            const error = inject('error')

            return {
                error
            }
        }
    }
    </script>
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <Error v-if="pintarError"/>
                <pre>{{ todos }}</pre>
            </div>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'
    import { useDb } from '../composables/useDb'
    import Cargando from '../components/Cargando'
    import Error from '../components/Error'
    import { computed, onMounted, provide, ref } from 'vue'

    export default {
        components: {
            Cargando,
            Error
        },
        setup() {
            const { isAuthenticated } = useAuth()
            const { getTodos, cargando} = useDb()
            const todos = ref([])
            const error = ref(null)

            provide('error', error)

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
    ```

### 186. Agregar documentos a Firestore
1. Modificara composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    import { ref } from 'vue'
    import { db, marcaTiempo } from '../firebase'
    import { useAuth } from '@vueuse/firebase'

    export const useDb = () => {
        const referencia = db.collection('todos')
        const cargando = ref(false)
        const { user } = useAuth()

        const getTodos = async() => {
            try {
                cargando.value = true
                const res = await referencia.get()
                return res.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            } catch (error) {
                return {
                    error,
                    res: true
                }
            } finally {
                cargando.value = false
            }
        }

        const agregarTodo = async(texto) => {
            try {
                const todo = {
                    texto: texto,
                    fecha: marcaTiempo(),
                    estado: false,
                    uid: user.value.uid
                }

                const res = await referencia.add(todo)

                return {
                    id: res.id,
                    ...todo
                }
            } catch (error) {
                return {
                    error,
                    res: true
                }
            }
        }

        return {
            getTodos,
            cargando,
            agregarTodo
        }
    }
    ```
2. Crear componente **14firestore_auth\src\components\TodoForm.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <input type="text" placeholder="Enter para agregar todo" class="form-control my-3" v-model.trim="texto">
        </form>
    </template>

    <script>
    import { inject, ref } from 'vue'
    import { useDb } from '@/composables/useDb'

    export default {
        setup() {
            const { agregarTodo } = useDb()
            const texto = ref('')
            const todos = inject('todos')
            const error = inject('error')

            const procesarFormulario = async() => {
                if(!texto.value.trim()){
                    console.log('texto vacio')
                    return
                }

                const todo = await agregarTodo(texto.value)

                if(todo.res){
                    error.value = todo.error
                    texto.value = ''
                    return
                }

                todos.value = [...todos.value, todo]
                texto.value = ''
            }

            return {
                texto,
                procesarFormulario
            }
        }
    }
    </script>
    ```
3. Modificar componente **114firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <Error v-if="pintarError"/>
                <TodoForm />
                <pre>{{ todos }}</pre>
            </div>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'
    import { useDb } from '../composables/useDb'
    import Cargando from '../components/Cargando'
    import Error from '../components/Error'
    import TodoForm from '../components/TodoForm'
    import { computed, onMounted, provide, ref } from 'vue'

    export default {
        components: {
            Cargando,
            Error,
            TodoForm
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
    ```

### 187. Pintar Todo a través de un PROPS
1. Crear componente **14firestore_auth\src\components\Todo.vue**:
    ```vue
    <template>
        <div>
            <div class="card shadow-sm mb-2">
                <div class="card-body">
                    <p class="m-0">
                        {{ todo.texto }}
                    </p>
                    <div class="mt-2">
                        <button class="btn btn-warning me-1">Finalizar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: { 
            todo: Object
        },
        setup() {

        }
    }
    </script>
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <Error v-if="pintarError"/>
                <TodoForm />
                <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
            </div>
        </div>
    </template>

    <script>
    ≡
    import Todo from '../components/Todo'
    import { computed, onMounted, provide, ref } from 'vue'

    export default {
        components: {
            ≡
            Todo
        },
        ≡
    }
    </script>
    ```

### 188. Eliminar documento de Firestore
1. Modificar componente **14firestore_auth\src\components\Todo.vue**:
    ```vue
    <template>
        <div>
            <div class="card shadow-sm mb-2">
                <div class="card-body">
                    <p class="m-0">
                        {{ todo.texto }}
                    </p>
                    <div class="mt-2">
                        <button class="btn btn-warning me-1">Finalizar</button>
                        <button class="btn btn-danger" @click="eliminar(todo.id)" :disabled="bloquear">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { inject, ref } from 'vue'
    import { useDb } from '@/composables/useDb'

    export default {
        props: { 
            todo: Object
        },
        setup() {
            const { eliminarTodo } = useDb()
            const error = inject('error')
            const todos = inject('todos')
            const bloquear = ref(false)

            const eliminar = async(id) => {
                bloquear.value = true
                const respuesta = await eliminarTodo(id)

                if(respuesta.res){
                    error.value = respuesta.error
                    bloquear.value = false
                    return
                }

                todos.value = todos.value.filter(item => item.id !== id)
                bloquear.value = false
            }

            return {
                eliminar,
                bloquear
            }
        }
    }
    </script>
    ```
2. Modificar composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    ≡
    const eliminarTodo = async(id) => {
        try {
            await referencia.doc(id).delete()
            return {
                res: false
            }
        } catch (error) {
            return {
                error,
                res: true
            }
        }
    }

    return {
        ≡
        eliminarTodo
    }
    ≡
    ```

### 189. Modificar documento de Firestore
1. Modificar composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    ≡
    const modificarTodo = async(todo) => {
        try {
            await referencia.doc(todo.id).update({
                estado: !todo.estado
            })
            return {
                res: false
            }
        } catch (error) {
            return {
                error,
                res: true
            }
        }
    }

    return {
        ≡
        modificarTodo
    }
    ≡
    ```
2. Modificar componente **14firestore_auth\src\components\Todo.vue**:
    ```vue
    <template>
        <div>
            <div class="card shadow-sm mb-2">
                <div class="card-body">
                    <p class="m-0" :class="{'text-decoration-line-through': todo.estado }">
                        {{ todo.texto }}
                    </p>
                    <div class="mt-2">
                        <button 
                            class="btn me-1" 
                            :class="todo.estado ? 'btn-success' : 'btn-warning'"
                            @click="modificar(todo)" 
                            :disabled="bloquear" 
                        >
                            {{ todo.estado ? 'Pendiente' : 'Finalizar' }}
                        </button>
                        <button class="btn btn-danger" @click="eliminar(todo.id)" :disabled="bloquear">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { inject, ref } from 'vue'
    import { useDb } from '@/composables/useDb'

    export default {
        props: { 
            todo: Object
        },
        setup() {
            const { eliminarTodo, modificarTodo } = useDb()
            const error = inject('error')
            const todos = inject('todos')
            const bloquear = ref(false)

            const eliminar = async(id) => {
                bloquear.value = true
                const respuesta = await eliminarTodo(id)

                if(respuesta.res){
                    error.value = respuesta.error
                    bloquear.value = false
                    return
                }

                todos.value = todos.value.filter(item => item.id !== id)
                bloquear.value = false
            }

            const modificar = async(todo) => {
                bloquear.value = true
                const respuesta = await modificarTodo(todo)

                if(respuesta.res){
                    error.value = respuesta.error
                    bloquear.value = false
                    return
                }

                todos.value = todos.value.map(item => (
                    item.id === todo.id ? {...item, estado: !todo.estado} : item
                ))
                bloquear.value = false
            }

            

            return {
                eliminar,
                modificar,
                bloquear
            }
        }
    }
    </script>
    ```
3. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
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
    ≡
    ```

### 190. Reglas de seguridad Firestore
1. Ir a al proyecto **firestore-auth** en la página de Firebase.
2. Ir a **Firestore Database > Reglas**
3. Modificar reglas:
    ```js
    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /todos/{document} {
                allow read, update, delete: if 
                    request.auth != null && request.auth.uid == resource.data.uid;
                allow create: if 
                    request.auth != null;
            }
        }
    }
    ```
    + Reglas originales:
        ```js
        rules_version = '2';
        service cloud.firestore {
            match /databases/{database}/documents {
                match /{document=**} {
                    allow read, write: if
                        request.time < timestamp.date(2022, 3, 3);
                }
            }
        }
        ```
  
4. En el proyecto **14firestore_auth** en local, modificar composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    const getTodos = async() => {
        try {
            cargando.value = true
            const res = await referencia
                .where('uid', '==', user.value.uid)
                .get()
            return res.docs.map(doc => ({
                ≡
            }))
        } catch (error) {
            ≡
        } finally {
            ≡
        }
    }
    ```

### 191. Deploy a Hosting Firebase
1. Compilar el proyecto para produccón:
    + $ npm run build
2. Ir a al proyecto **firestore-auth** en la página de Firebase.
3. Ir a **Hosting** y dar click en **Comenzar**.
4. En la máquina local ejecutar en alguna terminal como administrador:
    + $ npm install -g firebase-tools
6. En la página del proyecto, dar click en **Siguiente**.
7. En local ejecutar:
    + $ firebase login
    + $ firebase init
        + Are you ready to proceed? (Y/n): y
        + Seleccionar:
            + (*) Firestore: Configure security rules and indexes files for Firestore
            + (*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            + (*) Hosting: Set up GitHub Action deploys
        + Seleccionar: Use an existing project
        + Select a default Firebase project for this directory: (Use arrow keys): firestore-auth-55075 (firestore-auth)
        + What file should be used for Firestore Rules? (firestore.rules): y
        + What file should be used for Firestore indexes? (firestore.indexes.json): y
        + File y already exists. Do you want to overwrite it with the Firestore Indexes from the Firebase Console? (y/N): n
        + What do you want to use as your public directory? (public): dist
        + Configure as a single-page app (rewrite all urls to /index.html)? (y/N): y
        + Set up automatic builds and deploys with GitHub? (y/N): n
        + File dist/index.html already exists. Overwrite? (y/N): n
8. En la página del proyecto, dar click en **Siguiente**.
9. En local ejecutar:
    + $ firebase deploy

### 192. Archivos Terminados de esta sección
+ Código fuente: **00recursos\Vue+3+Auth+++Firestore+2021.zip**

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "VUE 3 + Composition API + Firestone + Auth Google"
+ $ git push -u origin main


## Sección 17: Preguntas, respuestas y soluciones de estudiantes
### 193. Introducción
+ **Contenido**: sobre preguntas y respuestas del curso.

### 194. The popup has been closed by the user before finalizing the operation
+ Algunos al probar su aplicación en celulares no les abre el popup de inicio de sesión de Google, aquí un foro de ayuda:
    + https://github.com/firebase/firebase-js-sdk/issues/3188

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Preguntas, respuestas y soluciones de estudiantes"
+ $ git push -u origin main


## Sección 18: Próximas secciones con Vue 3
### 195. Actualizaciones y nuevas secciones 2021
+ **Contenido**: notas sobre el curso.

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Próximas secciones con Vue 3"
+ $ git push -u origin main


## Sección 19: (Vue.js 2) Firebase - CRUD con Vue Router y Vuex
### 196. ¡Importante! ¿Vue versión 2 o 3?
+ **Contenido**: breve comparación entre Vue 2 y Vue 3.

### 197. Vista previa del proyecto
+ **Contenido**: sobre la aplicación a desarrollar.

### 198. Archivos terminados de esta sección
+ Código fuente del proyecto: 00recursos\CRUD-Firebase-Udemy.zip

### 199. Vue Cli 4 y Primeros pasos con Firebase
+ https://console.firebase.google.com/u/0
+ https://bluuweb.github.io/vue-udemy
1. Crear proyecto **15crud_vue**:
    + $ vue create 15crud_vue
    + Seleccionar: Manually select features
    + Seleccionar:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Choose a version of Vue.js that you want to start the project with (Use arrow keys): 2.x
    + Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Instalar Firebase:
    + $ npm i firebase
3. Modificar componente principal **15crud_vue\src\App.vue**:
    ```vue
    <template>
        <div id="app">
            <img alt="Vue logo" src="./assets/logo.png">
            <router-view/>
        </div>
    </template>    
    ```
4. Modificar el archivo de rutas **15crud_vue\src\router\index.js**:
    ```js
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)

    const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
    }
    ]

    const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
    })

    export default router
    ```
5. Crear vista **15crud_vue\src\views\Inicio.vue**:
    ```vue
    <template>
        <div>
            <h1>Inicio</h1>
        </div>
    </template>

    <script>
    export default {
        name: "Inicio"
    }
    </script>
    ```
6. Crear proyecto en [Firebase](https://console.firebase.google.com/u/0/)
    + Nombre del proyecto: **crud-vue**.
    + Desahabilitar Google Analytics.
    + En la consola del proyecto dar click en **</>**
    + Subnombre de la app: **crud-vue**.
    + Obtener la API Keys:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDy_2iaZT7P5BQTtBODhSnkEG9JPgGA7GI",
            authDomain: "crud-vue-e6e70.firebaseapp.com",
            projectId: "crud-vue-e6e70",
            storageBucket: "crud-vue-e6e70.appspot.com",
            messagingSenderId: "827784103038",
            appId: "1:827784103038:web:e0be8417e861d78857042f"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        ```

### 200. Versión de Firebase (¡Importante!)
+ **Nota**: Actualmente salió una nueva versión de Firebase (9.0.0), pero cambiaron la forma de trabajar.
    + Para evitar errores y que todo funcione por favor instalen esta versión:
        + npm i firebase@8.7.1

### 201. Configurar Firebase en Vue.js
1. Crear archivo **15crud_vue\src\firebase.js**:
    ```js
    import firebase from 'firebase/app'
    import 'firebase/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyDy_2iaZT7P5BQTtBODhSnkEG9JPgGA7GI",
        authDomain: "crud-vue-e6e70.firebaseapp.com",
        projectId: "crud-vue-e6e70",
        storageBucket: "crud-vue-e6e70.appspot.com",
        messagingSenderId: "827784103038",
        appId: "1:827784103038:web:e0be8417e861d78857042f"
    };

    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig)

    const db = firebase.firestore

    export {db}
    ```

### 202. Obtener Documentos de Firestore
1. Ir a **Firestore Database** en la consola del proyecto en la página de Firebase.
2. Click en **Crear base de datos**.
3. Seleccionar **Comenzar en modo de prueba** y **Siguiente**.
4. Seleccionar el servidor más cercano y **Habilitar**.
5. Crear colección **tareas**.
6. Crear los siguientes documentos:
    + Generar los **ID de documento** de manera automática:
        + nombre (string), valor: Tarea 1
        + nombre (string), valor: Tarea 2
7. Regresar a la terminal en local y modificar la tienda **15crud_vue\src\store\index.js**:
    ```js
    import Vue from 'vue'
    import Vuex from 'vuex'
    import { db } from '../firebase'

    Vue.use(Vuex)

    export default new Vuex.Store({
        state: {
        },
        mutations: {
        },
        actions: {
            getTareas({ commit}){
                db.collection('tareas').get()
                    .then(res => {
                        res.forEach(doc => {
                            console.log(doc.id)
                            console.log(doc.data())
                        })
                    })
            }
        },
        modules: {
        }
    })
    ```
8. Modificar vista **15crud_vue\src\views\Inicio.vue**:
    ```vue
    <template>
        <div>
            <h1>Inicio</h1>
        </div>
    </template>

    <script>
    import { mapActions } from 'vuex'

    export default {
        name: "Inicio",
        created(){
            this.getTareas()
        },
        methods: {
            ...mapActions(['getTareas'])
        }
    }
    </script>
    ```
+ **VIDEO DESACTUALIZADO**

### 203. Listar documentos en Vue.js
+ **VIDEO DESACTUALIZADO**

### 204. Editar documentos Firestore
+ **VIDEO DESACTUALIZADO**

### 205. Formulario para editar documentos
+ **VIDEO DESACTUALIZADO**

### 206. Agregar documentos a Firestore
+ **VIDEO DESACTUALIZADO**

### 207. Eliminar documento de Firestore
+ **VIDEO DESACTUALIZADO**

### 208. Finalizando proyecto agregando Bootstrap 4
+ **VIDEO DESACTUALIZADO**

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "(Vue.js 2) Firebase - CRUD con Vue Router y Vuex"
+ $ git push -u origin main


## Sección 22: (Vue.js 2) AUTH - Rutas Protegidas: Autehticación con Firebase
+https://bluuweb.github.io/vue-udemy/08-auth-firebase/#instalaciones

### 241. Presentación del proyecto AUTH (Login y Registro)
+ **VIDEO DESACTUALIZADO**

### 242. Versión de Firebase (¡Importante!)
+ **VIDEO DESACTUALIZADO**

### 243. Instalación Vue CLI 4 e iniciar proyecto de Firebase
+ **VIDEO DESACTUALIZADO**

### 244. Devtools y documentación
+ **VIDEO DESACTUALIZADO**

### 245. Archivo configuración Firebase
+ **VIDEO DESACTUALIZADO**

### 246. Vista y Ruta Registro.vue
+ **VIDEO DESACTUALIZADO**

### 247. Registrar nuevo usuario en Firebase
+ **VIDEO DESACTUALIZADO**

### 248. Validando contraseñas
+ **VIDEO DESACTUALIZADO**

### 249. Push a vista Inicio.vue
+ **VIDEO DESACTUALIZADO**

### 250. Validar tamaño de contraseña
+ **VIDEO DESACTUALIZADO**

### 251. Acceso usuarios registrados (Login)
+ **VIDEO DESACTUALIZADO**

### 252. Cerrar sesión
+ **VIDEO DESACTUALIZADO**

### 253. Detectar usuario registrado
+ **VIDEO DESACTUALIZADO**

### 254. Rutas protegidas
+ **VIDEO DESACTUALIZADO**

### 255. Error en consola
+ **VIDEO DESACTUALIZADO**

### 256. Getters: ocultar menú de navegación
+ **VIDEO DESACTUALIZADO**

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "(Vue.js 2) AUTH - Rutas Protegidas: Autehticación con Firebase"
+ $ git push -u origin main


## Sección 21: (Vue.js 2) Firestore - Firebase Auth y base de datos
### 274. Relacionar Auth con Collection de Firestore
+ **VIDEO DESACTUALIZADO**

### 275. GET Tareas de un usuario registrado
+ **VIDEO DESACTUALIZADO**

### 276. UPDATE Tarea de usuario
+ **VIDEO DESACTUALIZADO**

### 277. POST tarea de usuario
+ **VIDEO DESACTUALIZADO**

### 278. DELETE tarea de usuario
+ **VIDEO DESACTUALIZADO**

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "(Vue.js 2) Firestore - Firebase Auth y base de datos"
+ $ git push -u origin main


## Sección 25: (Vue.js 2) BOOTSTRAP 4 - Mejorando apariencia
### 230. Introducción a Bootstrap 4
2 min




    ≡
    ```vue
    ```




### 231. Agregando Bootstrap 4 a nuestro proyecto
9 min
### 232. Compilar proyecto de Vue con CLI 4
3 min
### 233. Subir proyecto a Hosting de Firebase
9 min
### 234. Reglas de Seguridad Firebase
5 min
### 235. Archivos Terminados de esta sección
1 min
### 236. Instalar Bootstrap 4 en Vue a través de NPM
5 min
### 237. Navbar y Class Active en Router Link
9 min
### 238. Columnas responsives (Row/Col)
6 min
### 239. Botones y Cards
5 min
### 240. Form Input Text / Number
6 min
### 241. Form Input Select / Radio / Checkbox
7 min
### 242. Instalación y configuración de Vuelidate
2 min
### 243. Validación de E-mail
10 min
### 244. Validación de contraseñas
10 min
### 245. Validar Botón Submit
7 min
### 246. Lazy: Generar espera para validar
2 min
### 247. Actualización 2020
1 min
### 248. Preloader o Spinner [vue-spinner]
11 min
### 249. Validando Formularios y bloquear botones
12 min
### 250. Validando Editar Tarea
5 min
### 251. Validando Ingreso de usuarios
6 min
### 252. Validando Registro de usuarios
6 min
### 253. Manejando mensajes de Firebase [Ingles al Español]
7 min
### 254. Archivos terminados de esta sección
1 min
### 255. Agregando un Buscador a nuestra lista de Tareas
14 min
### 256. Actualizar proyecto en Firebase Hosting
3 min
### 257. Archivos terminados de esta sección
1 min
### 258. Presentación del proyecto a realizar
2 min
### 259. Nota importante de Vuetify
1 min
### 260. Actualización Vuetify 2.x
11 min
### 261. Nota importante de vue-axios
1 min
### 262. Instalación de Vuetify y Axios
5 min
### 263. Grid en Vuetify
7 min
### 264. Creando vista Calendario y Cards
5 min
### 265. Configurando mínimo y máximo en Calendario
5 min
### 266. Axios: Consumiendo API pública
6 min
### 267. Invertir fechas con Javascript
5 min
### 268. Agregando Try and Catch
4 min
### 269. Finalizando proyecto agregando Loading
8 min
### 270. Archivos terminados de esta sección
1 min
### 271. Presentación Registro con Gmail y Facebook
1 min
### 272. Nota importante de Vuetify
1 min
### 273. Versión de Firebase (¡Importante!)
1 min
### 274. Instalación VueCLI3 - Vuetify - Npm Firebase
5 min
### 275. Error 403 GMAIL
1 min
### 276. Configuración Firebase
4 min
### 277. Creando vista ingreso
15 min
### 278. Configurando ingreso con Gmail
7 min
### 279. Guardar usuario en Firestore
5 min
### 280. Configurando ingreso con Facebook
8 min
### 281. Detectar usuario registrado
6 min
### 282. Configurando rutas protegidas
9 min
### 283. Archivos terminados de esta sección
1 min
### 284. Reglas Firebase y subir al Hosting
1 min
### 285. Presentación proyecto Foto de Perfil
1 min
### 286. Componente Navbar
3 min
### 287. Menú vertical Navigation drawer
7 min
### 288. Avatar de Usuario
6 min
### 289. Vista Administración foto perfil
8 min
### 290. Previsualizar fotografías
4 min
### 291. Guardar imágenes en Storage
12 min
### 292. Ajustes finales del proyecto
10 min
### 293. Validar tipo de imagen
5 min
### 294. Archivos terminados de esta sección
1 min
### 295. Reglas Firebase y subir al Hosting
1 min
### 296. Presentación del proyecto CHAT
1 min
### 297. Versión de Firebase (¡Importante!)
1 min
### 298. Crear vista chat
10 min
### 299. Validar formulario con Vuetify
4 min
### 300. Guardar mensajes en Firestore
5 min
### 301. Leer datos en tiempo real con firebase
7 min
### 302. Ordenar y limitar documentos + Ajustes visuales
14 min
### 303. Archivos terminados de esta sección
1 min
### 304. Reglas Firebase y subir al Hosting
1 min
### 305. Módulos en VUEX
14 min
### 306. Introducción a Nuxt.js
2 min
### 307. Qué es Nuxt?
4 min
### 308. Instalación de un nuevo proyecto de Nuxt
4 min
### 309. Rutas con Nuxt
2 min
### 310. Rutas dinámicas con Nuxt
6 min
### 311. NuxtLink
5 min
### 312. Layout
4 min
### 313. Página de Error 404
1 min
### 314. Agregar CSS adicionales
6 min
### 315. SEO - Configurando el head
3 min
### 316. Práctica: Traer Artículos a nuestro blog
6 min
### 317. Práctica: Página detalle blog
6 min
### 318. Práctica: Conociendo Async Data
11 min
### 319. Archivos Terminados de esta sección
1 min
### 320. Presentación del Proyecto Nuxt + Vuex + Firebase
1 min
### 321. Agregar Navbar a Nuxt
4 min
### 322. Versión de Firebase (¡Importante!)
1 min
### 323. Instalar Firebase en Nuxt
9 min
### 324. Configurando Vuex en Nuxt
3 min
### 325. Fetch en Nuxt
16 min
### 326. Agregar Tarea a Firestore
8 min
### 327. Eliminar Tarea de Firestore
8 min
### 328. Editar Tarea Firestore
19 min
### 329. Archivos Terminados de esta sección
1 min
### 330. Presentación MEVN [Node.js, MongoDB, Express y Vue.js]
2 min
### 331. Hola mundo con Node.js y Express.js
21 min
### 332. Incorporando Babel.js
17 min
### 333. Subiendo servidor a Heroku
11 min
### 334. Mongoose
8 min
### 335. Schema
9 min
### 336. Ruta POST
10 min
### 337. Postman
8 min
### 338. Ruta GET con parámetros
6 min
### 339. Ruta GET sin parámetros
4 min
### 340. Ruta DELETE
6 min
### 341. Ruta PUT
6 min
### 342. Archivos Terminados de esta sección
1 min
### 343. Instalación de Vue.js con CLI 3
9 min
### 344. Configurando Rutas
3 min
### 345. Axios y ruta GET
15 min
### 346. Alertas con Bootstrap 4
8 min
### 347. Axios y ruta POST
15 min
### 348. Axios y ruta DELETE
8 min
### 349. Axios y ruta PUT
18 min
### 350. Frontend + Backend [Producción]
5 min
### 351. MongoDB en la nube + Heroku [Producción]
16 min
### 352. Archivos Terminados de esta sección
1 min
### 353. Modelo User
6 min
### 354. POST User
8 min
### 355. Email único
5 min
### 356. Encriptar contraseña
8 min
### 357. PUT User
7 min
### 358. PUT User contraseña
5 min
### 359. Ruta Login
4 min
### 360. POST Login
8 min
### 361. JWT | JSON Web Tokens
11 min
### 362. Middleware | Verificar User
14 min
### 363. Middleware | Verificar Administrador
9 min
### 364. Agregar Middleware a Ruta notas
8 min
### 365. Archivos Terminados de esta sección
1 min
### 366. Vista Login
6 min
### 367. Axios Login
6 min
### 368. JWT decode
10 min
### 369. Rutas protegidas
7 min
### 370. Cerrar sesión
5 min
### 371. GET con JWT
3 min
### 372. POST con JWT
2 min
### 373. Mantener sesión activa
3 min
### 374. Navbar con VueBootstrap
4 min
### 375. Heroku y MongoDB Atlas
7 min
### 376. Archivos Terminados de esta sección
1 min
### 377. Paginado con Mongoose
10 min
### 378. Conceptos claves de Querys con Router-link
8 min
### 379. Primeras configuraciones con Vue
4 min
### 380. Get con Query en Axios
11 min
### 381. Paginación con Bootstrap 4
9 min
