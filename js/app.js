console.log(Vue)

const app = Vue.createApp({
    // template: ` palabra reservada de vue
    //  <h1>Hola Mundo</h1>
    // <p>Con Vue.JS</p>
    // <p>{{1+2}}</p>
    //  <p>{{[1,2,3,4,5,6,7]}}</p>
    // <p>{{ {nombre:"Dennisse",apellido:"Andrade"} }}</p>
    // <p>{{true ? 'Activo':'Inactivo' }}</p>
    // <p>1==1</p>
    // <p>{{1==1}}</p>
    // `,
    // style: ``
    methods: {
        cambiarMensaje() {
            this.mensaje = "Nuevo mensaje";
            this.edad = 30;
        }
    },
    data() {
        return {
            mensaje: 'Hola mundo PWeb',
            edad: 35,
        }
    }
})

app.mount('#myapp')