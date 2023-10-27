<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  height: 100%;
	padding: 0;
	margin: 0;
	font-family: 'Sniglet', cursive;
}

header {
  height: 160px;
	background: url('http://www.geertjanhendriks.nl/codepen/form/golf.png') repeat-x bottom;
}

h1 {
  font-weight: normal;
	font-size: 3em;
	margin: 0 auto;
	margin-top: 30px;
	width: 500px;
	color: #F90;
	text-align: center;
}

.container-fluid {
  height: 100%;	
	background-color: #98d4f3;
	overflow: hidden;
	position: relative;
}

span {
  display: flex;
  text-align: center;
}

</style>
