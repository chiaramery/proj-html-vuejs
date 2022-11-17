<script>
export default {
    name: 'MissionOverview',
    data() {
        return {
            currentImg: 0,
        }
    }
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
                    </div>
                    <div class="bottom-img">
                        <img src="../assets/img/gallery_01-690x506.jpg" alt="">
                        <img src="../assets/img/gallery_01-690x506.jpg" alt="">
                        <img src="../assets/img/gallery_01-690x506.jpg" alt="">
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
    background-color: $bg-gray;

    .container {
        .row {
            .information {
                border: 1px solid black;

                h5 {
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

            .slider {
                border: 1px solid black;

                .item {
                    width: 100%;
                }

                .bottom-img {
                    display: flex;
                    justify-content: space-between;
                    width: calc(100% / 3 - 4px);

                    img {
                        margin: 2px;
                    }
                }
            }
        }
    }
}
</style>