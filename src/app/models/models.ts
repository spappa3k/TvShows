export interface ModelMovie {
  score: number
  show: All
}
export interface Filtred{
    id: number
    url: string
    name: string
    genres: string[]
}
export interface All {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended?: string
  officialSite?: string
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network
  webChannel: any
  dvdCountry: any
  externals: Externals
  image: Image
  summary: string
  updated: number
  _links: Links
}

export interface Schedule {
  time: string
  days: string[]
}

export interface Rating {
  average?: number
}

export interface Network {
  id: number
  name: string
  country: Country
  officialSite?: string
}

export interface Country {
  name: string
  code: string
  timezone: string
}

export interface Externals {
  tvrage: any
  thetvdb?: number
  imdb?: string
}

export interface Image {
  medium: string
  original: string
}

export interface Links {
  self: Self
  previousepisode: Previousepisode
  nextepisode?: Nextepisode
}

export interface Self {
  href: string
}

export interface Previousepisode {
  href: string
  name: string
}

export interface Nextepisode {
  href: string
  name: string
}


export interface pippo{
    id: number
    url: string
    name: string
    type: string
}