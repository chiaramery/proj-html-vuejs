<script>
export default {
    name: 'AppMap',
}
</script>

<template>
    <!-- Section Map -->
    <section id="map">
        <!-- iframe map -->
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.66143779677!2d-75.67874428437484!3d45.39599997910027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef374fb5a3427474!2zNDXCsDIzJzQ1LjYiTiA3NcKwNDAnMzUuNiJX!5e0!3m2!1sit!2sit!4v1669041431969!5m2!1sit!2sit"
            width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <!-- /iframe map -->
    </section>
    <!-- /Section Map -->
</template>

<style lang="scss" scoped>
#map {
    padding: 3em 0;
}
</style>