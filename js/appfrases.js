const frases = [{ frase: "al que madruga le roban", autor: "Pepeito perez" },
{ frase: "al que madruga dios le ayuda", autor: "Jhoncito perez" },
{ frase: "camaron que se duerme se lo lleva la corriente", autor: "Augusto Cuacuango" },
{ frase: "camaron que se duerme se lo comen", autor: "Mauricio Yajairo" },
{ frase: "mas vale pajaro en mano que ciento volando", autor: "Jhon Rivera" }];

const app = Vue.createApp({
    data() {
        return {
            listasFrases: frases,
        }
    },
    methods: {

    }

})

app.mount('#myapp')