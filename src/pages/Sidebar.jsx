import React from 'react';

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="sidebar-avatar">
          <img src={user.avatarUrl} alt={user.name} />
        </div>
        <div className="sidebar-user">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;