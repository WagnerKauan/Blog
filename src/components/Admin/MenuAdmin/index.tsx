'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import { useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const navClasses = clsx(
    'relative mb-8',
    'bg-slate-900/80 backdrop-blur-md',
    'border border-slate-700/50',
    'rounded-2xl shadow-lg shadow-black/30',
    'flex flex-col overflow-hidden transition-all duration-300',
    'sm:flex-row sm:items-center sm:gap-2',
    !isOpen && 'h-12',
    isOpen && 'h-auto'
  );

  const linksClasses = clsx(
    'flex items-center gap-2 px-4 h-12 shrink-0',
    'text-sm font-medium text-slate-200',
    'transition-all duration-200 rounded-xl',
    'hover:bg-slate-800/70 hover:text-white',
    'active:scale-[0.98]',
    '[&>svg]:w-4 [&>svg]:h-4'
  );

  const buttonClasses = clsx(
    linksClasses,
    'text-blue-300 sm:hidden justify-between'
  );

  return (
    <nav className={navClasses}>
      {/* Botão mobile */}
      <button onClick={() => setIsOpen((s) => !s)} className={buttonClasses}>
        <div className="flex items-center gap-2">
          {isOpen ? <CircleXIcon /> : <MenuIcon />}
          <span>{isOpen ? 'Fechar' : 'Menu'}</span>
        </div>
      </button>

      {/* Links */}
      <a href="/" target="_blank" className={linksClasses}>
        <HouseIcon />
        Home
      </a>

      <Link href="/admin/post" className={linksClasses}>
        <FileTextIcon />
        Posts
      </Link>

      <Link href="/admin/post/new" className={linksClasses}>
        <PlusIcon />
        Publicar
      </Link>
    </nav>
  );
}