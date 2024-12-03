import React from 'react';

export interface PageProps {}

// This page never displayed in route since folder is private with underline _<page name>

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Private</h1>
    </main>
  );
}
