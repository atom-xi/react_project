console.log("process.env.NODE_ENV", process.env.NODE_ENV)

import a from "./a.js"
console.log("a-->", a)
import axios from "axios"
console.log("axios-->", axios)

console.log("122213123")
//有没有被删除
console.log("adas")
console.log("ada3s")
console.log("123adsa 1")
import "./index.css"
import "./a.css"

var element = `<div class="ad">12322222</div>`

document.body.innerHTML = element
console.log("element", element)
if (module.hot) {
  //   module.hot.accept("./index.js", function() {
  console.log("Accepting the updated printMe module!")
  // printMe()
  //   })
}
