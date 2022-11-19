<script>
import { store } from "../store";
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="about col-3">
                        <h5>ABOUT US</h5>
                        <p>Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi
                            vehivula
                            morbi</p>
                        <img src="../assets/img/logo_footer.png" alt="">
                    </div>
                    <div class="archives col-3">
                        <h5>ARCHIVES</h5>

                        <div class="month">OCTOBER 2014 (2)</div>
                        <div class="month">SEPTEMBER 2014(2)</div>
                        <div class="month">AUGUST 2014 (2)</div>
                        <div class="month">JULY 2014 (2)</div>
                        <div class="month">JUNE 2014 (2)</div>
                        <div class="month">MAY 2014 (2)</div>

                    </div>
                    <div class="features col-3">
                        <h5>OUR FEATURES</h5>
                        <p>Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi
                            vehivula
                            morbi</p>
                        <div v-for="(point, index) in store.listFooter" :key="index">
                            <div class="list">
                                <img src="../assets/img/style_4_alt.png" alt="">
                                <p>{{ point }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <h5>RECENT POSTS</h5>
                        <ul>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div class="footer-bottom">
            <div class="icon">
                <ul class="list-icon">
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                </ul>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    .footer-top {
        padding: 5em;
        background-image: url("../assets/img/pattern.png");
        background-size: cover;
        color: white;

        .about {
            img {
                width: 80%;
            }
        }

        .archives {
            // text-align: center;

            .month {
                border: 1px solid gray;
                padding: .3em;
                margin: .3em;
            }
        }

        .features {
            .list {
                display: flex;
                align-items: center;

                img {
                    max-width: 100%;
                    margin: 0 15px 15px 0;
                }

                p {
                    font-size: .8em;
                }
            }
        }

        li,
        p {
            color: gray;
        }

    }


    .footer-bottom {
        width: 30%;
        margin: 0 auto;
        padding: 1.7em;

        .list-icon {
            display: flex;

            li {
                text-align: center;
                margin: .8em;
            }
        }
    }
}
</style>