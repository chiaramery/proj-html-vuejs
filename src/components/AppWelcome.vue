<script>
export default {
    name: 'AppWelcome',
}
</script>

<template>
    <section id="welcome">
        <div class="container">
            <div class="title">
                <h2>Welcome to Fable</h2>
                <p>Fable daycare, preschool and kindergarten</p>
            </div>
            <div class="info-card">
                <ul class="d-flex justify-content-center">
                    <li>
                        <i>icona</i>
                        <h5>title</h5>
                        <p>paragraph</p>
                    </li>
                    <li>
                        <i>icona</i>
                        <h5>title</h5>
                        <p>paragraph</p>
                    </li>
                    <li>
                        <i>icona</i>
                        <h5>title</h5>
                        <p>paragraph</p>
                    </li>
                    <li>
                        <i>icona</i>
                        <h5>title</h5>
                        <p>paragraph</p>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
#welcome {
    padding: 2em 0;

    .container {
        .title {
            text-align: center;
        }

        .info-card {
            text-align: center;

            ul li {
                margin: 1em;
            }
        }
    }
}
</style>