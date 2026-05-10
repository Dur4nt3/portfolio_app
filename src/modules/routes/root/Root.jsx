import useActiveSection from '../../utilities/hooks/useActiveSection';

import HomepageNav from './HomepageNav';
import HomepageHeader from './HomepageHeader';
import SkillsSection from './SkillsSection';
import ProjectSection from './ProjectSection';
import HomepageFooter from './HomepageFooter';

export default function Root() {
    const { activeSection } = useActiveSection();

    return (
        <>
            <HomepageNav />
            <HomepageHeader />
            <SkillsSection active={activeSection === '#skills'} />
            <ProjectSection active={activeSection === '#projects'} />
            <HomepageFooter active={activeSection === '#contact'} />
        </>
    );
}
