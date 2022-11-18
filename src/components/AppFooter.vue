<script>
export default {
    name: 'AppFooter',
}
</script>

<template>

    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <h5>ABOUT US</h5>
                        <p>Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi
                            vehivula
                            morbi</p>
                    </div>
                    <div class="col-3">
                        <h5>ARCHIVES</h5>
                        <ul>
                            <li>OCTOBER 2014 (2)</li>
                            <li>SEPTEMBER 2014(2)</li>
                            <li>AUGUST 2014 (2)</li>
                            <li>JULY 2014 (2)</li>
                            <li>JUNE 2014 (2)</li>
                            <li>MAY 2014 (2)</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h5>OUR FEATURES</h5>
                        <p>Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi
                            vehivula
                            morbi</p>
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
    }


    .footer-bottom {
        width: 30%;
        margin: 0 auto;

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