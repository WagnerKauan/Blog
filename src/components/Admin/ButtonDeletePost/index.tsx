'use client';

import deletePostAction from '@/actions/post/post-delete';
import { Dialog } from '@/components/Dialog';
import { Trash2Icon, TriangleAlert } from 'lucide-react';
import { useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type ButtonDeletePostProps = {
  id: string;
  title: string;
};

export function ButtonDeletePost({ id, title }: ButtonDeletePostProps) {
  const [isPendenting, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    toast.dismiss();

    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success('Post deletado com sucesso.');
    });
  }

  return (
    <>
      <button
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        className="cursor-pointer  hover:-rotate-45 transition-all 
        disabled:cursor-not-allowed disabled:hover:-rotate-0  hover:scale-105 text-red-400 hover:text-red-500"
        onClick={handleClick}
        disabled={isPendenting}
      >
        <Trash2Icon size={20} />
      </button>

      {showDialog && (
        <Dialog
          icon={<TriangleAlert size={50} className="text-red-600" />}
          title="Atenção!"
          content="Ao deletar este post, vocé perder&aacute; todos os dados e n&atilde;o poder&aacute; ser recuperados."
          isVisibility={showDialog}
          onClose={setShowDialog}
          onConfirm={handleConfirm}
          disable={isPendenting}
        />
      )}
    </>
  );
}
