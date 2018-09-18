<template>
  <div class="main">
    <div class="background">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="space"></div>
    </div>
    <div class="pic" v-on:click="navToggle"></div>
    <div class="butts" v-bind:class="navpaneLogic">
      <button class="About" v-on:click="navToggle(); $router.push('/')">About</button>
      <button class="Blog" v-on:click="navToggle(); $router.push('/Blog')">Resume</button>
      <button class="Portfolio" v-on:click="navToggle(); $router.push('/Portfolio')">Portfolio</button>
      <button class="contact" v-on:click="navToggle(); $router.push('/Contact')">Contact</button>
    </div>
    <div class="titles">
    <h1>Kristoffer St John</h1>
    <h2>Software Engineer<br/>VueJS Developer</h2>
  </div>
    <div class="links">
      <a href="https://twitter.com/KrisStJohn27" class="twitter"></a>
      <a href="https://www.linkedin.com/in/kristoffer-st-john-948944145/" class="linkedin"></a>
      <a href="https://github.com/Spiralis-Solutions" class="github"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    navpaneLogic: function () {
      return {
        navpane: this.first,
        navpaneAnimation: this.isToggled,
        navpaneAnimationExit: !this.isToggled && !this.first
      }
    }
  },
  data () {
    return {
      toggled: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (this.toggled === false) {
        this.toggled = true
        this.isToggled = true
        this.first = false
      } else if (this.toggled === true) {
        this.toggled = false
        this.isToggled = false
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang="less">

.main {
  width: 100vw;
  height: 100vh;
  z-index: 4;
  right:0;
  top:0;
  position: absolute;
}
@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling, .space {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
  opacity: 2;
}
.space {
  background-image: url('../assets/space.jpg');
  z-index:2;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .5;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}
.background {
  width: 100vw;
  height: 100vh;
  z-index: 4;
  right:0;
  top:0;
  position: absolute;
  z-index: 2;
}
.links {
  margin-top: 5vh;
  z-index: 5;
  width: 30vw;
  height: 10vh;
  right:0;
  top:0;
  background: transparent;
  position: absolute;
  display: grid;
  grid-template-columns: 10vw 10vw 10vw;
}
.pic {
  background-image: url('../assets/me2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 2px solid white;
  margin: 1vh;
  z-index: 6;
  position: absolute;
  opacity: .5;
  color: white;
  text-align: center;
}
.twitter {
  background-image: url('../assets/twitter.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60px;
  width: 60px;
  opacity: .5;
}
.twitter:hover, .linkedin:hover, .github:hover, .pic:hover {
  animation: hoverup .25s steps(6);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes hoverup {
    0% {  opacity: .5; }
    50% {  opacity: .7; }
    100% {  opacity: 1;}
  }
}
.linkedin {
  background-image: url('../assets/linkedin.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60px;
  width: 60px;
  opacity: .5;
}
.github {
  background-image: url('../assets/git.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60px;
  width: 60px;
  opacity: .5;
}
.butts {
  width: 120px;
  height: 20vh;
  display: grid;
  grid-template-rows: 5vh 5vh 5vh;
  grid-gap: 3vh;
  top: 0;
  margin-top: 20vh;
  margin-left: .5vw;
}
button {
  z-index: 5;
  width: 100%;
  color: white;
  background: transparent;
  border: none;
  opacity: .5;
  font-size: 1.6em;
  font-weight: 300;
  text-align: center;
  font-family: 'Encode Sans Condensed', sans-serif;
}
button:hover {
  animation: hoverup .3s steps(6);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes hoverup {
    0% {  opacity: .5; }
    50% {  opacity: .7; }
    100% {  opacity: 1;}
  }
}

@keyframes navpaneAnimation {
  0% { top: -220px; opacity: 0; }
  50% { top: 5px; opacity: .1; }
  100% { top: 0px; opacity: 1;}
}

@keyframes navpaneAnimationReverse {
  0% { top: 0px;  }
  50% { top: 5px; opacity: .1; }
  100% { top: -220px; opacity: 0; }
}

.navpaneAnimation {
  position: fixed;
  animation: navpaneAnimation .5s steps(18);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  z-index: 4;
}

.navpaneAnimationExit {
  position: fixed;
  animation: navpaneAnimationReverse .5s steps(18);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  z-index: 4;
}
.navpane {
  display: none;
}
.titles {
  top: 0;
  position: absolute;
  display: grid;
  grid-template-rows: 5vh 5vh;
  grid-template-columns: 140px 50vw;
}
h1 {
  z-index: 7;
  position: absolute;
  color: white;
  font-size: 2em;
  font-family: 'Encode Sans Condensed', sans-serif;
  text-align: center;
  opacity: .8;
  letter-spacing: 1px;
  grid-column: 2;
  grid-row: 1;
}
h2 {
  z-index: 7;
  position: absolute;
  color: white;
  font-size: 1.5em;
  font-family: 'Encode Sans Condensed', sans-serif;
  text-align: left;
  margin-top: 0;
  opacity: .6;
  font-style: italic;
  grid-column: 2;
  grid-row: 2;
  letter-spacing: 1px;
  margin-top: 2vh;
}
@media (max-width: 1000px) {
  .titles {
    position: absolute;
    display: grid;
    grid-template-rows: 5vh 5vh;
    grid-template-columns: 140px 60vw;
  }
  .links {
    margin-right: -70px;
    margin-top: 1vh;
    display: grid;
    grid-template-columns: 10vw;
    grid-template-rows: 5vh 5vh 5vh;
  }
  .twitter, .linkedin, .github {
    height: 30px;
    width: 30px;
  }
  h1 {
    grid-column: 2;
    grid-row: 1;
    font-size: 1.5em;
  }
  h2 {
    font-size: 1em;
    letter-spacing: 1px;
    grid-column: 2;
    grid-row: 2;
    margin-top: 2vh;
  }
  @keyframes navpaneAnimation {
    0% { left: -220px; opacity: 0; }
    50% { left: 5px; opacity: .1; }
    100% { left: 0px; opacity: 1;}
  }

  @keyframes navpaneAnimationReverse {
    0% { left: 0px;  }
    50% { left: 5px; opacity: .1; }
    100% { left: -220px; opacity: 0; }
  }
  .butts {
    width: 100%;
    height: 20vh;
    display: grid;
    grid-template-rows: 5vh;
    grid-template-columns: 12vw 15vw 15vw 15vw;
    grid-gap: 1vh;
    top: 0;
    margin-top: 17vh;
    margin-left: 29vw;
  }
  button {
    font-size: 1em;
    opacity: .7;
    text-align: center;
  }
}
@media (min-width: 1000px) {
  h2 {
    font-size: 1em;
  }
  h1 {
    font-size: 1.4em;
  }
  button {
    font-size: 1.3em;
  }
}
</style>
