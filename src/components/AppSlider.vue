<script>
export default {
    name: 'AppSlider',
}
</script>

<template>
    <div class="wrapper-slider">
        <div class="images">
            <img src="../assets/img/slider_slide3_img2.png" alt="">
            <img src="../assets/img/slider_slide3_img3.png" alt="">
        </div>
        <div class="wrapper-button">
            <a href="" class="click-change"></a>
            <a href="" class="click-change"></a>
            <a href="" class="click-change"></a>
        </div>
    </div>
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
        width: 10%;
        margin: -2em auto;

        .click-change {
            padding: 1px 9px;
            margin: .5em;
            border: 2px solid #fe6601;
        }
    }


}
</style>