import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import React, { useContext } from "react";
import { auth } from "../../firebase/firebase";

type Props = {
  component: React.FC;
};

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  ...rest
}) => {
  const currentUser = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signOut();
  };
  if (currentUser)
    return (
      <>
        <Component />
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  return <Navigate to="/signin" />;
};
