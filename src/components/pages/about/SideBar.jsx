import HireMeButton from '../../common/HireMeButton';
import Resume from '../../common/Resume';
import { NavLinks } from "./NavLinks";

export const Sidebar = ({ activePage, setActivePage }) => {

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block md:col-span-1 bg-black pt-[120px] px-6 min-h-screen border-r-4 border-slate-800 z-50 ">
                
                <NavLinks activePage={ activePage } setActivePage={ setActivePage } />
                <div className="flex flex-col gap-5 my-5 font-edu">
                    <HireMeButton />
                    <Resume />
                </div>
            </div>
        </>
    );
};