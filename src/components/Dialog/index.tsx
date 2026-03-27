'use client';

import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch } from 'react';

type DialogProps = {
  onConfirm: () => void;
  onClose: Dispatch<React.SetStateAction<boolean>>;
  isVisibility?: boolean;
  disable?: boolean;

  title: string;
  content: string;
  icon?: React.ReactNode;
};

export function Dialog({
  isVisibility = false,
  title,
  content,
  icon,
  disable = false,
  onClose,
  onConfirm,
}: DialogProps) {
  if (!isVisibility) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className={clsx(
          'fixed inset-0 bg-black/50 backdrop-blur-xs',
          'flex justify-center items-center z-50',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onClose(false)}
      >
        {/* DIALOG */}
        <motion.div
          className={clsx(
            'bg-slate-100 max-w-[400px] p-6 rounded-2xl mx-4',
            'flex flex-col gap-8',
            'shadow-xl shadow-black/30',
          )}
          role={'dialog'}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center">
            {icon}
            <h2 id="dialog-title" className="text-2xl">
              {title}
            </h2>
          </div>

          <p id="dialog-description" className="text-center">
            {content}
          </p>

          <div className="flex w-full items-center justify-end gap-4">
            <button
              onClick={() => onClose(false)}
              className="bg-slate-300 hover:bg-slate-400 transition cursor-pointer px-3 py-2 
              rounded-lg disabled:cursor-not-allowed disabled:hover:bg-slate-300"
              disabled={disable}
            >
              Voltar
            </button>
            <button
              onClick={onConfirm}
              className="bg-blue-400 hover:bg-blue-500 transition text-slate-100 cursor-pointer px-3 py-2 
              rounded-lg disabled:cursor-not-allowed disabled:hover:bg-blue-400"
              disabled={disable}
            >
              Continuar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
