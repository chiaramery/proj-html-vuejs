<script>
export default {
    name: 'SlideKinde',
}
</script>

<template>
    <!-- Section Slide Kindergarten -->
    <section id="kindergarten">
        <div class="container">
            <div class="wrapper-text">
                <!-- Image background -->
                <div class="icon">
                    <img src="../assets/img/quote_alt.png" alt="">
                </div>
                <!-- /Image background -->

                <!-- Text of section -->
                <div class="text">
                    <span>
                        Fable Kindergarten is a great spanlace for my daughter to start her schooling experience, It's
                        welcoming
                        and safe and my daughter loves being there.
                    </span>
                    <div class="hr">
                        <hr>
                    </div>
                    <span>Joe R. Hamblen</span>
                </div>
                <!-- /Text of section -->
            </div>

            <!-- Buttons of slider -->
            <div class="wrapper-button">
                <a href="" class="button" v-for="n in 6"></a>
            </div>
            <!-- /Buttons of slider -->
        </div>
    </section>
    <!-- /Section Slide Kindergarten -->
</template>

<style lang="scss" scoped>
#kindergarten {
    width: 100%;
    height: 28em;
    background-image: url("../assets/img/parallax_02.jpg");
    background-size: cover;
    background-position: center;

    .container {
        padding: 5em;

        .wrapper-text {
            position: relative;
        }

        .icon {
            text-align: center;
            font-size: 100%;
            padding: 1em;
            border-radius: 100%;
            border: 1px solid white;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%);
        }

        .text {
            padding: 3em;
            text-align: center;
            font-size: 1.5em;
            color: white;

            .hr {
                width: 10%;
                margin: 0 auto;
            }

            span {
                font-size: .6em;
            }
        }

        .wrapper-button {
            width: 15%;
            margin: 0 auto;
            transform: translate(-50%);
            display: flex;

            .button {
                padding: 1px 9px;
                margin: .5em;
                border: 2px solid white;
            }
        }
    }
}
</style>