"use client";

import { ReactNode } from "react";
import { useHydrated } from "@/hooks/useHydrated";

type Props = {
  children(): ReactNode;
  fallback?: ReactNode;
};

export function ClientOnlyWrapper({ children, fallback = null }: Props) {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>;
}

interface IClientOnly {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ClientOnly: React.FC<IClientOnly> = ({ children, fallback = null }) => {
  return (
    <ClientOnlyWrapper fallback={fallback}>{() => children}</ClientOnlyWrapper>
  );
};

export default ClientOnly;
