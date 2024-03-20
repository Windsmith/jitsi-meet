import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../../../../../react-toastify/ReactToastify.css';

export default function Toast(){
  return (
    <div>
      <ToastContainer/>
    </div>
  );
}

export const notify = (username?: string) => toast(`Warning: Deepfake might be user named ${username}. Stay vigilant.`, {
  position: 'top-center',
  theme: 'dark'
});