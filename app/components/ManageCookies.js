"use client";

import { useState } from 'react';
import CookiePreferencesModal from './CookiePreferencesModal';

export default function ManageCookies({ className = '', children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`text-blue-600 hover:text-blue-800 underline ${className}`}
      >
        {children || 'Manage Cookie Preferences'}
      </button>

      <CookiePreferencesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={() => setIsModalOpen(false)}
      />
    </>
  );
} 