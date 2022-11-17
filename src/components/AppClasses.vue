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
                <div class="card-info" v-for="number in 4" :key="number">Lorem ipsum, dolor sit amet
                    consectetur
                    adipisicing elit. Necessitatibus quaerat rerum fuga ab laudantium. </div>
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
            background-color: $card-color;
        }

    }
}
</style>