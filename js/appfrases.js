const frases = [{ frase: "al que madruga le roban", autor: "Pepeito perez" },
{ frase: "al que madruga dios le ayuda", autor: "Jhoncito perez" },
{ frase: "camaron que se duerme se lo lleva la corriente", autor: "Augusto Cuacuango" },
{ frase: "camaron que se duerme se lo comen", autor: "Mauricio Yajairo" },
{ frase: "mas vale pajaro en mano que ciento volando", autor: "Jhon Rivera" }];

const app = Vue.createApp({
    data() {
        return {
            listasFrases: frases,
            frase:null,
          //  autor:'sin autor',
          autor:null,

        }
    },
    methods: {
        agregarFrase(){
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor:this.autor
            };

            this.listasFrases.unshift(nuevaFrase);

        },
        agregarFraseFinal(){
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor:this.autor
            };

            this.listasFrases.push(nuevaFrase);

        },
        eventoKeyPress({charCode, cancelable, key, keyCode,target}){
           if(charCode ===13){
           // console.log('evento');
            console.log(cancelable)
            console.log(key)

            console.log(keyCode)
            console.log(target)

            this.agregarFraseFinal()
           }

        },
        eventoKeyPressModificador(){
            
             console.log('evento');
             
 
             this.agregarFraseFinal()
            
 
         }
    }

})

app.mount('#myapp')