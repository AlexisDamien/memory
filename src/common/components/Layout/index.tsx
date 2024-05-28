import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header.component";
import { OutletContainer, StyleOutlet } from "./layout.styles";

const Layout : React.FC<React.PropsWithChildren> = (): JSX.Element => {
    return (
        <>
            <OutletContainer>
                <Header />
                <div className={StyleOutlet}>
                    <Outlet />
                </div>
            </OutletContainer>
        </>
    );
};

export default Layout;
