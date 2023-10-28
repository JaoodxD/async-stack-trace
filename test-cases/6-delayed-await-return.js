import { setTimeout } from 'node:timers/promises'
import startCounter from 'count-promises'

await 1
const stop = startCounter()
try {
  await doSomethig()
} catch (e) {
  console.log(e)
}
const total = stop()
console.log(total) // 6 promises created

async function doSomethig() {
  await setTimeout(100)
  return await doErrorThrow()
}
async function doErrorThrow () {
  throw new Error('hello world')
}
