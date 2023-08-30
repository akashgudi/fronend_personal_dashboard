import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { Kanban } from "./views/kanban/kanban.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App>
            <Kanban></Kanban>
        </App>
    }
])

export default router;