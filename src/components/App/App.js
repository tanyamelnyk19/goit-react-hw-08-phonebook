import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import MyLoader from 'components/MyLoader';
import { authOperations, authSelectors  } from 'redux/auth';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

const HomePage = lazy(() =>
  import(
    'pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */
  ),
);
const RegisterPage = lazy(() =>
  import(
    'pages/RegisterPage/RegisterPage.js' /* webpackChunkName: "register-page" */
  ),
);
const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage.js' /* webpackChunkName: "login-page" */
  ),
);
const ContactsPage = lazy(() =>
  import(
    'pages/ContactsPage/ContactsPage.js' /* webpackChunkName: "contacts-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
      <div className="App">
        <AppBar />

        <Suspense fallback={<MyLoader />}>
          <Routes>
            <Route
              path="/"
              element={<PublicRoute component={HomePage} />}
            />
            <Route
              path="/register"
              element={<PublicRoute component={RegisterPage} restricted />}
            />
            <Route
              path="/login"
              element={<PublicRoute component={LoginPage} restricted redirectTo="/contacts"/>}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={ContactsPage} />}
            />
          </Routes>
        </Suspense>
      </div>
      )}
    </>
  );
}