interface Houses {
  page: number
  total: number
  pages: number
  limit: number
  data: House[]
}

interface House {
  id: number
  title: string
  country: string
  city: string
  rating: number
  price: number
  host_type: string
  featured_photo: string
  description: string
}

interface Host{
  name: string
  photo: string
  type: string
  rating: number
}

interface Photos{
  photos: string[]
}

interface Reviews{
  reviews: Review[]
}

interface Review{
  name: string
  photo: string
  date: string
  comment: string
}

export {Host, House, Houses, Photos, Reviews, Review}
