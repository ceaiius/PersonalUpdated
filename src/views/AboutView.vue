<template>

    <div class="h1div">
      <h1>Hey, I'm Nika ;)</h1> 
      <h2>I work kinda hard to become a professional web developer</h2>
      <h3>Not going great yet, tho</h3>
    </div>
    <div class="iconDiv">
        <router-link to="/github">
            <span style="color:#FE7E6D;">
                <i class="fa-brands fa-github fa-5x"></i>
            </span>
        </router-link>
        <router-link to="/facebook">
            <span style="color:#FE7E6D;">
                <i class="fa-brands fa-facebook fa-5x"></i>
            </span>
        </router-link>
        <router-link to="/linkedin">
            <span style="color:#FE7E6D;">
                <i class="fa-brands fa-linkedin fa-5x"></i>
            </span>
        </router-link>
        <router-link to="twitter">
            <span style="color:#FE7E6D;">
                <i class="fa-brands fa-twitter fa-5x"></i>
            </span>
        </router-link>
    </div>
    
    
</template>

<script>
export default {

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

.h1div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    
    
    h1{
        font-family: 'Montserrat', sans-serif;
        font-size: 3rem;
        color: #FE7E6D
    }

    h2{
        font-family: 'Montserrat', sans-serif;
        color: #FE7E6D;
        margin-top: 2%;
        font-size: 1.5rem;
    }

    h3{
        font-family: 'Montserrat', sans-serif;
        color: #FE7E6D;
        margin-top: 2%;
        font-size: 1.2rem;
    }

}

.iconDiv{
    display: flex;
    margin-top: 5%;
    justify-content: center;
    gap:2%
}

</style>