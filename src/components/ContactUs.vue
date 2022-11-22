<script>
import { store } from "../store";
export default {
    name: 'Contactus',
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
    <!-- Section Contact Us -->
    <section id="contact-us">
        <div class="container">
            <!-- Title -->
            <div class="title">
                <h5>Contact Us</h5>
                <p>Our postal address and contact details</p>
                <img src="../assets/img/header_divider.png" alt="">
            </div>
            <!-- /Title -->
            <div class="row">
                <!-- Info contact -->
                <div class="item" v-for="(element, index) in store.contact" :key="index">
                    <img :src="getImagePath(`../assets/img/${element.img}`)" :alt="element.title">
                    <h5>{{ element.title }}</h5>
                    <p>{{ element.one }}</p>
                    <p>{{ element.two }}</p>
                    <p>{{ element.three}}</p>
                </div>
                <!-- /Info contact -->
            </div>
            <!-- User Input -->
            <div class="wrapper-row">
                <div class="user-data">
                    <input type="text" placeholder="Your Name*">
                    <input type="text" placeholder="Your E-mail*">
                    <input type="text" placeholder="Your Subject">
                </div>
                <div class="message">
                    <textarea name="yourmessage" id="" cols="50" rows="6" placeholder="Your Message*"></textarea>
                </div>
            </div>
            <!-- /User Input -->

            <!-- Button send message -->
            <div class="button">
                SEND MESSAGE
            </div>
            <!-- /Button send message -->
        </div>

    </section>
    <!-- /Section Contact Us -->
</template>

<style lang="scss" scoped>
#contact-us {
    position: relative;
    padding: 2em 3em 6em 3em;

    .title {
        padding-bottom: 3em;

        h5 {
            font-size: 1.7em;
            color: #554e9e;
        }

    }

    .row {
        display: flex;

        .item {
            text-align: center;
            width: calc(100% / 4);

            h5 {
                padding: .9em;
                color: #554e9e;
            }

            p {
                margin: 0;
                font-size: .9em;
            }
        }
    }

    .wrapper-row {
        padding-top: 3em;
        display: flex;

        .user-data {
            width: 50%;
            display: flex;
            flex-direction: column;

            input {
                margin: 1em 1em .3em;

                padding: .3em;
            }
        }

        .message {
            width: 50%;

            textarea {
                margin: 1em .2em .3em;
                padding: .3em;
            }
        }
    }

    .button {
        position: absolute;
        bottom: 3em;
        left: 50%;
        transform: translate(-50%);
        background-color: #fe6601;
        color: white;
        padding: .5em;
        cursor: pointer;
        display: inline-block;
    }
}
</style>