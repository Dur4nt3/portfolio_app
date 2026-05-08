import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';

import ErrorPage from './modules/routes/error/ErrorPage';

import HydrateFallback from './modules/utilities/miscComponents/HydrateFallback';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <HydrateFallback />
    },
]);

export default router;
