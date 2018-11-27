<template>

    <div class="row mt-5 pt-5">
        <div class="row mt-5 pt-5">
            <div class="row mt-5">
                <div class="scroller mt-5">
                    <div class="lines">
                        <div class="line">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                        </div>
                        <div class="line">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row py-5 bg-black">
                <div class="scroller-2">
                    <div class="lines-2">
                        <div class="line-2">
                            <span>Get in Touch</span>
                            <span>Get in Touch</span>
                            <span>Get in Touch</span>
                        </div>
                        <div class="line-2">
                            <span>Get in Touch</span>
                            <span>Get in Touch</span>
                            <span>Get in Touch</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-2 mx-auto breadcrumb bg-black">
            <div class="col">
                <p class="text-white text-center mx-auto">Test</p>
            </div>
            <div class="col">
                <p class="text-white text-center mx-auto">Test</p>
            </div>
            <div class="col">
                <p class="text-white text-center mx-auto">Test</p>
            </div>
        </div>
    </div>
    


</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .breadcrumb{

        width: 100vw;

    }

    .scroller {
        overflow: hidden;
        width: 100%;
    }

    .lines {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;  
        font-size: 7em;
        font-weight: 800;
        color: white;
    }

    .line {
        animation: scrollerAnime 30s linear infinite;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        white-space: nowrap;
    }

    .line span {
        padding-right: 0.5em;
    }
    
    .line span:after {
        content: ' ';
        margin-left: 0.5em;
    }

    @keyframes scrollerAnime {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }

    .scroller-2 {
        overflow: hidden;
        width: 100%;
    }

    .lines-2 {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;  
        font-size: 7em;
        font-weight: 800;
        color: white;
    }

    .line-2 {
        animation: scrollerAnime2 30s linear infinite;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        white-space: nowrap;
    }

    .line-2 span {
        padding-right: 0.5em;
    }
    
    .line-2 span:after {
        content: ' ';
        margin-left: 0.5em;
    }

    @keyframes scrollerAnime2 {
        0% {
            transform: translate3d(-100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    

</style>
