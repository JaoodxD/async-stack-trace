import startCounter from 'count-promises'

await 1
const stop = startCounter()
try {
  await doSomethig()
} catch (e) {
  console.log(e)
}
const total = stop()
console.log(total) // 2 promises created

function doSomethig() {
  return doErrorThrow()
}
async function doErrorThrow() {
  throw new Error('hello world')
}
