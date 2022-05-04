<template>
    <div class="h1Div">
        <h1>Personal Projects</h1>
    </div>
    <div class="container">
        <div class="grid-item">
            <router-link to="/redberry"><span style="color:#FD5D5D"><i class="fa-solid fa-user-astronaut fa-10x"></i></span></router-link>
            <h2>Redberry</h2>
            <p>React App that shows your submitted input fields </p>
        </div>
        <div class="grid-item">
            <router-link to="/search"><span style="color:#FD5D5D"><i class="fa-brands fa-github-alt fa-10x"></i></span></router-link>
            <h2>Github Typehead</h2>
            <p>React App that allows you to search github users</p>
        </div>
        <div class="grid-item">
            <router-link to="/movies"><span style="color:#FD5D5D"><i class="fa-solid fa-compact-disc fa-10x"></i></span></router-link>
            <h2>Movie Search</h2>
            <p>Vue App that allows to you get information about different movies</p>
        </div>
        <div class="grid-item">
            <router-link to="/weather"><span style="color:#FD5D5D"><i class="fa-solid fa-snowflake fa-10x"></i></span></router-link>
            <h2>Weather App</h2>
            <p>React app that you can use to search for weather anywhere in the world</p>
        </div>
        <div class="grid-item">
            <router-link to="/notes"><span style="color:#FD5D5D"><i class="fa-solid fa-clipboard fa-10x"></i></span></router-link>
            <h2>Note Keeper</h2>
            <p>React App that keeps a little notes for you</p>
        </div>
        <div class="grid-item">
            <router-link to="/game"><span style="color:#FD5D5D" ><i class="fa-solid fa-gamepad fa-10x"></i></span></router-link>
            <h2>Simon Says</h2>
            <p>Simple Js App that you can play</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            logo:"/src/assets/astro.png"
        }
    }
}
</script>

<style lang="scss">

.h1Div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;

    h1{
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        color: #FE7E6D
    }

    
   
}

.container{
    display: grid;
  grid-template-columns: auto auto auto;
place-items: center;
  padding: 10px;
   grid-gap: 50px;
}

.grid-item {
  
  
  padding: 50px;
  font-size: 30px;
  text-align: center;
}

h2{
        font-family: 'Montserrat', sans-serif;
        color: #FE7E6D;
        margin-top: 2%;
        font-size: 1.5rem;
        padding-top: 5%;
    }

p{
    font-family: 'Montserrat', sans-serif;
        color: #FE7E6D;
        margin-top: 2%;
        font-size: 1rem;
        padding-top: 5%;
}

</style>