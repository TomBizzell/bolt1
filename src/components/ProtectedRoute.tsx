import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSubscribed } = useAuthStore();

  if (!isSubscribed) {
    return <Navigate to="/pricing" replace />;
  }

  return <>{children}</>;
}