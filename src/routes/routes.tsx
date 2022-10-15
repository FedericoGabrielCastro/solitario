import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom"
import CustomNavbar from "../components/customNavbar/CustomNavbar"
import SolitarioGame from "../pages/SolitarioGame/SolitarioGame"

const ProviderRoutes = () => {

    return (
        <BrowserRouter>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<SolitarioGame />} />
                <Route path="*" element={<Navigate to="/" replace/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default ProviderRoutes