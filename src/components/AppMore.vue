<script>
export default {
    name: 'AppMore',
}
</script>

<template>
    <section id="more">
        <div class="container">
            <div class="more">
                <h1>Title</h1>

                <button>Search</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#more {
    padding: 1em 0;
    background-color: violet;
}

.more {
    display: flex;
    justify-content: space-around;
}
</style>