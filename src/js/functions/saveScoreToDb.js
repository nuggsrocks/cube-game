export const saveScoreToDb = (score, difficulty) => {
  fetch('/db/insert?' + new URLSearchParams({
    name: localStorage.name,
    score,
    difficulty
  }), {
    method: 'POST'
  }).then(() => console.log('Inserted db entry!'))
    .catch(err => console.error(err))
}
