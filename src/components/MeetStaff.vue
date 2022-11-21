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
                    <div class="teacher" v-for="(teacher, index) in store.teachers" :key="index">
                        <img src="../assets/img/team_01.jpg" alt="">
                        <div class="name">
                            <h5>{{ teacher.name }}</h5>
                            <p>{{ teacher.work}}</p>
                        </div>
                    </div>
                    <div class="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam
                            exercitationem hic fuga porro, saepe,</p>
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

                .teacher {
                    width: calc(100% / 4);


                    .name {
                        color: #554e9e;
                        text-align: center;
                    }
                }

                .description {
                    display: flex;
                    align-items: center;
                    width: 30%;
                }
            }
        }

    }
}
</style>