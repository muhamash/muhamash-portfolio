import HireMeButton from '../../common/HireMeButton';
import Resume from '../../common/Resume';
import { NavLinks } from "./NavLinks";

export const Sidebar = ({ activePage, setActivePage }) => {

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block md:col-span-1 bg-black pt-[120px] px-6 min-h-screen border-r-4 border-slate-800 z-50 ">
                
                <NavLinks activePage={ activePage } setActivePage={ setActivePage } />
                <div className='mt-10 font-edu'>
                    <HireMeButton/>
                </div>
                <div className='mt-3 font-edu'>
                    <Resume/>
                </div>
            </div>
        </>
    );
};