import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  id?: string;
}

export function Section({ className, id, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 relative overflow-hidden', className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}