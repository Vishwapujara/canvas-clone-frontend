'use client';

import { ReactNode, use } from 'react';
import KambazNavigation from '../../Navigation';
import CourseNavigation from './Navigation';

interface CoursesLayoutProps {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}

export default function CoursesLayout({ children, params }: CoursesLayoutProps) {
  const { cid } = use(params);

  return (
    <div className="d-flex">
      {/* Kambaz Navigation */}
      <div className="d-none d-md-block">
        <KambazNavigation />
      </div>

      {/* Course Navigation with 10px gap from Kambaz nav */}
      <div className="d-none d-md-block" style={{ marginLeft: '10px' }}>
        <CourseNavigation cid={cid} />
      </div>

      {/* Main content area */}
      <div className="flex-fill" style={{ marginLeft: '10px' }}>
        {children}
      </div>
    </div>
  );
}
