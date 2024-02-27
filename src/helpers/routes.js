import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children }) {
  const render = user ? <Navigate to={loggedInPath} /> : children;

  return render ? <>{render}</> : null;
}

export function ProtectedRoute({ user, signInPath, children }) {
  const location = useLocation();
  const render = user ? children : <Navigate to={{ pathname: signInPath, from: location }} />;
  return render ? <>{render}</> : null;
}
