import { Link } from 'react-router';

import { MoveLeft } from 'lucide-react';

import './stylesheets/ErrorPage.css';

export default function ErrorPage() {
    return (
        <div className='error-cont'>
            <h1>Page Not Found.</h1>
            <p>
                The page you're looking for doesn't exist or may have been
                moved.
            </p>
            <Link>
                <MoveLeft strokeWidth={1.5} />
                Return Home
            </Link>
        </div>
    );
}
