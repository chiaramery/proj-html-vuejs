<script>
import { store } from "../store";
export default {
    name: 'AppHeader',
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
    <header>
        <div class="container">
            <div class="header-container">
                <div class="logo">
                    <img src="../assets/img/logo.png" alt="">
                </div>
                <div class="icon">
                    <ul>
                        <li v-for="(link, index) in store.links" :key="index">
                            <img :src="getImagePath(`../assets/img/${link.img}`)" :alt="link.href">
                            <a :href="href">{{ link.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
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
                        line-height: 2.5em;
                        padding: 1em;

                        &:hover {
                            color: white;
                            background-color: #fe6601;
                        }

                        a {
                            height: 100%;
                            color: #4c4a9b;

                            &:hover {
                                color: inherit;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>