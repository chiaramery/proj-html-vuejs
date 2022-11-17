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
                    <h5>title</h5>
                    <!-- Card information -->
                    <div class="info">
                        <div class="icon">
                            <img src="../assets/img/apple-touch-icon-114x114-precomposed.png" alt="">
                        </div>
                        <div class="text-overview">
                            <h5>title</h5>
                            <p>paragraph</p>
                        </div>
                    </div>
                    <!-- Card information -->
                    <div class="info">
                        <div class="icon">
                            <img src="../assets/img/apple-touch-icon-114x114-precomposed.png" alt="">
                        </div>
                        <div class="text-overview">
                            <h5>title</h5>
                            <p>paragraph</p>
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
#overview {
    padding: 3em 0;
    background-color: lightpink;

    .container {
        .row {
            .information {
                border: 1px solid black;

                .btn {
                    margin: 0 .5em;
                    background-color: orange;
                }

                .info {
                    display: flex;
                    margin: .5em;
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