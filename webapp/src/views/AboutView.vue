<template>
  <div class="about">
    <h1>Conoce *Nombre de la página*</h1>
    <article>
      <h2>¿Qué es *Nombre de la página*?</h2>
      <p class="about-text">
        Mediante *Nombre de la página* todos los usuarios podrán realizar su
        investigación y búsquedas, viendo la forma en la que se invierten
        diversas subvenciones del estado (obteniendo los datos actualizados a
        través de datos oficiales de la web del gobierno).
      </p>
      <p class="about-text">
        Mantenido por nuestros desarrolladores, cualquiera puede contribuir al
        proyecto, ya sea mediante sus propias sugerencias que acogeremos
        cálidamente así como desarrollando directamente en el proyecto (ya que
        es un proyecto Open Source en el que cualquiera puede participar y
        acceder al código fuente).
      </p>
    </article>
    <article>
      <h2>¿Por qué *Nombre de la página*?</h2>
      <p class="about-text">
        Para poder hablar de *nombre de la página* tenemos que remontarnos a su
        origen, en la empresa Empathy.CO.
      </p>
      <p class="about-text">
        Desde la empresa de Empathy.CO buscamos el mejor servicio para nuestros
        clientes, haciendo que estos sean dueños de sus propios datos y tratando
        de garantizar una experiencia divertida, con confianza y entendiendo al
        cliente (haciendo referencia a los 3 principios básicos de la empresa:
        "Trust", "Joy" y "Understand").
      </p>
      <p class="about-text">
        Con este trasfondo, junto con los recién integrantes de un proyecto de
        formación protagonizado por la empresa y la universidad de Oviedo,
        Academy Project, y con la idea de Ángel Maldonado, CEO y cofundador de
        la empresa, surge el concepto de hacer una aplicación transparente,
        accesible y útil para todos. Así nace *Nombre de la página*, como un
        artefacto para alcanzar con mayor facilidad ese acceso acceso a la
        información que debería estar en manos de todos.
      </p>
    </article>
    <article>
      <h2>Conoce a los implicados</h2>
      <div class="devs-container">
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/jose.png"
            alt="Foto de Jose María"
          />
          <p class="dev-name about-text">José María Llorián</p>
          <p class="dev-description about-text">Product Owner</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/miguel.png"
            alt="Foto de Miguel"
          />
          <p class="dev-name about-text">Miguel Ligero</p>
          <p class="dev-description about-text">Front dev</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/carmen.png"
            alt="Foto de Carmen"
          />
          <p class="dev-name about-text">Carmen Rendueles</p>
          <p class="dev-description about-text">Front dev</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/marcos.png"
            alt="Foto de Marcos"
          />
          <p class="dev-name about-text">Marcos Tobias</p>
          <p class="dev-description about-text">Search dev</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/daniel.png"
            alt="Foto de Daniel"
          />
          <p class="dev-name about-text">Daniel Barrientos</p>
          <p class="dev-description about-text">Search dev</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/alberto.png"
            alt="Foto de Alberto"
          />
          <p class="dev-name about-text">Alberto Díez</p>
          <p class="dev-description about-text">Search dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/pablo.png" alt="Foto de Pablo" />
          <p class="dev-name about-text">Pablo Santurio</p>
          <p class="dev-description about-text">Data dev</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/rodri.png"
            alt="Foto de Rodrigo"
          />
          <p class="dev-name about-text">Rodrigo Álvarez</p>
          <p class="dev-description about-text">Data dev</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/enrique.png"
            alt="Foto de Enrique"
          />
          <p class="dev-name about-text">Enrique Carnero</p>
          <p class="dev-description about-text">Data dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/angel.png" alt="Foto de Ángel" />
          <p class="dev-name about-text">Ángel Maldonado</p>
          <p class="dev-description about-text">CO of empathy.co and client</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jaime.png" alt="Foto de Jaime" />
          <p class="dev-name about-text">Jaime Obregón</p>
          <p class="dev-description about-text">Project inspiration</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/empathy.png"
            alt="Foto de colaboradores"
          />
          <p class="dev-name about-text">Collaborators from empathy</p>
          <p class="dev-description about-text">
            A lot of nice people that helped us :)
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
<style>
article {
  border: solid 3px var(--border-color);
  border-radius: 30px;
  margin: 50px;
}
.devs-container {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
.dev-card {
  border: solid 3px var(--border-color);
  border-radius: 30px;
  margin: 30px;
  padding: 15px;
  width: 300px;
}
.dev-icon {
  border-radius: 50%;
  border: solid 3px var(--border-color);
  width: 200px;
  height: 200px;
}
.dev-name {
  font-size: 26px;
  font-weight: 600;
}
.dev-description {
  font-size: 22px;
}
.about-text {
  font-size: 22px;
  margin: 20px 100px;
  text-align: center;
}
article {
  padding: 30px;
}
</style>
