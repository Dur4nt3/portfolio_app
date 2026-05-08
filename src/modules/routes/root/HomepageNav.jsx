import './stylesheets/HomepageNav.css';

export default function HomepageNav() {
    return (
        <nav className='homepage-nav'>
            <div className='nav-left'>Dante</div>
            <div className='nav-right'>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </nav>
    );
}
