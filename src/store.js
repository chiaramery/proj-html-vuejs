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
    // Icon section welcome
    iconWelcome: [
        {
            title: 'Morbi Etos',
            icon: "../assets/img/schoolbag_alt.png",
            p: 'lorem ipsum dol',

        },
        {
            title: 'Congue Gravida',
            icon: "../assets/img/stroller_alt.png",
            p: 'lorem ipsum dol',
        },
        {
            title: 'Maecenadas Node',
            icon: "../assets/img/globe_alt.png",
            p: 'lorem ipsum dol',
        },
        {
            title: 'Praesent Morbi',
            icon: "../assets/img/bell_alt.png",
            p: 'lorem ipsum dol',
        }
    ],
    // Item carousel
    carouselClasses: {
        images: [
            '../assets/img/gallery_01-690x506.jpg',
            '../assets/img/gallery_02-690x506.jpg',
            '../assets/img/gallery_03-690x506.jpg',
            '../assets/img/gallery_04-690x506.jpg',
            '../assets/img/gallery_07-690x506.jpg',
            '../assets/img/gallery_08-690x506.jpg',
        ]
    },
    // Element info math
    circleInfo: [
        '507',
        '235',
        '100%',
        '1050',
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
            title: 'Learning & Fun',
            p: 'Praesent modea est gravida node vehical luctus',
        },
    ],
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


    ]

})