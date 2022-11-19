<script>
export default {
    name: 'AppMore',
}
</script>

<template>
    <section id="more">
        <div class="container">
            <div class="more">
                <p>How to Enroll Your Child to a Class?</p>
                <div class="button">
                    <a href="">LEARN MORE<img src="../assets/img/slider_next.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#more {
    padding: 2em 0;
    background-image: url("../assets/img/pattern.png");
    background-size: cover;

    .more {
        display: flex;
        justify-content: space-around;
        align-items: center;

        p {
            font-size: 2em;
            color: white;
        }

        .button {

            a {
                border: 1px solid white;
                color: white;
                padding: .5em;

                img {
                    width: 20%;
                }
            }
        }

    }
}
</style>