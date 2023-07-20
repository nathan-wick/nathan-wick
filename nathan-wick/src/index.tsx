import './styles/index.scss';
import {RouterProvider, createBrowserRouter,} from 'react-router-dom';
import Article from './views/Article';
import Footer from './components/Footer';
import {HelmetProvider,} from 'react-helmet-async';
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
            "element": <Article />,
            "path": `articles/:articleId`,
        },
    ],);

root.render(<React.StrictMode>
    <HelmetProvider>
        <Window>
            <Theme>
                <>
                    <Navigation />
                    <RouterProvider router={router} />
                    <Footer />
                </>
            </Theme>
        </Window>
    </HelmetProvider>
</React.StrictMode>,);
