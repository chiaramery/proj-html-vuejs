<script>
import { store } from "../store";
export default {
    name: 'AppClasses',
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
    <!-- Section Description Classes -->
    <section id="classes">
        <!-- Title -->
        <div class="title">
            <h2>Our Classes</h2>
            <p>Fable daycare, preschool and kindergarten</p>
            <img src="../assets/img/header_divider.png" alt="">
        </div>
        <!-- /Title -->
        <div class="container">
            <div class="row">
                <div class="text-title col-6">
                    We provided four classes with nine to twenty children each aged twelve month to five years of age.
                </div>
                <div class="text-p col-6">
                    Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est
                    praesent. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean
                    interdum, nibh vitae sodales, magna ante feugiat elit maecenas.
                </div>
            </div>
            <!-- Container card -->
            <div class="container-card">
                <!-- Card -->
                <div class="card-info" v-for="(classe, index) in store.cardClass" :key="index">
                    <div class="text-card">
                        <h5>{{ classe.title }}</h5>
                        <p>Class name</p>
                        <div class="text-info">
                            <div class="left">
                                <h6>{{ classe.old }}</h6>
                                <p>{{ classe.year }}</p>
                            </div>
                            <div class="right">
                                <h6>{{ classe.class }}</h6>
                                <p>Class size</p>
                            </div>
                        </div>
                    </div>
                    <!-- Images cards -->
                    <div class="image-card">
                        <img :src="getImagePath(`../assets/img/${classe.img}`)" :alt="classe.title">
                        <div class="button">
                            <a href="">READ MORE<img src="../assets/img/slider_next.png" alt=""></a>
                        </div>
                    </div>
                    <!-- /Images cards -->
                </div>
                <!-- /Card -->
            </div>
            <!-- /Container card -->
        </div>
    </section>
    <!-- /Section Description Classes -->
</template>

<style lang="scss" scoped>
#classes {
    padding: 2em 0;

    .title {
        padding-bottom: 3em;

        h2 {
            color: #4c4a9b;
        }
    }

    .row {
        padding-bottom: 2em;

        .text-title {
            padding: 1em;
            color: #4c4a9b;
            font-size: 1.5em;
        }

        .text-p {
            padding: 1em;
            color: gray;
        }
    }

    .container-card {
        display: flex;
        flex-wrap: wrap;

        .card-info {
            width: calc(100% / 2 - 16px);
            margin: 8px;
            display: flex;
            justify-content: space-between;
            color: white;
            background-color: #4c4a9b;

            .text-card {
                padding: .8em 0 .8em .8em;

                h6 {
                    color: white;
                }

                p {
                    color: rgb(245 245 245);
                    font-size: .8em;
                }

                .text-info {
                    width: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: space-around;
                    font-size: 1.3em;

                    p {
                        font-size: .6em;
                    }

                    .left,
                    .right {
                        margin: .4em 1em;
                    }
                }
            }

            .image-card {
                width: 50%;
                position: relative;

                .button {
                    width: 140px;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    display: inline-block;
                    background-color: #fe6601;
                    border: 1px solid transparent;

                    &:hover {
                        border: 1px solid white;
                        background-color: rgba(254, 102, 1, .8);
                    }

                    a {
                        display: flex;
                        padding: 1em;
                        font-size: .8em;
                        color: inherit;

                        img {
                            width: 20%;
                        }
                    }
                }
            }
        }

    }
}
</style>