<template>

    <div class="row mt-5">
        <div class="row mt-5">
            <div class="row mt-5">
                <div class="marquee mt-5">
                    <div class="lines">
                        <div class="line">
                            <span>About</span>
                            <span>About</span>
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
                            <span>About</span>
                            <span>About</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .marquee {
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
        animation: marquee 15s linear infinite;
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

    @keyframes marquee {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }

    

</style>
