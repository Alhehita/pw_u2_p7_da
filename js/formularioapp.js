const datos = []

const app = Vue.createApp({
    data() {
        return {
            listadatos: datos,
            nombre: null,
            apellido: null,
            hobbie: null,
            lugarNacimiento: null

        }
    },
    methods: {

        agregarDatos() {
            console.log(this.nombre);
            console.log(this.apellido);
            console.log(this.hobbie);
            console.log(this.lugarNacimiento);

            const nuevosDatos = {
                nombre: this.nombre,
                apellido: this.apellido,
                hobbie: this.hobbie,
                lugarNacimiento: this.lugarNacimiento
            };

            this.listadatos.unshift(nuevosDatos)
            this.limpiarPantalla();
        },
        limpiarPantalla(){
            this.nombre = null;
            this.apellido=null;
            this.hobbie=null;
            this.lugarNacimiento= null;
        }

    }

})

app.mount('#myapp')