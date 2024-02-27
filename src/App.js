import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as PATHS from './Constants/routes';
import { Home, Browse, SignUp, SignIn } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { UseAuthListner } from './hooks';

function App() {
  const { user } = UseAuthListner();

  return (
    <>
      <Router>
        <Routes>
          <Route
            path={PATHS.SIGN_UP}
            element={
              <IsUserRedirect user={user} loggedInPath={PATHS.BROWSE}>
                <SignUp />
              </IsUserRedirect>
            }
          />
          <Route
            path={PATHS.SIGN_IN}
            element={
              <IsUserRedirect user={user} loggedInPath={PATHS.BROWSE}>
                <SignIn />
              </IsUserRedirect>
            }
          />
          <Route
            path={PATHS.HOME}
            element={
              <IsUserRedirect user={user} loggedInPath={PATHS.BROWSE}>
                <Home />
              </IsUserRedirect>
            }
          />
          <Route
            path={PATHS.BROWSE}
            element={
              <ProtectedRoute user={user} signInPath={PATHS.SIGN_IN}>
                <Browse user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
