const app = Vue.createApp({
  data() {
      return {
          nombreUsuario: ''
      }
  },
  methods: {
      actualizarNombreUsuario(nombre){
          this.nombreUsuario = nombre;
      }
  }

})