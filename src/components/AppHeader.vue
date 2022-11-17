<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div class="container">
            <div class="header-container">
                <div class="logo">
                    <h1>Logo</h1>
                </div>
                <div class="icon">
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 1.3em 0;
    background-color: lightgreen;

    .container {
        .header-container {
            display: flex;
            justify-content: space-between;

            .icon {
                ul {
                    display: flex;

                    li {
                        margin: 1em;
                    }
                }
            }
        }
    }
}
</style>