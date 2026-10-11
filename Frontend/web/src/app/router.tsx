import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Dashboard from "../components/Dashboard";
import Playslists from "../components/Playlist";
import Sync from "../components/Sync";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: < Dashboard />
            },
            {
                path: "playlists",
                element: <Playslists />
            },
            {
                path: "sync",
                element: <Sync />
            }

        ],
    }
])