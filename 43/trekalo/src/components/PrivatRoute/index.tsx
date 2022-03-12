import { FunctionComponent, useContext, useEffect } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";

type PropsPrivatRoute = {
  component: React.ElementType;
};

export const PrivatRoute = ({
  component: Component,
  ...restProps
}: RouteProps & PropsPrivatRoute) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...restProps}
      render={(props) =>
        currentUser ? (
          <>
            <Component {...props} />
            <button onClick={() => auth.signOut()}>SignOut</button>
          </>
        ) : (
          <Redirect to="/signup" />
        )
      }
    />
  );
};
