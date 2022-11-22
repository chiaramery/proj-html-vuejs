<script>
import { store } from "../store";
export default {
    name: 'MeetStaff',
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath(img) {
            return new URL(img, import.meta.url).href
        }
    }
}
</script>

<template>
    <!-- Meet Our Staff -->
    <section id="meet-staff">
        <div class="container">
            <!-- Title -->
            <div class="title">
                <h1>Meet Our Staff</h1>
                <p>With education and experience in early childhood care</p>
            </div>
            <!-- /Title -->
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
                    <!-- Card -->
                    <div class="card-teacher" v-for="(teacher, index) in store.team" :key="index">
                        <div class="teacher text-center">
                            <img :src="getImagePath(`../assets/img/${teacher.img}`)" :alt="teacher.name">
                            <div class="name">{{ teacher.name }}</div>
                            <div class="role">
                                <p>{{ teacher.role }}</p>
                            </div>
                        </div>
                        <div class="description">
                            <div class="quote">
                                <img src="../assets/img/quote.png" alt="">
                            </div>
                            <p>{{ teacher.description }}</p>
                            <!-- Social networks of the teachers -->
                            <div class="icon">
                                <a :href="teacher.icon1"><img :src="getImagePath(`../assets/img/${teacher.icon1}.png`)"
                                        alt="icon"></a>
                                <a :href="teacher.icon2"><img :src="getImagePath(`../assets/img/${teacher.icon2}.png`)"
                                        alt="icon"></a>
                                <a :href="teacher.icon3"><img :src="getImagePath(`../assets/img/${teacher.icon3}.png`)"
                                        alt="icon"></a>
                            </div>
                            <!-- /Social networks of the teachers -->
                        </div>
                    </div>
                    <!-- /Card -->
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