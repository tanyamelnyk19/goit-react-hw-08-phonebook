import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: C }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
      <>
        {isLoggedIn ? <C /> : <Navigate to="/login" />}
      </>
    );
}
