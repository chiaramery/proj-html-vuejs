<script>
import { store } from "../store";
export default {
    name: 'AppWelcome',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section id="welcome">
        <div class="container">
            <div class="title">
                <h2>Welcome to Fable</h2>
                <p>Fable daycare, preschool and kindergarten</p>
            </div>
            <div class="info-card">
                <ul class="d-flex justify-content-center">
                    <li v-for="(icon, index) in store.iconWelcome" :key="index">
                        <img src="../assets/img/schoolbag_alt.png" alt="">
                        <h5>{{ icon.title }}</h5>
                        <p>{{ icon.p}}</p>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

#welcome {
    padding: 2em 0;

    .container {
        .title {
            color: $text-color;

            p {
                color: gray;
            }
        }

        .info-card {
            text-align: center;

            ul li {
                margin: 1em;

                img {
                    padding: 3em;
                    background-color: $orange-icon;
                }
            }
        }
    }
}
</style>