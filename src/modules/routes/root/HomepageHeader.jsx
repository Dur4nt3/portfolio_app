import { ArrowDown } from 'lucide-react';

import './stylesheets/HomepageHeader.css';

export default function HomepageHeader() {
    return (
        <header className='home-header'>
            <p className='header-eyebrow'>Dante</p>
            <h1 className='header-main'>
                <div>Fullstack</div>
                <div>Developer.</div>
            </h1>
            <p className='header-below'>Postgres · Express · React · Node</p>
            <div className='header-description'>
                Building web applications end-to-end.
            </div>

            <a href='#contact'>
                <span>Get in touch&nbsp;</span>
                <ArrowDown strokeWidth={1.5} />
            </a>

            <div className="header-divider"></div>
        </header>
    );
}
