<template>
  <div class="main">
    <div class="content">
      <h2>Portfolio</h2>
      <p>All examples shown are exempt from NDA's</p>
      <div class="n1"></div>
      <div class="n2"></div>
      <div class="n3"></div>
      <div class="m1"></div>
      <div class="m2"></div>
      <div class="m3"></div>
      <div class="t1"></div>
      <div class="q1"></div>
      <div class="q2"></div>
      <div class="links">
      <a href="https://neuronautsolutions.com/">Neuronaut Solutions</a><br/>
      <a href="https://www.mystic-crm.com/">Mystic CRM</a><br/>
      <a href="https://thumbnailconsulting.com/">Thumbnail Consulting</a><br/>
      <a href="https://quickvenom.org/">Quick Venom</a><br/>
      <a href="https://blakelateshow.com/">Blake Late Show</a>
    </div>
    <p class="req">If you wish to see more, examples of my work are available upon request</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>

<style scoped lang="less">
.main {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 5vw 90vw 5vw;
  grid-template-rows: 15vh 70vh 15vh;
}
.content {
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
  margin-top: 7vh;
  height: 77vh;
  z-index: 6;
  background:rgba(0,0,0,0.4);
  border-radius: 12px;
  box-shadow: 2px 2px 4px #000;
  position: absolute;
  overflow-y: scroll;
  width: 100%;
  grid-template-rows: repeat(2, 10vh) repeat(5, 50vh);
}
h2 {
  font-family: 'Encode Sans Condensed', sans-serif;
  text-align: center;
  color: white;
  height: 1vh;
  opacity: .8;
  letter-spacing: 1px;
}
p {
  color: white;
  font-size: 1em;
  font-family: 'Encode Sans Condensed', sans-serif;
  letter-spacing: 1px;
  opacity: .8;
  text-align: center;
  font-style: italic;
}
.n1{
  background-image: url('../assets/n1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 300px;
}
.n2 {
  background-image: url('../assets/n2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.n3{
  background-image: url('../assets/n3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.m1{
  background-image: url('../assets/m1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.m2{
  background-image: url('../assets/m2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.m3{
  background-image: url('../assets/m3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.t1{
  background-image: url('../assets/t1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.q1{
  background-image: url('../assets/q1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.q2{
  background-image: url('../assets/q2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 45vh;
}
.links {
  text-align: center;
  color: white;
  font-size: 1em;
  font-family: 'Encode Sans Condensed', sans-serif;
}
a {
  letter-spacing: 1px;
  color: white;
  font-size: 1em;
  font-family: 'Encode Sans Condensed', sans-serif;
}
.req {
  grid-row: 8;
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
@media (min-width: 700px) {
  .main {
    grid-template-columns: 10vw 85vw 5vw;
  }
  .content {
    grid-template-columns: 1fr 1fr 1fr;
  }
  h2 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 1;
    font-size: 1.5em;
  }
  p {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 2;
  }
  .n1{
    grid-column-start: 1;
    grid-column-end: 4;
    height: 45vh;
  }
  .q2 {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .links {
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 2em;
  }
}
</style>
