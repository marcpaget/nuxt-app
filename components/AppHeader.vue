<template>
  <section class="masthead" role="img" aria-label="Image Description">
  <h1>
    Godt Nytår
  </h1>
    <button>
      When a hero comes along
    </button>
</section>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 80vh; /* if you don't want it to take up the full screen, reduce this number */
  padding: 40px;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 57%, rgba(0,0,0,0.65) 100%), url(assets/images/IMG_0765.jpeg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 63px;
}
    
      
button {
  background: #098191;
  transition: background ease .25s;
  border-radius: 19px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
button:hover {
  background: #63b6b8
}
button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
</style>