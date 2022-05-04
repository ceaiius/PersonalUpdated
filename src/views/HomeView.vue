<template>
 
    <div class="container">
      <h1 class="title">
      <span aria-hidden="true">JUST A WANNABE DEVELOPER</span>
      JUST A WANNABE DEVELOPER<span aria-hidden="true">JUST A WANNABE DEVELOPER</span></h1>
    </div>
    
                    
   
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  
}
</script>

<style lang="scss">

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  
}

.title {
    font-size: 3.7rem;
    margin-bottom: 1.5em;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    margin: 1em;
    color: #000;
    text-transform: uppercase;
    position: relative;
    text-shadow:
        0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

    animation: glitch 1000ms infinite;
}


.title span {
    font-weight: 900;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.title span:first-child {
    animation: glitch 650ms infinite;
    color: rgb(10, 2, 22);

    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.05em, -0.025em);
    opacity: 0.8;
}

.title span:last-child {
    animation: glitch 700ms infinite;

    color: rgb(17, 9, 9);
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(0.01em, 0.025em);
    opacity: 0.8;
}

  @keyframes glitch {
    0% {
        text-shadow:
            0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.05em -.025em 0 rgba(10, 12, 10, 0.75),
            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }

    14% {
        text-shadow:
            0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.05em -.025em 0 rgba(12, 15, 12, 0.75),
            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }

    15% {
        text-shadow:
            -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
            0.025em 0.025em 0 rgba(21, 29, 21, 0.75),
            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    49% {
        text-shadow:
            -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
            0.025em 0.025em 0 rgba(14, 17, 14, 0.75),
            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    50% {
        text-shadow:
            0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
            0.5em 0 0 rgba(9, 12, 9, 0.75),
            0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    99% {
        text-shadow:
            0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
            0.5em 0 0 rgba(51, 28, 158, 0.75),
            0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    100% {
        text-shadow:
            -0.025em 0 0 rgba(255, 0, 0, 0.75),
            -0.025em -0.025em 0 rgba(32, 25, 95, 0.75),
            -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
}
</style>
