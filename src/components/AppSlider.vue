<script>
export default {
    name: 'AppSlider',
}
</script>

<template>
    <!-- Jumbotron slider -->
    <div class="wrapper-slider">
        <div class="images">
            <img src="../assets/img/slider_slide3_img2.png" alt="">
            <img src="../assets/img/slider_slide3_img3.png" alt="">
        </div>
        <div class="wrapper-button">
            <a href="" class="button" v-for="n in 4"></a>
        </div>
    </div>
    <!-- /Jumbotron slider -->
</template>

<style lang="scss" scoped>
.wrapper-slider {
    width: 100%;
    height: 30em;
    background-image: url("../assets/img/slider_slide3_background.png");
    background-repeat: repeat;
    background-size: contain;

    .images {
        width: 60%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        padding-bottom: 4em;
    }

    .wrapper-button {
        width: 15%;
        margin-top: -2em;
        margin-left: 52%;
        transform: translate(-50%);
        display: flex;

        .button {
            padding: 1px 9px;
            margin: .5em;
            border: 2px solid #fe6601;
        }
    }


}
</style>