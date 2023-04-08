import { useState, useEffect } from 'react';
import { ModalState, UserState } from '../types/interfaces/RootState';

export default function useModal(key: string) : UserState | ModalState | undefined {
  const [storage, setStorage] = useState();

  useEffect(() => {
    const storageInfo = localStorage.getItem(key);

    if (storageInfo) {
      const parsedUser = JSON.parse(storageInfo);
      setStorage(parsedUser);
    }
  }, []);

  return storage;
}
