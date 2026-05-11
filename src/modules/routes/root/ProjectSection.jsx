import { SquareArrowOutUpRight } from 'lucide-react';

import cvPreview from '../../../assets/media/images/cvProject.png';
import blogPreview from '../../../assets/media/images/blogProject.png';
import messagingPreview from '../../../assets/media/images/messagingProject.png';
import uploaderPreview from '../../../assets/media/images/uploaderProject.png';

import './stylesheets/ProjectsSection.css';

function ProjectCard({
    previewImage,
    backgroundColor,
    name,
    description,
    projectLink,
    repoLink,
    featured = false,
}) {
    return (
        <div className={featured ? 'project-card featured' : 'project-card'}>
            <img
                src={previewImage}
                alt={name}
                className='preview-image'
                style={{ '--preview-image-background': backgroundColor }}
            />
            <div className='project-card-body'>
                <p className={featured ? 'featured-indicator' : 'featured-indicator hide'}>Featured</p>
                <h3 className='project-title'>{name}</h3>
                <p className='project-description'>{description}</p>
                <div className='project-actions'>
                    <a
                        href={projectLink}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='project-link'
                    >
                        <span>View Project &nbsp;</span>
                        <SquareArrowOutUpRight strokeWidth={1.5} />
                    </a>
                    <a
                        href={repoLink}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='project-repo'
                    >
                        <svg
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z' />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function ProjectSection({active}) {
    return (
        <section className='projects-section'>
            <h2 className={active ? 'section-heading active' : 'section-heading'} id='projects'>Projects</h2>
            <div className='projects-grid'>
                <ProjectCard
                    previewImage={cvPreview}
                    backgroundColor='#dadfe3'
                    name='CV Creator'
                    description='A simple app that can be used to create a CV in a PDF format.'
                    projectLink='https://dantescvcreate.netlify.app/'
                    repoLink='https://github.com/Dur4nt3/cv_project'
                />
                <ProjectCard
                    previewImage={blogPreview}
                    backgroundColor='#dededf'
                    name='Blog API'
                    description='A Blog app where you can view and interact with blog posts.'
                    projectLink='https://dantesblog.netlify.app/'
                    repoLink='https://github.com/Dur4nt3/blog_project_overview'
                    featured={true}
                />
                <ProjectCard
                    previewImage={messagingPreview}
                    backgroundColor='#1f2228'
                    name='Messaging App'
                    description='A messaging app where you can add and message friends.'
                    projectLink='https://dantesquicktalk.netlify.app/'
                    repoLink='https://github.com/Dur4nt3/messaging_project_overview'
                    featured={true}
                />
                <ProjectCard
                    previewImage={uploaderPreview}
                    backgroundColor='#1a1b25'
                    name='File Uploader'
                    description='A file uploading app that allows you to upload and share images.'
                    projectLink='https://dantes-uploader.up.railway.app/'
                    repoLink='https://github.com/Dur4nt3/uploader_project'
                />
            </div>
            <div className='section-divider'></div>
        </section>
    );
}
