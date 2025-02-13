import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
      <Sparkles className="w-6 h-6" />
      AI Facial Restoration
    </Link>
  );
}