import React from 'react';
import { DashboardStyle } from '../css/DashboardStyle';

const Dashboard = () => {

    const username = localStorage.getItem('username') || 'Admin';

    return (
        <DashboardStyle>
        <div className="dashboard-container">
            <div className="welcome">
                <h1>Bem vindo, {username}!</h1>
                <p>Você fez o login com sucesso.</p>
            </div>

            <div className="watch">
            <h1>Assista à corrida e concorra a prêmios!</h1>
            <iframe width="1080" height="720"
            src="https://www.youtube.com/embed/KezLkVHiXV0">
            </iframe> 
            </div>
        </div>
        </DashboardStyle>
    );
};

export default Dashboard;
