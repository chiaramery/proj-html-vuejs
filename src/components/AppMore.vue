<script>
export default {
    name: 'AppMore',
}
</script>

<template>
    <!-- Section More Information -->
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
    <!-- /Section More Information -->
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

                &:hover {
                    background-color: white;
                    color: rgb(85, 78, 158);
                }
            }
        }

    }
}
</style>