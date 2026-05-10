import { useState } from 'react';

import './stylesheets/SkillsSection.css';

function SkillTab({ tab }) {
    if (tab === 'frontend') {
        return (
            <div className='skill-tab frontend-skills'>
                <div className='skill-label'>HTML</div>
                <div className='skill-label'>CSS</div>
                <div className='skill-label'>JavaScript</div>
                <div className='skill-label'>React</div>
                <div className='skill-label'>React Router</div>
                <div className='skill-label'>Vite</div>
                <div className='skill-label'>Testing Library</div>
                <div className='skill-label'>Vitest</div>
                <div className='skill-label'>Git</div>
            </div>
        );
    }

    return (
        <div className='skill-tab backend-skills'>
            <div className='skill-label'>JavaScript</div>
            <div className='skill-label'>NodeJS</div>
            <div className='skill-label'>Express</div>
            <div className='skill-label'>PassportJS</div>
            <div className='skill-label'>PostgreSQL</div>
            <div className='skill-label'>Prisma ORM</div>
            <div className='skill-label'>SuperTest</div>
            <div className='skill-label'>Jest</div>
            <div className='skill-label'>Git</div>
        </div>
    );
}

export default function SkillsSection({active}) {
    const [tab, setTab] = useState('frontend');

    return (
        <section className='skills-section'>
            <h2 className={active ? 'section-heading active' : 'section-heading'} id='skills'>Skills</h2>
            <div className='tab-buttons'>
                <button
                    className={
                        tab === 'frontend'
                            ? 'frontend-button active'
                            : 'frontend-button'
                    }
                    onClick={() => setTab('frontend')}
                >
                    Frontend
                </button>
                <button
                    className={
                        tab === 'backend'
                            ? 'backend-button active'
                            : 'backend-button'
                    }
                    onClick={() => setTab('backend')}
                >
                    Backend
                </button>
            </div>
            <SkillTab tab={tab} />
            <div className="section-divider"></div>
        </section>
    );
}
