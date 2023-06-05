// Navigation bar always will be visible, because it's rendered under root
import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"


export default function Root() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}