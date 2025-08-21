import { create } from 'zustand'

interface Anasayfa {
  baslik1: string
  baslik2: string
  resim: string
  yazi: string
}

interface Hakkimda {
  musteriAdet: string
  projeAdet: string
  memnuniyet: string
  deneyim: string
}

interface Proje {
  ad: string
  url: string
  resimler: string[]
}

interface Yetenek {
  isim: string
  icon: string
}

interface Iletisim {
  baslik: string
  bilgiler: {
    baslik: string
    deger: string
    url: string
    icon: string
  }[]
}

interface ApiData {
  anasayfa: Anasayfa
  hakkimda: Hakkimda
  projeler: Proje[]
  yetenekler: Yetenek[]
  iletisim: Iletisim
}

type Store = {
  apiData: ApiData | null
  loading: boolean
  error: string | null
  
  setApiData: (data: ApiData) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearData: () => void
  

}

const dataStore = create<Store>()((set) => ({
  apiData: null,
  loading: false,
  error: null,

  setApiData: (data: ApiData) => set({ apiData: data, error: null }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error, loading: false }),
  clearData: () => set({ apiData: null, error: null, loading: false })
}))

export default dataStore
export type { ApiData, Anasayfa, Hakkimda, Proje, Yetenek, Iletisim }