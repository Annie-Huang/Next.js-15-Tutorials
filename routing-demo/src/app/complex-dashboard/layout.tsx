import UserAnalytics from 'path/to/UserAnalytics';
import RevenueMetrics from 'path/to/RevenueMetrics';
import Notifications from 'path/to/Notifications';
import React from 'react';

export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <UserAnalytics />
      <RevenueMetrics />
      <Notifications />
    </>
  );
}
