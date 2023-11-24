export const formatYear = (date) => {
  return date.split("-")[0]
}

export const formatDate = (date) => {
  return date.split('-').reverse().join('.')
}

export const formatRating = (vote) => {
  return (Math.round(vote * 10) / 10).toFixed(1)
}

export const formatResults = (res) => {
  return res > 1 ? `(${res} results)` : `(${res} result)`
}

export const makePosterUrl = (posterPath) => {
  return posterPath ? `${import.meta.env.VITE_API_POSTER_URL}${posterPath}` : '/not-found.jpg'
}