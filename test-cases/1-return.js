import startCounter from 'count-promises'

await 1
const stop = startCounter()
await doSomethig()
const total = stop()
console.log(total) // 4 promises created

async function doSomethig() {
  return doSomethigElse()
}
async function doSomethigElse() {
  return 'hello world'
}
