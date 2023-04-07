export interface Iposts {
  count: string,
  next: string,
  previous: string
  results: Ipost[]
}

export interface Ipost {
  id?: string,
  username: string,
  created_datetime: string,
  title: string,
  content: string,
}
