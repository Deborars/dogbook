import React from 'react'
import { UserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (login === true) {
    return children
  } else if (login === false) {
    return navigate("/login")
  } else {
    return <></>
  }
};

export default ProtectedRoute;