import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { URLs } from '../constants';

interface AuthRedirectProps {
    children: ReactNode;
    redirectTo: string;
}

const AuthRedirect = ({ children, redirectTo }: AuthRedirectProps) => {
    const token = localStorage.getItem('token');

    if (token) {
        // Redirect to the specified route if user is already authenticated
        return <Navigate to={redirectTo} />;
    }

    return <>{children}</>;
};

export default AuthRedirect;
