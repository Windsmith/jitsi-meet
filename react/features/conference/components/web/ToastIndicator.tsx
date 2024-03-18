import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../../../../../react-toastify/ReactToastify.css';

export default function Toast(){
  const notify = () => toast("Warning: Possible deepfake detected. Stay vigilant.", {
    position: 'top-center',
    theme: 'dark'
  });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer/>
    </div>
  );
}

export const notify = (username?: string) => toast(`Warning: Possible deepfake detected. Deepfake might be user named ${username}. Stay vigilant.`, {
  position: 'top-center',
  theme: 'dark'
});