import React from 'react';
import { DashboardStyle } from '../css/DashboardStyle';

const Dashboard = () => {

    const username = localStorage.getItem('username') || 'Admin';

    return (
        <DashboardStyle>
        <div className="dashboard-container">
            <h1>Bem vindo, {username}!</h1>
            <p>Você fez o login com sucesso.</p>
        </div>
        </DashboardStyle>
    );
};

export default Dashboard;
