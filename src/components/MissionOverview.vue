<script>
export default {
    name: 'MissionOverview',
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
                    <!-- Card information -->
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
                </div>
                <!-- Slider -->
                <div class="slider col-6">
                    <div class="active-img">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate quam maxime dicta
                        earum omnis facere maiores, doloribus, repellat in quaerat mollitia iure provident officiis
                        error atque? Dignissimos, deserunt perferendis?
                    </div>
                    <div class="bottom-img">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eveniet in assumenda asperiores
                        esse iste tempore non eligendi totam itaque possimus, enim velit. Error facilis et nemo dolores
                        voluptatibus saepe!
                    </div>
                </div>
            </div>
        </div>
    </section>
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

                .active-img {
                    width: 100%;
                    height: 60%;
                    border: 1px solid red;
                }

                .bottom-img {
                    width: 100%;
                    height: 40%;
                    border: 1px solid blue;
                }
            }
        }
    }
}
</style>