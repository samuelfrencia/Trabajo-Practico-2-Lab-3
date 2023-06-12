app.component('nav-bar', {
  template:
  /*html*/
  `<nav class="navbar bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
          <a class="navbar-brand"><img v-bind:src="image" alt="LogoGlobo" style="width: 70%;"></a>
          <form class="d-flex" @submit.prevent>
          <input class="form-control me-2" id="nombre-usuario" type="search" v-model="nombreUsuario" placeholder="Ingrese su usuario" aria-label="Search">
        </form>
      </div>
  </nav>
  <br><br>`,

  data(){
      return{
          image: "Images/globo.png", 
          nombreUsuario: ''
        }
  },
  watch: {
    nombreUsuario(nuevoValor){
      this.$emit('nombre-usuario-actualizado', nuevoValor);
    }
  }
    
})