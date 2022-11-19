<script>
import { store } from "../store";
export default {
    name: 'WhatsNew',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="news">
        <div class="container">
            <div class="title">
                <h5>What's New</h5>
                <p>Keep up to date with the latest news</p>
            </div>

            <div class="row">
                <div class="card" v-for="(element, index) in store.new" :key="index">
                    <div class="up">
                        <p>{{ element.date }}</p>
                        <img src="../assets/img/blog_08-300x180.jpg" alt="">
                    </div>
                    <div class="text">
                        <h5>{{ element.title }}</h5>
                        <p>Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesauda esttincidunt
                            etos et mauris, ninc a libero govum est cuprum [..]</p>
                    </div>
                    <hr>
                    <p>{{ element.name}}</p>
                </div>
            </div>
            <div class="button">GO TO BLOG</div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
#news {

    .container {
        text-align: center;

        .title {
            color: #554e9e;
        }

        .card {
            width: calc(100% / 3);
        }

        .button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            display: inline-block;
            margin-top: .8em;
            padding: .5em;
            background-color: #fe6601;
            color: white;
        }
    }
}
</style>