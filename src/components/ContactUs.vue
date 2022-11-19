<script>
import { store } from "../store";
export default {
    name: 'Contactus',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="contact-us">
        <div class="container">
            <div class="title">
                <h5>Contact Us</h5>
                <p>Our postal address and contact details</p>
            </div>
            <div class="row">
                <div class="item" v-for="(element, index) in store.contact" :key="index">
                    <h5>{{ element.title }}</h5>
                    <p>{{ element.one }}</p>
                    <p>{{ element.two }}</p>
                    <p>{{ element.three}}</p>
                </div>
            </div>
            <div class="wrap-input">
                <div class="input col-6">
                    <input type="text" class="name" placeholder="Your Name*">
                    <input type="text" class="email" placeholder="Your Email*">
                    <input type="text" class="subject" placeholder="Subject">
                </div>
                <div class="message col-6">
                    <input type="text" class="subject" placeholder="Your Message*">
                </div>
            </div>

            <div class="button">
                SEND MESSAGE
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
#contact-us {
    position: relative;
    padding: 6em;

    .title {
        h5 {
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

    .wrap-input {
        padding: 2em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .input {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            input {
                width: 100%;
            }
        }

        .message {
            input {
                margin: 10px;
                height: 90%;
                width: 100%;

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