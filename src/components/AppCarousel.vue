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
    <section id="carousel">
        <div class="container">
            <div class="math-info">
                <div class="circle" v-for="(num, index) in store.circleInfo" :key="index">
                    {{ num }}
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
#carousel {
    width: 100%;
    height: 30em;
    background-image: url("../assets/img/blog_10-1024x614.jpg");
    background-size: cover;

    .math-info {
        height: 100%;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .circle {
            font-size: 2em;
            padding: 2em;
            border-radius: 100%;
            border: 3px solid white;


        }
    }
}
</style>