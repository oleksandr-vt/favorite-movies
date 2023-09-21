export const formatDate = (date) => {
  return date.split("-")[0]
}

export const formatRating = (vote) => {
  return (Math.round(vote * 10) / 10).toFixed(1)
}