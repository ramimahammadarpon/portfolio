import { createBrowserRouter } from "react-router";
import App from "../App";
import ProjectDetails from "../Components/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App
    },
    {
        path: 'projectDetails/:id',
        Component: ProjectDetails
    }
])