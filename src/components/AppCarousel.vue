<script>
import { store } from "../store";
export default {
    name: 'AppCarousel',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- Section Math informations -->
    <section id="carousel">
        <div class="container">
            <div class="row">
                <div class="math-info col-3" v-for="(num, index) in store.circleInfo" :key="index">
                    <div class="circle">
                        {{ num.num }}
                    </div>
                    <div class="text">
                        <h6>{{ num.title }}</h6>
                        <p>{{ num.p }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper-button">
            <a class="button" v-for="number in 6"></a>
        </div>
    </section>
    <!-- /Section Math informations -->
</template>

<style lang="scss" scoped>
#carousel {
    width: 100%;
    height: 28em;
    background-image: url("../assets/img/parallax_01.jpg");
    background-size: cover;
    background-position: center;

    .row {
        .math-info {
            height: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;

            .circle {
                text-align: center;
                margin-top: 2em;
                font-size: 2em;
                width: 5em;
                height: 5em;
                line-height: 5em;
                border-radius: 100%;
                border: 3px solid white;
            }

            .text {
                color: white;
                padding-top: 2em;
                text-align: center;

                h6 {
                    font-size: 1.2em;
                }

                p {
                    font-size: .8em;
                    color: inherit;
                }
            }
        }
    }

    .wrapper-button {
        width: 15%;
        margin: 2em auto;

        .button {
            padding: 1px 9px;
            margin: .5em;
            border: 2px solid white;
        }
    }
}
</style>