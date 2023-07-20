import './styles/index.scss';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Article from './views/Article';
import {HelmetProvider,} from 'react-helmet-async';
import Home from './views/Home';
import Navigation from './components/Navigation';
import PageNotFound from './components/PageNotFound';
import Project from './views/Project';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './contexts/Theme';
import Window from './contexts/Window';

const root = ReactDOM.createRoot(document.getElementById(`root`,) as HTMLElement,);

root.render(<React.StrictMode>
    <HelmetProvider>
        <Window>
            <Theme>
                <BrowserRouter>
                    <Navigation />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}/>
                        <Route
                            path="projects/:projectId"
                            element={<Project />}/>
                        <Route
                            path="articles/:articleId"
                            element={<Article />}/>
                        <Route
                            path="*"
                            element={<PageNotFound />}/>
                    </Routes>
                </BrowserRouter>
            </Theme>
        </Window>
    </HelmetProvider>
</React.StrictMode>,);
