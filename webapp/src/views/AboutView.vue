<template>
  <div class="about">
    <h1>Conoce *Nombre de la página*</h1>
    <article>
      <h2>¿Qué es *Nombre de la página*?</h2>
      <p>Texto describiendolo</p>
    </article>
    <article>
      <h2>¿Por qué *Nombre de la página*?</h2>
      <p>Texto describiendolo</p>
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
          <p class="dev-name">José María Llorian</p>
          <p class="dev-description">Product Owner</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Miguel" />
          <p class="dev-name">Miguel Ligero</p>
          <p class="dev-description">Front dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Carmen" />
          <p class="dev-name">Carmen Rendueles</p>
          <p class="dev-description">Front dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Marcos" />
          <p class="dev-name">Marcos Tobias</p>
          <p class="dev-description">Search dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Daniel" />
          <p class="dev-name">Daniel Barrientos</p>
          <p class="dev-description">Search dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Alberto" />
          <p class="dev-name">Alberto Díez</p>
          <p class="dev-description">Search dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Pablo" />
          <p class="dev-name">Pablo Santurio</p>
          <p class="dev-description">Data dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Rodrigo" />
          <p class="dev-name">Rodrigo Álvarez</p>
          <p class="dev-description">Data dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Enrique" />
          <p class="dev-name">Enrique Carnero</p>
          <p class="dev-description">Data dev</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Ángel" />
          <p class="dev-name">Ángel Maldonado</p>
          <p class="dev-description">CO of empathy.co and client</p>
        </div>
        <div class="dev-card">
          <img class="dev-icon" src="@/assets/jose.png" alt="Foto de Jaime" />
          <p class="dev-name">Jaime Obregón</p>
          <p class="dev-description">Project inspiration</p>
        </div>
        <div class="dev-card">
          <img
            class="dev-icon"
            src="@/assets/jose.png"
            alt="Foto de colaboradores"
          />
          <p class="dev-name">Collaborators from empathy</p>
          <p class="dev-description">A lot of nice people that helped us :)</p>
        </div>
      </div>
    </article>
  </div>
</template>
<style>
article {
  border: solid 5px #243d48;
  border-radius: 30px;
  margin: 50px;
}
.devs-container {
  display: flex;
  flex-flow: wrap;
}
.dev-card {
  border: solid 5px #243d48;
  border-radius: 30px;
  margin: 30px;
  padding: 15px;
  width: 400px;
}
.dev-icon {
  border-radius: 50%;
  border: solid 5px #243d48;
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
</style>
