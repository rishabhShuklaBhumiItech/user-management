import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import StoreProvider from "./redux/StoreProvider.tsx";
import routes from "./routes.tsx";
import './index.css'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider>
            <RouterProvider router={router}/>
        </StoreProvider>
    </StrictMode>,
)
