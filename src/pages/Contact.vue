<template>
  <div class="main">
    <div class="content">
      <h1>Contact</h1>
      <p>Krisstjohn96@gmail.com</p>
      <p>602-421-9213</p>
      <p>(Please Email to Schedule Calls First)</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped lang="less">
.main {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 10vw 85vw 5vw;
  grid-template-rows: 15vh 70vh 15vh;
}
.content {
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
  width: 100%;
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
h1 {
  font-family: 'Encode Sans Condensed', sans-serif;
  text-align: center;
  color: white;
  opacity: .8;
  letter-spacing: 1px;
  font-size: 2.5em;
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
  text-align: center;
}
a {
  color: cyan;
}
span {
  color: cyan;
}

@media (max-width: 900px) {
  .main {
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
  p {
    font-size: 1em;
  }
  h2 {
    font-size: 1.5em;
  }
}
@media (min-width: 1000px) {
  h2 {
    font-size: 1.5em;
  }
  p {
    font-size: 1em;
  }
}
</style>
