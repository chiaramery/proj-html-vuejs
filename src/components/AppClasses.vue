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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minima blanditiis facere voluptatem
                    voluptate? Nemo quam unde, dolorem tempore tempora iusto.
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
#classes {
    padding: 2em 0;

    .container-card {
        display: flex;
        flex-wrap: wrap;

        .card-info {
            width: calc(100% / 2);
            border: 1px solid black;
        }

    }
}
</style>