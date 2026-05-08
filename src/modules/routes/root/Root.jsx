import HomepageNav from './HomepageNav';
import HomepageHeader from './HomepageHeader';
import SkillsSection from './SkillsSection';
import ProjectSection from './ProjectSection';
import HomepageFooter from './HomepageFooter';

export default function Root() {
    return (
        <>
            <HomepageNav />
            <HomepageHeader />
            <SkillsSection />
            <ProjectSection />
            <HomepageFooter />
        </>
    );
}
