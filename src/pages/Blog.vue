<template>
  <div class="main">
    <div class="content">
      <h1>Resume</h1>
      <h2>Methodology</h2>
      <p>Agile, Scrum, JIRA, Kanban, QWC-VENUMM, Git</p>
      <h2>Development Technologies</h2>
      <p>HTML5, CSS3, Javascript, VueJS, Express, NodeJS, Ubuntu Servers, Cordova, Quasar, Webpack, MongoDB, Mongoose, Amazon Web Services, JIRA, Github</p>
      <h2>Design Technologies</h2>
      <p>Adobe Photoshop, Illustrator, Premiere</p>
      <h2>Professional Experience</h2>
      <ul>
      <li>Screen Art Studios: 2017 - Present<br/>
Vice President and Co-Founder of a small software development startup.
</li>
      <li>Thumbnail Consulting: 2017-2018<br/>
Software Engineer for a business consulting company, creating products as well as contracted solutions for businesses.
</li>
      <li>Quickvenom.org: 2017-Present<br/>
A blog site centered around the technology I use to create hybrid web apps as quickly and efficiently as possible, with full technical tutorials.
</li>
    </ul>
    <h2>Project Experience</h2>
    <ul>
    <li>Building and deploying full SPAs to all platforms.</li>
    <li>Creating business software solutions such as CRMs, Custom Management and Warehouse scheduling software</li>
    <li>Created applications with geolocation, Stripe payment, Invoicing, CSV, Task Automation,
scheduling, file uploading, and some Machine Learning.
</li>
<li>-UX/UI focused design and code, from simple front end websites to complicated architectures.</li>
  </ul>
  <h2>Education</h2>
  <p>Full Stack Web Development Certification; Woz-U Coding Bootcamp</p>
  <p>Personal and professional references available on request.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog'
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
  padding-bottom: 20vh;
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
  opacity: .8;
  letter-spacing: 1px;
  border-bottom: 1px solid white;
}
p  {
  color: white;
  font-family: 'Encode Sans Condensed', sans-serif;
  letter-spacing: 1px;
  padding: 2vw;
  opacity: .8;
  text-align: center;
  font-size: 1em;
}
li {
  color: white;
  font-family: 'Encode Sans Condensed', sans-serif;
  letter-spacing: 1px;
  margin-bottom: 2vh;
  opacity: .8;
  font-size: 1em;
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
