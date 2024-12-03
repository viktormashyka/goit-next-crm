import React from 'react';

export interface PageProps {}

// Folder should has file page.tsx to be displayed in route

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Settings</h1>
    </main>
  );
}
