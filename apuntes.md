# Vue js 3 [Actualizado] ¡De 0 a Experto! + Firebase + MEVN
+ [URL del curso en Coders Free](https://www.udemy.com/course/curso-vue)
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


## Introducción
### 1. Presentación al curso Vue - Vuex - VueRouter - Firebase
+ **Contenido**: Presentación del curso.


## ¡Importante! por favor ver este video :)
### 2. Actualización del curso de Vue 2 a Vue 3
+ https://bluuweb.github.io/vue-udemy/01-fundamentos
+ **Contenido**: sobre Vue 2 y Vue 3.


## Fundamentos de Javascript (sección opcional)
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


## Vue JS 3! - Fundamentos
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
+ Contenido: código de la sección.

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Fundamentos de Vue 3"
+ $ git push -u origin main


## Vue CLI 4 - Acelerando el desarrollo web

### 33. Mi primer proyecto con Vue Cli
11 min
### 34. Vetur can't find tsconfig.json or jsconfig.json
1 min
### 35. Analizando archivos de nuestro proyecto con Vue cli
7 min
### 36. Creando nuestro primer componente
8 min
### 37. Refuerzo sobre componentes
7 min
### 38. Comunicación entre componentes (parte 1)
5 min
### 39. Comunicación entre componentes (parte 2)
2 min
### 40. Custom Events (emit): Comunicación del hijo al padre (componentes)
8 min
### 41. Resolviendo tarea "bloquear botón"
4 min
### 42. Deploy a Hosting Gratuito
5 min
### 43. Archivos Terminados de esta sección
1 min
### 44. Introducción a Vue Router
1 min
### 45. Primeros pasos con Vue Router
6 min
### 46. Router-Link Router-View
3 min
### 47. Analizando configuración de Router
2 min
### 48. View - Primeros pasos
3 min
### 49. Componentes vs View
5 min
### 50. Rutas con Parámetros
5 min
### 51. Práctica: Fetch ( consumir API )
7 min
### 52. Práctica: Pintar títulos de blog
2 min
### 53. Created: Ciclo de vida de Vue
5 min
### 54. Práctica: Rutas con Parámetros (parte 1)
4 min
### 55. Práctica: Rutas con Parámetros (parte 2)
6 min
### 56. Deploy a Hosting Gratuito
2 min
### 57. Refresh 404 Hosting Netlify
1 min
### 58. Refresh 404 Hosting compartido
1 min
### 59. Archivos Terminados de esta sección
1 min
### 60. Introducción a Sección Vuex
1 min
### 61. ¿Qué es Vuex?
2 min
### 62. Más información sobre Vuex
1 min
### 63. Instalación de Vuex
3 min
### 64. State: Primeros pasos
4 min
### 65. MapState
5 min
### 66. Propiedades computadas
5 min
### 67. Mutations y MapMutation
4 min
### 68. Actions y MapAction
4 min
### 69. Práctica con componentes
5 min
### 70. Parámetros en Vuex
3 min
### 71. Props en botón aumentar/disminuir
5 min
### 72. Actions y Mutations en botonAccion
9 min
### 73. V-model: Comunicación directa entre input y data
2 min
### 74. Archivos Terminados de esta sección
1 min
### 75. Presentación Formularios con Vue.js
1 min
### 76. Instalación de un nuevo proyecto
2 min
### 77. Atención muy importante!
1 min
### 78. Navbar de Bootstrap 4
3 min
### 79. v-model: text
3 min
### 80. v-model: checkbox
4 min
### 81. v-model: radio
3 min
### 82. v-model: number
2 min
### 83. trim y submit
4 min
### 84. Validación
3 min
### 85. Bloquear botón submit
1 min
### 86. Limpiar campos
1 min
### 87. Archivos Terminados de esta sección
1 min
### 88. Presentación CRUD + LocalStorage
1 min
### 89. Clonar proyecto anterior
2 min
### 90. Separar inputs en un componente
5 min
### 91. Vuex y generar IDs
6 min
### 92. Pintar Tareas en una tabla
7 min
### 93. Pintar categorías (v-for dentro de otro v-for)
4 min
### 94. Función join() Javascript
1 min
### 95. Eliminar items
5 min
### 96. Editar items (parte 1 - capturar id)
11 min
### 97. Editar items (parte 2 - formulario edición)
10 min
### 98. Respaldar información en LocalStorage
10 min
### 99. Archivos Terminados de esta sección
1 min
### 100. API REST Firebase - Introducción
1 min
### 101. Firebase - Primeros pasos
8 min
### 102. PUT o POST: Agregar tareas a nuestra base de datos
17 min
### 103. DevTools failed to load sourcemap
1 min
### 104. GET: Leer base de datos
8 min
### 105. PATCH: Editar tarea de base de datos
4 min
### 106. DELETE: Eliminar tarea de base de datos
4 min
### 107. Archivos Terminados de esta sección
1 min
### 108. Introducción API AUTH FIREBASE
1 min
### 109. Importante - Recomendación
1 min
### 110. Reglas de seguridad Firebase
3 min
### 111. Formulario Registro con Validaciones en Vue.js
11 min
### 112. Registrar usuario en Firebase
18 min
### 113. ¿No ves la API KEY?
1 min
### 114. Corrección error video anterior + commit de usuario
2 min
### 115. Ingreso de usuario (Login)
11 min
### 116. Reglas de seguridad Firebase
13 min
### 117. Getters: Ocultar enlaces navbar
5 min
### 118. Cerrar sesión
3 min
### 119. Router: Rutas protegidas
7 min
### 120. Guardar Token en LocalStorage
7 min
### 121. Hosting Firebase
7 min
### 122. Hosting Netlify
2 min
### 123. Refresh 404 Hosting Netlify
1 min
### 124. Mensajes error Firebase
18 min
### 125. Archivos Terminados de esta sección
1 min
### 126. Composition API - Introducción
1 min
### 127. ¿Por qué utilizar Composition API?
6 min
### 128. Setup, Ref y Métodos
9 min
### 129. Propiedades computadas (computed)
4 min
### 130. v-model
2 min
### 131. Props - Comunicación entre componentes
8 min
### 132. emit: Comunicación del hijo al padre (componentes)
6 min
### 133. Reutilizando lógica de componentes
10 min
### 134. Práctica consumir API Pública (fetch y onMounted)
10 min
### 135. Params en setup()
6 min
### 136. Hooks - Reutilización
7 min
### 137. Archivos Terminados de esta sección
1 min
### 138. Introducción a Vuex y Composition API
1 min
### 139. Instalación de Vue 3 + Vuex
3 min
### 140. URL API
1 min
### 141. Composition API - Actions
12 min
### 142. Composition API - State
3 min
### 143. Configurar Getters
4 min
### 144. Composition API - Getters
5 min
### 145. Formatear número
3 min
### 146. Pintar Banderas
2 min
### 147. Vuex - Filtrar países
13 min
### 148. Vuex - Filtrar por región
6 min
### 149. KeyUp: Buscador en tiempo real
4 min
### 150. Vuex - Buscador
6 min
### 151. Optimizar código (aporte estudiante)
1 min
### 152. Deploy a Hosting Gratuito
2 min
### 153. Archivos Terminados de esta sección
1 min
### 154. Instalación del proyecto con Vue 3
3 min
### 155. Provide e Inject - Aprendiendo con la práctica
9 min
### 156. Presentación del proyecto a realizar
1 min
### 157. Bootstrap 5 y FontAwersome 5
4 min
### 158. Componente Formulario (utilizando Provide e inject)
11 min
### 159. Componente Pintar Tareas (Props)
8 min
### 160. Eliminar y Editar (utilizando Provide e inject)
10 min
### 161. watchEffect en Vue 3
7 min
### 162. Deploy a Hosting Gratuito
2 min
### 163. Archivos Terminados de esta sección
1 min
### 164. Vetur can't find tsconfig.json or jsconfig.json
3 min
### 165. script setup
5 min
### 166. script setup con props
1 min
### 167. Reactive vs Ref (parte 1)
7 min
### 168. Reactive vs Ref (parte 2)
7 min
### 169. Reactive vs Ref (parte 3)
4 min
### 170. Suspense
8 min
### 171. Próximamente...
1 min
### 172. Presentación: VUE 3 + Composition API + Firestore + Auth Google
4 min
### 173. Versión de Firebase (¡Importante!)
1 min
### 174. Instalar y configurar Vue 3 + Firebase
9 min
175. Configurar Rutas y limpiar proyecto
2 min
### 176. Configurar Auth y Firestore en Vue 3
5 min
### 177. Componente Navbar
2 min
### 178. Iniciar sesión con Google
8 min
### 179. Importante - Leer
1 min
### 180. Composable useFirebase
8 min
### 181. Configurar rutas protegidas con Firebase
8 min
### 182. Loading para nuestra aplicación web
6 min
### 183. Vista CRUD
3 min
### 184. Obtener Documentos de Firestore
11 min
### 185. Pintar componente Error
5 min
### 186. Agregar documentos a Firestore
10 min
### 187. Pintar Todo a través de un PROPS
3 min
### 188. Eliminar documento de Firestore
6 min
### 189. Modificar documento de Firestore
7 min
### 190. Reglas de seguridad Firestore
6 min
### 191. Deploy a Hosting Firebase
5 min
### 192. Archivos Terminados de esta sección
1 min
### 193. Introducción
1 min
### 194. The popup has been closed by the user before finalizing the operation
1 min
### 195. Actualizaciones y nuevas secciones 2021
1 min
### 196. ¡Importante! ¿Vue versión 2 o 3?
6 min
### 197. Vista previa del proyecto
1 min
### 198. Archivos terminados de esta sección
1 min
### 199. Vue Cli 4 y Primeros pasos con Firebase
8 min
### 200. Versión de Firebase (¡Importante!)
1 min
### 201. Configurar Firebase en Vue.js
5 min
### 202. Obtener Documentos de Firestore
10 min
### 203. Listar documentos en Vue.js
6 min
### 204. Editar documentos Firestore
10 min
### 205. Formulario para editar documentos
6 min
### 206. Agregar documentos a Firestore
7 min
### 207. Eliminar documento de Firestore
9 min
### 208. Finalizando proyecto agregando Bootstrap 4
9 min
### 209. Presentación del proyecto AUTH (Login y Registro)
1 min
### 210. Versión de Firebase (¡Importante!)
1 min
### 211. Instalación Vue CLI 4 e iniciar proyecto de Firebase
7 min
### 212. Devtools y documentación
1 min
### 213. Archivo configuración Firebase
3 min
### 214. Vista y Ruta Registro.vue
8 min
### 215. Registrar nuevo usuario en Firebase
18 min
### 216. Validando contraseñas
6 min
### 217. Push a vista Inicio.vue
5 min
### 218. Validar tamaño de contraseña
1 min
### 219. Acceso usuarios registrados (Login)
12 min
### 220. Cerrar sesión
4 min
### 221. Detectar usuario registrado
10 min
### 222. Rutas protegidas
9 min
### 223. Error en consola
2 min
### 224. Getters: ocultar menú de navegación
4 min
### 225. Relacionar Auth con Collection de Firestore
7 min
### 226. GET Tareas de un usuario registrado
4 min
### 227. UPDATE Tarea de usuario
4 min
### 228. POST tarea de usuario
2 min
### 229. DELETE tarea de usuario
3 min
### 230. Introducción a Bootstrap 4
2 min
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