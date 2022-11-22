<script>
import { store } from "../store";
export default {
    name: 'MeetStaff',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- Meet Our Staff -->
    <section id="meet-staff">
        <div class="container">
            <div class="title">
                <h1>Meet Our Staff</h1>
                <p>With education and experience in early childhood care</p>
            </div>
            <div class="wrapper-col">
                <div class="title-col col-6">
                    <h5>Our staff consist of three teachers and one assistant with espperience in early childhood
                        care.</h5>
                </div>
                <div class="p-col col-6">
                    <p>
                        Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est
                        praesent. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean
                        interdum, nibh vitae sodales, magna ante feugiat elit maecenas.
                    </p>
                </div>
            </div>
            <!-- Team -->
            <div class="wrapper-team">
                <div class="row">
                    <!-- Prima card -->
                    <div class="card-teacher">
                        <div class="teacher text-center">
                            <img src="../assets/img/team_04.jpg" alt="">
                            <div class="name">Ruth Richie</div>
                            <div class="role">
                                <p>Teacher</p>
                            </div>
                        </div>
                        <div class="description">
                            <div class="quote">
                                <img src="../assets/img/quote.png" alt="">
                            </div>
                            <p>I have just finished my studies in Early Childhood Education, and I am also the kid's
                                yoga
                                teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.</p>
                            <div class="icon">
                                <img src="../assets/img/mail.png" alt="">
                                <img src="../assets/img/facebook.png" alt="">
                                <img src="../assets/img/pinterest.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- Seconda card -->
                    <div class="card-teacher">
                        <div class="teacher text-center">
                            <img src="../assets/img/team_03.jpg" alt="">
                            <div class="name">Katie Willmore</div>
                            <div class="role">
                                <p>Assistant Teacher</p>
                            </div>
                        </div>
                        <div class="description">
                            <div class="quote">
                                <img src="../assets/img/quote.png" alt="">
                            </div>
                            <p>My name is Katie. I grew up and studied in Canada. This is my second year at Fable and
                                love every minute of it, making the children's learning experience fun.</p>
                            <div class="icon">
                                <img src="../assets/img/dribbble.png" alt="">
                                <img src="../assets/img/facebook.png" alt="">
                                <img src="../assets/img/instagram.png" alt="">
                            </div>
                        </div>

                    </div>
                    <!-- Terza card -->
                    <div class="card-teacher">
                        <div class="teacher text-center">
                            <img src="../assets/img/team_02.jpg" alt="">
                            <div class="name">Angela Watson</div>
                            <div class="role">
                                <p>Lead Teacher</p>
                            </div>
                        </div>
                        <div class="description">
                            <div class="quote">
                                <img src="../assets/img/quote.png" alt="">
                            </div>
                            <p>I hold a degree in Early Childhood Education and an advanced English language
                                certificate. I have been working as a kindergarten teacher since 2002.</p>
                            <div class="icon">
                                <img src="../assets/img/bing.png" alt="">
                                <img src="../assets/img/skype.png" alt="">
                                <img src="../assets/img/linkedin.png" alt="">
                            </div>
                        </div>

                    </div>
                    <!-- Quarta card -->
                    <div class="card-teacher">
                        <div class="teacher text-center">
                            <img src="../assets/img/team_01.jpg" alt="">
                            <div class="name">Angela Lynn</div>
                            <div class="role">
                                <p>Teacher</p>
                            </div>
                        </div>
                        <div class="description">
                            <div class="quote">
                                <img src="../assets/img/quote.png" alt="">
                            </div>
                            <p>I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with
                                children aged from six weeks to eight years. This is my second year at Fable.</p>
                            <div class="icon">
                                <img src="../assets/img/youtube.png" alt="">
                                <img src="../assets/img/twitter.png" alt="">
                                <img src="../assets/img/googleplus.png" alt="">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#meet-staff {
    padding: 2em 0;
    background-color: rgb(245 245 245);

    .container {
        .title {
            color: #554e9e;
            text-align: center;
        }

        .wrapper-col {
            display: flex;

            h5 {
                color: #554e9e;
            }
        }

        .wrapper-team {

            .row {
                width: 100%;
                display: flex;

                .card-teacher {
                    display: flex;
                    justify-content: space-around;
                    width: calc(100% / 2);
                    position: relative;
                }

                .teacher {
                    img {
                        width: 200px;
                    }

                    .name {
                        padding-top: 1em;
                        color: #554e9e;
                        text-align: center;
                    }

                    .role {
                        font-size: .8em;
                        padding-bottom: 1em;
                    }
                }

                .description {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    width: 45%;

                    .quote {
                        text-align: right;
                        padding: .3em;
                        position: absolute;
                        top: 15%;
                        left: 50%;
                        transform: translate(-50%);
                        border: 2px solid #fe6601;
                        width: 20%;
                    }

                    p {
                        font-size: .9em;
                    }

                    .icon {
                        img {
                            margin: 2px;
                            background-color: #fe6601;
                        }
                    }
                }
            }
        }

    }
}
</style>