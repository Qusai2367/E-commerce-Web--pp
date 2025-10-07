import { hoverMenu } from "@/app/constant/constant";
import React from "react";

const HoveringMenu = () => {
    return (
        <ul className="bg-blue-500 rounded-2xl shadow-lg w-48 p-2">
            {hoverMenu.map((page) => (
                <li
                    key={page.id}
                    className="p-3 text-white hover:bg-blue-600 hover:text-sky-200 cursor-pointer transition-colors duration-200 rounded-2xl"
                >
                    {page.pages}
                </li>
            ))}
        </ul>
    );
};

export default HoveringMenu;
