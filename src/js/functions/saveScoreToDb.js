export const saveScoreToDb = (score) => {
  fetch('/db/insert?' + new URLSearchParams({
    name: localStorage.name,
    score
  }), {
    method: 'POST'
  }).then(() => console.log('Inserted db entry!'))
  .catch(err => console.error(err))
}
