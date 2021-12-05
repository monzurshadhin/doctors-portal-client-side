import { LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,admin,isLoading} = useAuth();
    let location = useLocation();
    if(isLoading){
        return (
            <LinearProgress color="secondary" />
        )
    }
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/home" state={{from : location}}></Navigate>
   
};

export default AdminRoute;