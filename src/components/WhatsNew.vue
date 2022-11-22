<script>
import { store } from "../store";
export default {
    name: 'WhatsNew',
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(img) {
            return new URL(img, import.meta.url).href
        }
    }
}
</script>

<template>
    <!-- Section What's New -->
    <section id="news">
        <div class="container">
            <!-- Title -->
            <div class="title">
                <h5>What's New</h5>
                <p>Keep up to date with the latest news</p>
                <img src="../assets/img/header_divider.png" alt="">
            </div>
            <!-- /Title -->

            <div class="row">
                <!-- Card container -->
                <div class="card-c" v-for="(element, index) in store.new" :key="index">
                    <!-- Part up of the card -->
                    <div class="up">
                        <p>{{ element.date }}</p>
                        <div class="image">
                            <img :src="getImagePath(`../assets/img/${element.img}`)" :alt="element.title">
                            <span class="num">{{ element.num }}</span>
                        </div>
                    </div>
                    <!-- /Part up of the card -->

                    <!-- Text of the card -->
                    <div class="text">
                        <h5>{{ element.title }}</h5>
                        <p>Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesauda esttincidunt
                            etos et mauris, ninc a libero govum est cuprum [..]</p>
                    </div>
                    <!-- /Text of the card -->
                    <hr>

                    <!-- Bottom part of the card -->
                    <div class="bottom d-flex justify-content-around">
                        <p>
                            <img src="../assets/img/author.png" alt="">
                            {{ element.name }}
                        </p>

                        <p>
                            <img src="../assets/img/category.png" alt="">
                            {{ element.event}}

                        </p>
                    </div>
                    <!-- /Bottom part of the card -->
                </div>
                <!-- /Card container -->
            </div>

            <!-- Button go to blog -->
            <div class="button">GO TO BLOG <img class="next" src="../assets/img/slider_next.png" alt=""></div>
            <!-- /Button go to blog -->
        </div>
    </section>
    <!-- /Section What's New -->
</template>

<style lang="scss" scoped>
#news {
    padding: 4em;

    .container {
        text-align: center;

        .title {
            color: #554e9e;
            padding-bottom: 3em;

            h5 {
                font-size: 2em;
            }
        }

        .card-c {
            width: calc(100% / 3);

            .up {
                text-align: left;
                font-size: .8em;

                .image {
                    position: relative;
                }

                .num {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    color: white;
                    background-color: #fe6601;
                    font-size: 1.3em;
                    padding: .3em .5em;
                }
            }

            .bottom {
                width: 90%;
                font-size: .8em;
            }

            .text {
                h5 {
                    color: #554e9e;
                    padding: 1em 0;
                }
            }
        }

        .button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            display: inline-block;
            margin-top: .8em;
            padding: .5em;
            background-color: #fe6601;
            color: white;

            .next {
                width: 20%;
            }
        }
    }
}
</style>