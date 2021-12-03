import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import { Navigate } from "react-router-dom";

export default function PublicRoute({ 
  component: Component, 
  restricted = false, 
  redirectTo = '/' 
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;

    return (
     <>
       {shouldRedirect ? <Navigate to={redirectTo} /> : <Component />}
     </>
    );
}
