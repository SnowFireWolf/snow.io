<template>
    <div id="header">
        <div class="header-content">
            <div class="content-card">
                <div class="avatar"><img src="@/assets/images/me.jpg"/></div>
                <div class="name header-name">SnowFireWolf</div>
                <div class="info description">I&apos;m a student, and love sky.😉</div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    mounted() {
        this.scrollReveal().reveal('.avatar', {
            origin: "bottom",
            distance: "3em",
            delay: 500,
            reset: true
        });

        this.scrollReveal().reveal('.header-name', {
            origin: "bottom",
            distance: "3em",
            delay: 600,
            reset: true
        });

        this.scrollReveal().reveal('.description', {
            origin: "bottom",
            distance: "3em",
            delay: 700,
            reset: true
        });
    }
}
</script>



<style>

.header-content{
    margin-top:12vh;
    margin-bottom:12vh;
    padding:20px;
}

.header-content .avatar{
    z-index: 5;
    text-align:center;
}

.header-content .avatar img{
    width:10em;
    height:10em;
    border-radius:100%;
    box-shadow:0 2px 10px #0000001a;
    background-color: rgba(250, 250, 250, 0.5);
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    transition:all .1s linear;
    /*animation:slideIn .4s ease;
    animation-delay:.4s;
    animation-fill-mode:forwards;
    filter: opacity(0);*/
}

/*.header-content .content > *{
    filter: opacity(0);
    transition:all .1s linear;
    animation:slideIn .4s ease;
    animation-delay:.8s;
    animation-fill-mode:forwards
}*/

.header-content .content-card {
    /*background-image: linear-gradient(120deg, #00C3FF 0%, #0077FF 100%);*/
    z-index: 6;
    margin-top:.2em;
    max-width: 520px;
    min-width: 200px;
    margin:auto;
    padding-bottom:30px;
    border: 1px solid rgba(150,150,150,0.3);
    border-radius:20px;
    padding-top: 1.728em;
    /*background-color:#ffffffe6;*/
    box-shadow:0 2px 3px #0000001a;
    /*animation:slideIn .4s ease;*/

    -webkit-backdrop-filter: saturate(180%) blur(5px);
    backdrop-filter: saturate(180%) blur(5px);
    background-color: rgba(255,255,255,0.5);
}

.header-content .content-card .name{
    font-size:2em;
    line-height:2.6em;
    text-align:center;
    font-weight:500;
    /*color:#FFFFFF;*/
    text-shadow:0 0 3px #ffffff40;
}

.header-content .content-card .info{
    font-size:1.4em;
    line-height:1.5em;
    text-align:center;
    font-weight:400;
    text-shadow:0 0 3px #ffffff40;
}

@keyframes fadeIn{
    from{filter:opacity(0)}
    to{filter:opacity(1)}
}
@keyframes slideIn{
    from {
        filter:opacity(0);transform:translateY(100px)
    }
    to {
        transform:translateY(0);filter:opacity(1)
    }
}
</style>