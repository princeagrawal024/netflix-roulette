import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

type Props = { children: ReactNode };
function DefaultModalPortal({ children }: Props) {
  const modalRoot = document.getElementById('modal-portal-root');
  if (!modalRoot) return null;
  return createPortal(children, modalRoot);
}

export default DefaultModalPortal;
