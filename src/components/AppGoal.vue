<script>
import { store } from "../store";
export default {
    name: 'AppGoal',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="goal">
        <div class="container">
            <div class="text-check col-6">
                <h5>We have been educating children for over fifteen years. Our goal is to create a place that engages
                    each
                    child.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis voluptatum explicabo laborum
                    facilis. Quidem saepe consequatur, quaerat autem praesentium expedita tenetur consequuntur pariatur
                    quisquam eaque sapiente in ratione dolores.</p>
                <div class="list-check">
                    <ul>
                        <li v-for="(point, index) in store.listCheck" :key="index">
                            <div class="list">
                                <img src="../assets/img/style_1.png" alt="">
                                <p>{{ point }}</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="icon col-6">
                <div class="icon-card" v-for="(item, index) in store.iconCard" :key="index">
                    <div class="top-icon">
                        <img src="../assets/img/shield.png" alt="">
                    </div>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.p }} </p>
                </div>
            </div>
        </div>

        <div class="static-img">
            <img src="../assets/img/gallery_01-690x506.jpg" alt="">
            <img src="../assets/img/gallery_02-690x506.jpg" alt="">
            <img src="../assets/img/gallery_03-690x506.jpg" alt="">
            <img src="../assets/img/gallery_04-690x506.jpg" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
#goal {
    padding: 1.5em 0 0 0;
    background-color: aquamarine;

    .container {
        display: flex;
        padding: 2em;

        .text-check {
            .list-check {
                .list {
                    display: flex;
                    align-items: center;

                    img {
                        max-width: 100%;
                        margin: 0 15px 15px 0;


                    }
                }
            }
        }

        .icon {
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            .icon-card {
                width: calc(100% / 2);
            }
        }
    }

    .static-img {
        width: 100%;
        display: flex;

        img {
            width: calc(100% / 4);
        }
    }

}
</style>