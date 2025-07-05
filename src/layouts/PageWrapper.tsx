interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return <main className={`${className}`}>{children}</main>;
}
