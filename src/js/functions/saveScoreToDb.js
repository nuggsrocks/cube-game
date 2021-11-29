export const saveScoreToDb = (name, score, difficulty) => {
  fetch('/db/insert?' + new URLSearchParams({
    name,
    score: Number(score),
    difficulty
  }), {
    method: 'POST'
  }).then(() => console.log('Inserted db entry!'))
    .catch(err => console.error(err))
}
