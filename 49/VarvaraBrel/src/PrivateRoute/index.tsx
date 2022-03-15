import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { auth } from '../context/firebase';

type Props = {
  children: React.ReactChild;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const currentUser = useContext(AuthContext);

  const logOut = async () => {
    await auth.signOut();
  };

  return currentUser ? (
    <>
      {children} <button onClick={logOut}>Log Out</button>
    </>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
