import { create } from 'zustand'

type ModalState = {
  isVisible: boolean,
  hide: () => void,
  show: () => void,
}

export const useAddPostModalStore = create<ModalState>()((set) => ({
  isVisible: true,
  hide: () => set(() => ({ isVisible: false })),
  show: () => set(() => ({ isVisible: true })),
}))