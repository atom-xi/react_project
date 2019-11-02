import React from "react";
import axios from "../../http/http"

interface P {
  name?: string;
  age?: number
}

interface S {
  init_name: string;
  init_age: number,
}

class Home extends React.Component<P, S> {

  constructor(props: P) {
    super(props)
    // console.log(props)
    this.state.init_age = props.age || 0
  }
  public state = {
    init_name: "init_name is xxx!!",
    init_age: 12
  }
  async Login() {
    // let a = await axios.get("/info")
    // let a = await this.s()
  }
  btn() {
    console.log("document.cookie-->", document.cookie)
    let a = "12"
    let c = "12"
    if (a === c) {
      console.log("OK")
    }
    axios.get("/info").then((resp: any) => {
      console.log("resp-->", resp)
      console.log("resp-->", typeof resp)
      this.setState({
        init_age: resp.data.message
      })
    })
  }
  componentDidMount() {
    // 假如通过setState设置并不存在的c，TS无法检查到。
    // console.log("this.state-->", this.state)
    axios.post("/user/login", { name: "cai", password: "123" }).then((resp: any) => {
      console.log("resp-->", resp)
      console.log("resp-->", typeof resp)
    })
    this.setState({
      // init_age: this.props.age
    })
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div>
        <div>This is Home view</div>
        <div>{this.state.init_name}</div>
        <div>{this.state.init_age}</div>
        <button onClick={() => { this.btn() }}>{this.state.init_age}</button>
      </div>
    )
  }
}

export default Home
