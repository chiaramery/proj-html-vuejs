import { reactive } from "vue";

export const store = reactive({
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
    ]
})