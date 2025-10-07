import { pages } from "@/app/constant/constant";
import Link from "next/link";


const MainDeskTopLink = () => {
    return (
        <>
            {pages.map((page) => (
                <Link
                    key={page.id}
                    href={page.route}
                    className='px-3 py-3 rounded-2xl font-bold hover:bg-blue-500 hover:text-white hover:font-black active:text-blue-500'>
                    {page.pages}
                </Link>
            ))}
        </>
    );
};

export default MainDeskTopLink;
