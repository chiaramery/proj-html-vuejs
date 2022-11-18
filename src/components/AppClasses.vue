<script>
export default {
    name: 'AppClasses',
}
</script>

<template>
    <section id="classes">
        <div class="title">
            <h2>Our Classes</h2>
            <p>Fable daycare, preschool and kindergarten</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="text-title col-6">
                    We provided four classes with nine to twenty children each aged twelve month to five years of age.
                </div>
                <div class="text-p col-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptate, id laudantium aut
                    necessitatibus quidem recusandae blanditiis ullam assumenda.
                </div>
            </div>
            <div class="container-card">
                <div class="card-info" v-for="number in 4" :key="number">
                    <div class="text-card">
                        <h5>Title</h5>
                        <p>Class name</p>
                        <div class="text-info">
                            <h6>12-24</h6>
                            <p>Month olds</p>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="../assets/img/class_01-690x506.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

#classes {
    padding: 2em 0;

    .title {
        h2 {
            color: $text-color;
        }
    }

    .row {
        .text-title {
            color: $text-color;
            font-size: 1.8em;
        }

        .text-p {
            color: gray;
        }
    }

    .container-card {
        display: flex;
        flex-wrap: wrap;

        .card-info {
            width: calc(100% / 2 - 16px);
            margin: 8px;
            display: flex;
            justify-content: space-between;
            color: white;
            background-color: $card-color;

            .text-card {
                padding: 1em;

                .text-info {
                    font-size: 1.3em;

                    p {
                        font-size: .8em;
                    }
                }
            }

            .image-card {
                width: 50%;
            }
        }

    }
}
</style>