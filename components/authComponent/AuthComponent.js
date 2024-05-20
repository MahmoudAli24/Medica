"use client"
import {useEffect} from 'react';
import {useRouter} from 'next/router';

const withAdminRoute = (WrappedComponent) => {
    const WithAdminRoute = (props) => {
        const isAdmin = true
        const isAuthenticating = true
        const router = useRouter();

        useEffect(() => {
            if (!isAdmin && !isAuthenticating) {
                // Redirect to home page or login page if not admin
                router.push('/');
            }
        }, [isAdmin, isAuthenticating, router]);

        // Render the wrapped component if the user is an admin
        return isAdmin ? <WrappedComponent {...props} /> : null; // Or a loading indicator or a "not authorized" message
    };

    return WithAdminRoute;
};

export default withAdminRoute;
