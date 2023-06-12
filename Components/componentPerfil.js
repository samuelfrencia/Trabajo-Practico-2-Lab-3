app.component('perfil', {
  template:
  /*html*/
  `<div class="row">
  <div class="col-md-1"></div>
  <div class="bordePerfil col-md-10">
      <div class="row perfil-info">
          <div class="col-md-3">
              <div class="bordeFotoPerfil">
                  <img :src="image" alt="JaneDoe" class="imgJaneDoe">
              </div>
          </div>
          <div class="col-md-7">
              <h1><b>{{ nombre }}</b></h1>
              <p><b>Email:</b> {{email}}</p>
              <p><b>Fecha de nacimiento:</b> {{fechaNacimiento}}</p>
              <p><b>Telefono:</b> {{ nroTel }} </p>
              <p><b>Ciudad:</b> {{ ciudadDondeVive }} </p>
              <p style="opacity: 50%;">Trabajando en: <b>{{lugarDeTrabajo}}</b> </p>
          </div>
          <div class="col-md-2"><button id="seguirBtn" @click="cambiarEstadoSeguir" :style="{ backgroundColor: seguirBtnApretado ? 'green' : '', color: seguirBtnApretado ? 'white' : ''  }" class="buttonseguir btn btn-outline-success">{{ seguirBtnTexto }}</button></div>
      </div>
  </div>
  <div class="col-md-1"></div>
</div>
<br><br>`,

  data(){
      return{
          nombre:"Jane Doe",
          email: "JaneDoe@hotmail.com",
          fechaNacimiento: "25/05/1995",
          nroTel: "3564-505595",
          ciudadDondeVive: "Berlin",
          lugarDeTrabajo: "Google",

          image: "Images/janedoe.jpeg",
          seguirBtnTexto: "Seguir",
          seguirBtnApretado: false 
      }
  },
  methods: {
    cambiarEstadoSeguir() {
        this.seguirBtnApretado = !this.seguirBtnApretado;
  
        if (this.seguirBtnApretado) {
          this.seguirBtnTexto = 'Dejar de seguir';
        } else {
          this.seguirBtnTexto = "Seguir";
        }
        
    }
  }
})
