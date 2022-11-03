import { Outlet } from "react-router";
import NavbarComp from "../components/NavbarComp";

const Layout = () => {
    return (  
        <div>
            {/* navbar 공간 */}
            <NavbarComp />
            <Outlet />
        </div>
    );
}

export default Layout;