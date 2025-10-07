import { Heart, ShoppingCart, User } from "feather-icons-react";
export const pages = [
    {
        id: crypto.randomUUID(),
        pages: "Home",
        route: "/",
    },
    {
        id: crypto.randomUUID(),
        pages: "Products",
        route: "/",
    },
    {
        id: crypto.randomUUID(),
        pages: "Contact",
        route: "/",
    },
    {
        id: crypto.randomUUID(),
        pages: "About",
        route: "/",
    },

    {
        id: crypto.randomUUID(),
        pages: "Dashboard",
        route: "/",
    },
];

export const SecndaryPage = [
    {
        id: crypto.randomUUID(),
        pages: "Home",
        route: "/",
        icon: <ShoppingCart />,
    },
    {
        id: crypto.randomUUID(),
        pages: "Products",
        route: "/",
        icon: <Heart />,
    },
    {
        id: crypto.randomUUID(),
        pages: "User",
        route: "/",
        icon: <User />,
    },
];
