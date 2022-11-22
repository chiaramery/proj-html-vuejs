<script>
import AppMore from './AppMore.vue';
import AppSlider from './AppSlider.vue';
import MeetStaff from './MeetStaff.vue';
import MissionOverview from './MissionOverview.vue';
import AppCarousel from './AppCarousel.vue';
import AppClasses from './AppClasses.vue';
import AppGoal from './AppGoal.vue';
import AppWelcome from './AppWelcome.vue';
import SlideKinde from "./SlideKinde.vue";
import WhatsNew from './WhatsNew.vue';
import AppMap from './AppMap.vue';
import ContactUs from './ContactUs.vue';
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
        SlideKinde,
        WhatsNew,
        AppMap,
        ContactUs,
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
    <SlideKinde />
    <WhatsNew />
    <AppMap />
    <ContactUs />
</template>

<style lang="scss" scoped>

</style>