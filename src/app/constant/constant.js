import { Heart, LogOut, ShoppingBag, ShoppingCart, User, XCircle } from "feather-icons-react";
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


export const hoverMenu = [
    {
        id: crypto.randomUUID(),
        pages: "Account",
        route: "/",
        icon: <User />,
    },
    {
        id: crypto.randomUUID(),
        pages: "Order",
        route: "/",
        icon: <ShoppingBag />,
    },
    {
        id: crypto.randomUUID(),
        pages: "Cancellation",
        route: "/",
        icon: <XCircle />,
    },
     {
        id: crypto.randomUUID(),
        pages: "Logout",
        route: "/",
        icon: <LogOut />,
    },
]