import { create } from 'zustand'

type Sheet = {
    isOpen: boolean
    title: string
    url: string
    body: React.ReactNode
    setIsOpen: (isOpen: boolean) => void
    showSheet: ({url, title, body}: {url: string, title: string, body: React.ReactNode}) => void
}

const sheetStore = create<Sheet>()((set) => ({
    isOpen: false,
    title: "",
    url: "",
    body: null,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
    showSheet: ({url, title, body}: {url: string, title: string, body: React.ReactNode}) => {
        set({ isOpen: true, url, title, body })
    }
  }))
  
  export default sheetStore