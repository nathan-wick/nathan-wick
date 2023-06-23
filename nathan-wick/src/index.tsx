import './styles/index.scss';
import Home from './views/Home';
import Navigation from './components/Navigation';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './contexts/Theme';
import Window from './contexts/Window';

const root = ReactDOM.createRoot(document.getElementById(`root`,) as HTMLElement,);
root.render(<React.StrictMode>
    <Window>
        <Theme>
            <>
                <Navigation />
                <Home />
            </>
        </Theme>
    </Window>
</React.StrictMode>,);
