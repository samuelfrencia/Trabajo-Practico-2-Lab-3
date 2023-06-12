app.component('publicacion', {
  template: `
    <div class="col-md-1"></div>
    <div class="seccionDeFotoYcomentarios col-md-5">
        <p style="opacity: 50%;">Publicado hace 1 semana</p>
        <img :src="image" alt="paisaje" class="imgPaisaje">
        <br><br>
        <div id="contenedor-me-gusta">
            <button @click="darMeGusta" class="boton-me-gusta btn btn-outline-danger" :style="{ backgroundColor: meGustaBtnApretado ? 'red' : '', color: meGustaBtnApretado ? 'white' : ''  }" >Me gusta</button>
            <p id="contador-me-gusta">{{ likes }} Likes</p>
        </div>
        <!--SECCION DE COMENTARIOS-->
        <br>
        <h6>Comentarios</h6>
        <p v-for="comentario in comentarios" :key="comentario.id">
          <b id="nombresEnColor">{{ comentario.nombre }}</b> {{ comentario.texto }}
          <button v-if="!comentario.esFijo" @click="eliminarComentario(comentario.id)" class="btn btn-outline-danger btn-sm">Eliminar</button>
        </p>
        <!--PARA AGREGAR LOS COMENTARIOS-->
        <p id="caja-comentarios"></p>
        <form class="d-flex" role="search" @submit.prevent="agregarComentario">
            <input class="form-control me-2" id="comentario" type="search" placeholder="Comente la foto.." aria-label="Search" v-model="nuevoComentario">
            <button class="btn btn-outline-success" type="submit">Comentar</button>
        </form>
        <p v-if="error" class="text-danger">{{ error }}</p>
        <br>
    </div>
    <div class="col-md-1"></div>
  `,

  props: ['usuario'],

  data() {
    return {
      image: "Images/paisaje.jpeg",
      likes: 200,
      comentarios: [
        { id: 1, nombre: "Juan Perez", texto: "wow esa foto de Tokio es impresionante!", esFijo: true },
        { id: 2, nombre: "Kathleen J Rennie", texto: "esta foto de Tokio es espectacular!", esFijo: true },
        { id: 3, nombre: "Diana Bell", texto: "espero que algún día pueda ver Tokio en persona!", esFijo: true }
      ],
      nuevoComentario: '',
      error: ''
    }
  },
  methods: {
    darMeGusta() {
      this.meGustaBtnApretado = !this.meGustaBtnApretado;
      if (!this.meGustaBtnApretado) {
        meGustaBtnApretado = false;
        this.likes--;
      } else {
        meGustaBtnApretado = true;
        this.likes++;
      }
    },

    agregarComentario() {
      if (this.nuevoComentario.trim() !== '' && this.usuario !== '') {
        const comentarioNuevo = {
          id: Date.now(),
          nombre: this.usuario,
          texto: this.nuevoComentario,
          esFijo: false
        };

        this.comentarios.push(comentarioNuevo);
        this.nuevoComentario = '';
        this.error = ''; 
      } else {
        this.error = 'Por favor, ingrese un usuario y un comentario.'; 
      }
    },

    eliminarComentario(id) {
      const comentario = this.comentarios.find(c => c.id === id);
      if (!comentario.esFijo) {
        this.comentarios = this.comentarios.filter(c => c.id !== id);
      }
      }
  }
})

