import { reactive } from "vue";

export const store = reactive({
    // Header links
    links: [
        {
            name: 'Home',
            href: '/home',
            img: "../assets/img/home.png",
        },
        {
            name: 'Pages',
            href: '/pages',
            img: "../assets/img/home.png",
        },
        {
            name: 'Blog',
            href: '/blog',
            img: "../assets/img/home.png",
        },
        {
            name: 'Shop',
            href: '/shop',
            img: "../assets/img/home.png",
        },
        {
            name: 'Shortcodes',
            href: '/shortcodes',
            img: "../assets/img/home.png",
        },
        {
            name: 'Support',
            href: '/support',
            img: "../assets/img/home.png",
        },
        {
            name: 'Contact',
            href: '/contact',
            img: "../assets/img/home.png",
        },
    ],
    // Item carousel
    images: [
        '../assets/img/gallery_01-690x506.jpg',
        '../assets/img/gallery_02-690x506.jpg',
        '../assets/img/gallery_03-690x506.jpg',
    ],
    // Element info math
    circleInfo: [
        {
            num: '507',
            title: 'Our Pupils',
            p: 'Pulvinar forte node terminal est elipsis prism',
        },
        {
            num: '235',
            title: 'Teaching Hours',
            p: 'Elipsis morbi nulla a metro interdium vitae elite.',
        },
        {
            num: '100%',
            title: 'Satisfied Parents',
            p: 'Elementum pulvinar detos diaspis movum blandit.',
        },
        {
            num: '1050',
            title: 'Meals Per Year',
            p: 'Pulvinar forte node terminal est elipsis prism',
        },
    ],
    // Card Class
    cardClass: [
        {
            title: 'Little Lambs',
            img: '../assets/img/class_01-690x506.jpg',
            old: '12-24',
            year: 'Month olds',
            class: '9',
        },
        {
            title: 'Bouncy Bears',
            img: '../assets/img/class_01-690x506.jpg',
            old: '2-3',
            year: 'Year olds',
            class: '12',
        },
        {
            title: 'Tenderhearts',
            img: '../assets/img/class_01-690x506.jpg',
            old: '3-4',
            year: 'Year olds',
            class: '15',
        },
        {
            title: 'Shining Stars',
            img: '../assets/img/class_01-690x506.jpg',
            old: '4-5',
            year: 'Year olds',
            class: '20',
        },
    ],
    // Poin of list
    listCheck: [
        'Comprehensive reporting on individual achievement',
        'Education field trips and school presentations',
        'Individual attention in a small-class setting',
        'Learning program with after-school care',
        'Opportunities to carry out scientific investigations',
        'Positive learning environment for your child'
    ],
    // Icon
    iconCard: [
        {
            title: 'Learning & Fun',
            p: 'Praesent modea est gravida node vehical luctus',
        },
        {
            title: 'Healthy Meals',
            p: 'Terminal interdium a eleifend maecenas est morbi',
        },
        {
            title: 'Friendly Place',
            p: 'Terminal interdium a eleifend maecenas est morbi',
        },
        {
            title: 'Children Safety',
            p: 'Praesent modea est gravida node vehical luctus',
        },
    ],
    // Teachers
    teachers: [
        {
            name: 'Ruth Richie',
            work: 'Teacher',
            p: "I have just finished my studies in Early Childhood Education, and I am also the kid's yoga teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.",
            icon: '',
        },
        {
            name: 'Katie Willmore',
            work: 'Assistant Teacher',
            p: "My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children's learning experience fun.",
            icon: '',
        },
        {
            name: 'Angela Watson',
            work: 'Lead Teacher',
            p: "I hold a degree in Early Childhood Education and an advanced English language certificate. I have been working as a kindergarten teacher since 2002.",
            icon: '',
        },
        {
            name: 'Angela Lynn',
            work: 'Teacher',
            p: "I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with children aged from six weeks to eight years. This is my second year at Fable.",
            icon: '',
        },


    ],
    // What's New
    new: [
        {
            date: 'October 03, 2014',
            img: '',
            title: 'Drawing and Painting Lessons',
            name: 'Anna Brown',
        },
        {
            date: 'October 03, 2014',
            img: '',
            title: 'Fall Parents Meeting Day',
            name: 'Anna Brown',
        },
        {
            date: 'September 20, 2014',
            img: '',
            title: 'Birthday in Kindergarten',
            name: 'Anna Brown',
        },

    ],
    // Contacts
    contact: [
        {
            title: 'Posta Address',
            one: 'Fable Care Center',
            two: '85 Fentiman Ave',
            three: 'Ottawa, ON K1S 0T7',
        },
        {
            title: 'Phone & Email',
            one: 'Phone: 1-800-64-38',
            two: 'Fax: 1-800-64-39',
            three: 'office@fable.com',
        },
        {
            title: 'Business Hour',
            one: 'Monday - Friday',
            two: '8.00 am - 5.00 pm',
            three: 'Weekend Closed',
        },
        {
            title: 'Sessions',
            one: 'Mornings, 8 am - 12 noon ',
            two: 'Afternoons, 1 pm - 5 pm',
            three: 'Full Day, 8 am - 5 pm',
        },
    ],
    // Footer list
    listFooter: [
        'Friendly and welcome place',
        'Science ad art classes',
        'Positive learning environment',
        'Educational field trips',
        'Writing and reading classes',
        'Science and art classes'
    ],
})