<template>
  <div container-fluid></div>
</template>

<script>
export default {};
</script>

<style>
/* Body */
body {
  text-align: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  color: black;
}

:root {
  --primary: black;
  --secondary: rgb(87, 26, 26);
  --alternative: rgb(125, 116, 116);
  --awesomeColor: black;
  --green: black;
  --mainBox-shadow: -8px -3px 23px 5px rgba(105, 96, 96, 0.75);
}

/* Skills */

.progress-title {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px;
}

.progress {
  height: 20px;
  background: #333;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 30px;
  overflow: visible;
}

.list-unstyled {
  margin-right: 40px;
}

/* Education */
.education {
  width: 40em;
  margin: 5px auto;
  padding: 10px;
  color: black;
}
.card {
  border: 4px solid var(--green);
  margin: 10px 0;
  border-radius: 20px;
  padding: 10px;
  width: 50%;
  background-color: var(--alternative);
  color: black;
}
.card:nth-child(odd) {
  position: relative;
}
.card:nth-child(odd)::after {
  position: absolute;
  top: -3em;
  right: 0;
  content: "";
  width: 4px;
  height: 45vh;
  border-right: 2px solid var(--primary);
}
.card:nth-child(even) {
  box-shadow: 0.5vw 0.2vw 0.7vw var(--awesomeColor);
  margin-left: auto;
  position: relative;
}
.card:nth-child(even)::after {
  position: absolute;
  content: "";
  top: 90px;
  z-index: 20;
  left: -2em;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--awesomeColor);
  box-shadow: 10s 0.5vw 1vw rgba(90, 115, 132, 0.9);
}

/* Media query */
@media screen and (max-width: 900px) {
  /* Education */
  .education {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    align-items: center;
  }
  .card {
    width: 100%;
    flex-wrap: wrap;
  }
  .card a,
  .card p,
  footer p {
    font-size: small;
  }
  .card:nth-child(odd) {
    margin-left: 0;
  }
  .card:nth-child(odd)::after {
    content: none;
  }
  .card:nth-child(even) {
    margin-left: 0;
  }
  .card:nth-child(even)::after {
    content: none;
  }
}
</style>