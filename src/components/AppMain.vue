<script>
import AppMore from './AppMore.vue';
import AppSlider from './AppSlider.vue';
import MeetStaff from './MeetStaff.vue';
import MissionOverview from './MissionOverview.vue';
import AppCarousel from './AppCarousel.vue';
import AppClasses from './AppClasses.vue';
import AppGoal from './AppGoal.vue';
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
        AppGoal,
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
    <AppGoal />
    <AppMore />
    <MeetStaff />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>