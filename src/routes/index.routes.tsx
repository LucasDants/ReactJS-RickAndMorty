import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";
import { Header } from "../components/Header";
import { Episodes } from "../pages/Episodes";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/episodes" element={<Episodes />} />
            </Routes>
        </BrowserRouter>
    )
}