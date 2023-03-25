import { Route, Routes } from "react-router-dom"
import { Layout } from "../pages/layout"
import { Main } from "../pages/main"

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