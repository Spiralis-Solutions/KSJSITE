<template>
  <div class="biomain">
    <div class="content">
      <div class="banner">Photo courtesy of WozU 2018</div>
      <div class="words">
      <h2>Hello there, I'm Kristoffer...</h2>
      <p>I am a Software Engineer with a certification from WozU in Full Stack Web Development as of 2017.
        I have been working consistently doing Front End, UX, Full Stack and Machine Learning development.</p>
      <p>I have a keen eye for good UX/UI and an even keener sense for learning new techniques.</P>
      <p>I prefer to use a custom stack <a href="https://quickvenom.org/">QWC-VENUMM</a> (what this whole site is made in, actually), with my expertise based heavily in VueJS. It allows me to develop quick, efficient Single Page Applications from one codebase and build to all platforms. Making my work lightning fast and responsive.</p>
      <p>My work ranges from Hybrid Web App Development to Machine Learning solutions.
      Welcome to my blog, here you’ll find articles on miscellaneous coding techniques, expertise on Vue.js, As well as links to my online resume and work examples.</p>
      <p>If you have any questions or inquiries you can <span v-on:click="navToggle(); $router.push('/Contact')"> contact me here.</span></p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped lang="less">
.biomain {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10vw 85vw 5vw;
  grid-template-rows: 15vh 70vh 15vh;
}
.content {
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
  margin-top: 5vh;
  height: 77vh;
  z-index: 6;
  background:rgba(0,0,0,0.4);
  border-radius: 12px;
  box-shadow: 2px 2px 4px #000;
  position: absolute;
  overflow-y: scroll;
}
/* width */
::-webkit-scrollbar {
    width: 3px;
    height:3px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 15px;
    border: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.banner {
  position: absolute;
  background-image: url('../assets/woz.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 300px;
  margin-top: 5vh;
  padding-top: 300px;
  font-style: italic;
  text-align: center;
  color: grey;
}
.words {
  margin-top: 50vh;
}
h2 {
  font-family: 'Encode Sans Condensed', sans-serif;
  text-align: center;
  color: white;
  height: 5vh;
  opacity: .8;
  letter-spacing: 1px;
}
p {
  color: white;
  font-size: 1.7em;
  font-family: 'Encode Sans Condensed', sans-serif;
  letter-spacing: 1px;
  padding: 2vw;
  opacity: .8;
}
a {
  color: cyan;
}
span {
  color: cyan;
}

@media (max-width: 900px) {
  .biomain {
    grid-template-columns: 2vw 96vw 2vw;
    grid-template-rows: 15vh 70vh 15vh;
  }
  .content {
    margin-top: 10vh;
    height: 70vh;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 2;
  }
  .words {
    margin-top: 55vh;
  }
  p {
    font-size: 1em;
  }
  h2 {
    font-size: 1.5em;
  }
  .banner {
    padding-top: 30px;
    font-size: .8em;
  }
}
@media (min-width: 1000px) {
  h2 {
    font-size: 1.5em;
  }
  p {
    font-size: 1em;
  }
  .words {
    margin-top: 55vh;
  }
}
</style>
