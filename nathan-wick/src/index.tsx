import './styles/index.scss';
import {RouterProvider, createBrowserRouter,} from 'react-router-dom';
import Home from './views/Home';
import Navigation from './components/Navigation';
import PageNotFound from './components/PageNotFound';
import Project from './views/Project';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './contexts/Theme';
import Window from './contexts/Window';

const root = ReactDOM.createRoot(document.getElementById(`root`,) as HTMLElement,),
    router = createBrowserRouter([
        {
            "element": <Home />,
            "errorElement": <PageNotFound />,
            "path": `/`,
        },
        {
            "element": <Project />,
            "path": `projects/:projectId`,
        },
        {
            "element": <Home />,
            "path": `articles/:articleId`,
        },
    ],);

root.render(<React.StrictMode>
    <Window>
        <Theme>
            <>
                <Navigation />
                <RouterProvider router={router} />
            </>
        </Theme>
    </Window>
</React.StrictMode>,);
