import { Route, Routes } from "react-router-dom"

import { Main } from "../pages/main"
import { Layout } from "../components/layout"

export const Routers: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Main />} />
                </Route>
            </Routes>
        </div>
    )
}