<template>
<header>
    <nav>
   <div class="menu-btn">
        <div class="menu-btn_burger">

        </div>
    </div>
    <ul class="nav-ul">
        
        <li><router-link to="/"><a href="#about">Home</a></router-link></li>
        <li><router-link to="/about"><a href="#first-art">About</a></router-link></li>
        <li><router-link to="/projects"><a href="#projects">Projects</a></router-link></li>
    </ul>
 
  </nav>
  
</header>

  <router-view/>
</template>

<script>
export default {
    name : "HeaderView"
}
</script>

<style lang="scss">

header {
    margin: 3em;
    nav{
        display: flex;
        justify-content:flex-end;
        align-items: flex-start;
    }
    nav ul {
    
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        transition: transform 0.5s;
        position: absolute;
    }
    
    nav li {
        display: inline-block;
        margin: 1em;
    }
    nav a {
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    padding: 1em;
    color: #6F69AC;
}


    nav a:hover,
    nav a:focus {
        color: rgb(184, 110, 129);
    }
}













</style>