// import UserAnalytics from 'path/to/UserAnalytics';
// import RevenueMetrics from 'path/to/RevenueMetrics';
// import Notifications from 'path/to/Notifications';
import React from 'react';

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  // return (
  //   <>
  //     <div>{children}</div>
  //     <UserAnalytics />
  //     <RevenueMetrics />
  //     <Notifications />
  //   </>
  // );

  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
