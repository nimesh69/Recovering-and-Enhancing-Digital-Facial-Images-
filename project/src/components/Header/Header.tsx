import React from 'react';
import { Logo } from './Logo';
import { NavButtons } from './NavButtons';

export function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <Logo />
      <NavButtons />
    </header>
  );
}