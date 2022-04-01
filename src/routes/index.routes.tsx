import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Characters } from "../pages/Characters";
import { Episodes } from "../pages/Episodes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  )
}