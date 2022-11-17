<script>
import AppMore from './AppMore.vue';
import AppSlider from './AppSlider.vue';
import MeetStaff from './MeetStaff.vue';
import MissionOverview from './MissionOverview.vue';
import AppCarousel from './AppCarousel.vue';
import AppClasses from './AppClasses.vue';
import AppWelcome from './AppWelcome.vue';
export default {
    name: 'AppMain',
    components: {
        AppSlider,
        AppMore,
        AppWelcome,
        MissionOverview,
        AppCarousel,
        AppClasses,
        MeetStaff,
    },
}
</script>

<template>
    <AppSlider />
    <AppMore />
    <AppWelcome />
    <MissionOverview />
    <AppCarousel />
    <AppClasses />
    <MeetStaff />
</template>

<style lang="scss" scoped>

</style>