import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {URLs} from "../constants";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={URLs.SignIn}/>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
