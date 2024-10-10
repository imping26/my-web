import { create } from 'zustand'

const useFilterSideBarStore = create((set) => ({
  isOpen: false,
  toggleFilterSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
  openFilterSideBar: () => set({ isOpen: true }),
  closeFilterSideBar: () => set({ isOpen: false }),
}))

export default useFilterSideBarStore