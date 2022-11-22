<script>
import { store } from "../store";
export default {
    name: 'MissionOverview',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <!-- Section information -->
    <section id="overview">
        <div class="container">
            <div class="row">
                <div class="information col-6">
                    <!-- Button -->
                    <div class="btn">Overview</div>
                    <div class="btn">Our Mission</div>
                    <!-- /Button -->
                    <!-- Title -->
                    <h5>Our philosophy is learning throught play as we offer a stimulating environment for children.
                    </h5>
                    <!-- Card information -->
                    <div class="info">
                        <div class="icon">
                            <img src="../assets/img/clock_alt.png" alt="">
                        </div>
                        <div class="text-overview">
                            <h5>Full Day Sessions</h5>
                            <p>Pulnivar est metro lingual blandit maecenas retrum gravida cuprum. Maecenas node
                                estibulum.</p>
                        </div>
                    </div>

                    <div class="info">
                        <div class="icon">
                            <img src="../assets/img/diagram_alt.png" alt="">
                        </div>
                        <div class="text-overview">
                            <h5>Varied Classes</h5>
                            <p>Pulnivar est metro lingual blandit maecenas retrum gravida cuprum. Maecenas node
                                estibulum.</p>
                        </div>
                    </div>
                    <!-- /Card information -->
                </div>
                <!-- Slider -->
                <div class="slider col-6">
                    <div class="item">
                        <img src="../assets/img/gallery_01-690x506.jpg" alt="">
                        <img class="prev" src="../assets/img/slider_previous.png" alt="">
                        <img class="next" src="../assets/img/slider_next.png" alt="">
                    </div>
                    <div class="bottom-img">
                        <div class="thumb active">
                            <img src="../assets/img/gallery_01-690x506.jpg" alt="">
                            <img class="plus" src="../assets/img/image_overlay.png" alt="">
                        </div>
                        <div class="thumb">
                            <img src="../assets/img/gallery_02-690x506.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="../assets/img/gallery_03-690x506.jpg" alt="">
                        </div>

                    </div>
                </div>
                <!-- /Slider -->
            </div>
        </div>
    </section>
    <!-- /Section information -->
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

#overview {
    padding: 3em 0;
    background-color: rgb(245 245 245);

    // Card info
    .container {
        .row {
            .information {
                h5 {
                    padding: .5em 0;
                    font-size: 1.8em;
                    color: $text-color;
                }

                .btn {
                    margin: 0 .5em;
                    color: white;
                    background-color: $orange-icon;
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin: .5em;

                    .icon {
                        padding: 2em;
                        border-radius: 50%;
                        background-color: $orange-icon;

                        img {
                            width: 50px;
                        }
                    }

                    .text-overview {
                        h5 {
                            font-size: 1em;
                        }

                        p {
                            font-size: 1em;
                        }
                    }
                }
            }

            // Slider
            .slider {
                .item {
                    width: 100%;
                    position: relative;

                    .next,
                    .prev {
                        position: absolute;
                        top: 50%;
                        z-index: 1;
                        cursor: pointer;
                        background-color: #fe6601;
                    }

                    .next {
                        right: 0;
                    }

                    .prev {
                        left: 0;
                    }
                }

                .bottom-img {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;

                    .thumb {
                        width: calc(100% / 3 - 5px);
                        position: relative;

                        img {
                            padding-bottom: .5em;
                            margin-top: 5px;
                        }

                        .plus {
                            display: none;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            padding: .5em;
                            background-color: rgba(85, 78, 158, .8);
                            border-radius: 100%;

                        }



                    }

                    .active {
                        border-bottom: 2px solid orange;
                    }
                }
            }
        }
    }
}
</style>