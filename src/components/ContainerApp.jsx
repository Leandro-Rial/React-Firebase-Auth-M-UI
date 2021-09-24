import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import AppRouter from '../router/AppRouter';

const ContainerApp = () => {
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    )
}

export default ContainerApp
