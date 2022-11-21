<script>
import { store } from "../store";
export default {
    name: 'AppClasses',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="classes">
        <div class="title">
            <h2>Our Classes</h2>
            <p>Fable daycare, preschool and kindergarten</p>
            <img src="../assets/img/header_divider.png" alt="">
        </div>
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
            <div class="container-card">
                <div class="card-info" v-for="(classe, index) in store.cardClass" :key="index">
                    <div class="text-card">
                        <h5>{{ classe.title }}</h5>
                        <p>Class name</p>
                        <div class="text-info">
                            <h6>{{ classe.old }}</h6>
                            <p>{{ classe.year}}</p>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="../assets/img/class_01-690x506.jpg" alt="">
                        <div class="button">
                            <a href="">READ MORE<img src="../assets/img/slider_next.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

#classes {
    padding: 2em 0;

    .title {
        padding-bottom: 3em;

        h2 {
            color: $text-color;
        }
    }

    .row {
        padding-bottom: 2em;

        .text-title {
            padding: 1em;
            color: $text-color;
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
            background-color: $card-color;

            .text-card {
                padding: 1em;

                .text-info {
                    font-size: 1.3em;

                    p {
                        font-size: .8em;
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