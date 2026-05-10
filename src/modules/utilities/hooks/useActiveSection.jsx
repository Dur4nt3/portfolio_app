import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export default function useActiveSection() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState();

    useEffect(() => {
        setActiveSection(location.hash);

        return () => setActiveSection(null);
    }, [location.hash]);

    return { activeSection };
}
