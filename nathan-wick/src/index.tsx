import './styles/index.scss';
import Home from './views/Home';
import Navigation from './components/Navigation';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './contexts/Theme';

const root = ReactDOM.createRoot(document.getElementById(`root`,) as HTMLElement,);
root.render(<React.StrictMode>
    <Theme>
        <>
            <Navigation />
            <Home />
        </>
    </Theme>
</React.StrictMode>,);
