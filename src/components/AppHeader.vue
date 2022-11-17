<script>
import { store } from "../store";
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header>
        <div class="container">
            <div class="header-container">
                <div class="logo">
                    <img src="../assets/img/logo.png" alt="">
                </div>
                <div class="icon">
                    <ul>
                        <li v-for="(link, index) in store.links" :key="index">
                            <img src="../assets/img/cart.png" alt="">
                            <a :href="href">{{ link.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

header {
    height: 7em;
    background-color: white;

    .container {

        .header-container {
            display: flex;
            justify-content: space-between;

            .logo {
                width: 150px;
            }

            .icon {
                width: 70%;

                ul {
                    display: flex;

                    li {
                        align-items: center;
                        text-align: center;
                        height: 100%;
                        padding: 1em;

                        &:hover {
                            background-color: orangered;
                        }

                        a {
                            color: $text-color;
                        }
                    }
                }
            }
        }
    }
}
</style>