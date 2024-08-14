import {createRoutesFromElements, Route} from 'react-router-dom';
import Layout from './layout';
import {Home, PageNotFound, SignIn, SignUp, User} from './pages';
import {URLs} from './constants';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRedirect from './components/AuthRedirect';

const routes = createRoutesFromElements(
    <>
        <Route path="/" element={<Layout/>}>
            <Route path={URLs.Home} element={<Home/>}/>

            {/* SignUp and SignIn routes are protected for logged-in users */}
            <Route path={URLs.SignUp} element={
                <AuthRedirect redirectTo={URLs.User}>
                    <SignUp/>
                </AuthRedirect>
            }
            />
            <Route path={URLs.SignIn} element={
                <AuthRedirect redirectTo={URLs.User}>
                    <SignIn/>
                </AuthRedirect>
            }
            />

            {/* User route is protected */}
            <Route path={`${URLs.User}/:id`} element={
                <ProtectedRoute>
                    <User/>
                </ProtectedRoute>
            }
            />

            <Route path="*" element={<PageNotFound/>}/>
        </Route>
    </>
);

export default routes;
