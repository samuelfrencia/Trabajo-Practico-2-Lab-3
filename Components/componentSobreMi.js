app.component('sobreMi', {
  template:
  /*html*/
  `    <!--SOBRE MI-->
  <div class="col-md-4">
      <div class="sobreMi" id="">
          <h4>{{ titulo }}</h4>
            <p>{{ info }} </p>
      </div>
  </div>
  <div class="col-md-1"></div>`,

  data(){
      return{
        titulo: "Sobre mi",
        info: "¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio, Japón. Me encanta capturar la esencia de la vida urbana a través de mi lente, explorando elcontraste entre la arquitectura moderna y las tradiciones centenarias que conviven en esta metrópolis única. Desde rascacielos deslumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, encuentro inspiración en cada rincón de esta increíble ciudad."
      }
  }
})