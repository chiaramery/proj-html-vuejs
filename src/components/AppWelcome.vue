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
    <!-- Section Welcome to Fable -->
    <section id="welcome">
        <!-- Container -->
        <div class="container">
            <!-- Title section -->
            <div class="title">
                <h2>Welcome to Fable</h2>
                <p>Fable daycare, preschool and kindergarten</p>
                <img src="../assets/img/header_divider.png" alt="">
            </div>
            <!-- /Title section -->

            <!-- Card info -->
            <div class="info-card">
                <ul class="d-flex justify-content-center">
                    <li>
                        <div class="icons">
                            <img src="../assets/img/schoolbag_alt.png" alt="">
                        </div>
                        <h5>Morbi Etos</h5>
                        <p>Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum
                            est praesent.</p>
                    </li>
                    <li>
                        <div class="icons violet">
                            <img src="../assets/img/stroller_alt.png" alt="">
                        </div>
                        <h5>Congue Gravida</h5>
                        <p>Elipsis magna a terminal nulla elementuk morbi elite forte maecenas est magna etos interdum
                            vitae est.</p>
                    </li>
                    <li>
                        <div class="icons">
                            <img src="../assets/img/globe_alt.png" alt="">
                        </div>
                        <h5>Maecenadas Node</h5>
                        <p>Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum
                            est praesent.</p>
                    </li>
                    <li>
                        <div class="icons violet">
                            <img src="../assets/img/bell_alt.png" alt="">
                        </div>
                        <h5>Praesent Morbi</h5>
                        <p>Elipsis magna a terminal nulla elementuk morbi elite forte maecenas est magna etos interdum
                            vitae est.</p>
                    </li>
                </ul>
            </div>
            <!-- /Card info -->
        </div>

    </section>
    <!-- /Section Welcome to Fable -->
</template>

<style lang="scss" scoped>
#welcome {
    padding: 2em 0;

    .container {
        .title {
            color: #4c4a9b;
            padding-bottom: 3em;

            p {
                font-size: .8em;
            }
        }

        .info-card {
            text-align: center;

            ul {
                li {
                    margin: 1em;



                    h5 {
                        margin: .5em;
                        color: #4c4a9b;
                    }
                }

                .icons {
                    padding: 3em;
                    display: inline-block;
                    background-color: #fe6601;
                    border-radius: 50%;
                }

                .violet {
                    background-color: #4c4a9b;
                }
            }
        }
    }
}
</style>