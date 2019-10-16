import React from "react";
import axios from "axios";
interface P {
  name: string;
  age: number
}

interface S {
  init_name: string;
  init_age: number
}

class Home extends React.Component<P, S> {

  constructor(props: P) {
    super(props)
    // console.log(props)
    this.state.init_age = props.age
  }
  public state = {
    init_name: "init_name is xxx!!",
    init_age: 12
  }
  componentWillMount() {
    axios.get("/newscontent").then(resp => {
      console.log("resp-->", resp)
    })
    axios.post("/user/register", { name: "cai", password: "123" }).then(resp => {
      console.log("resp-->", resp)
    })
  }
  componentDidMount() {
    // 假如通过setState设置并不存在的c，TS无法检查到。
    // console.log("this.state-->", this.state)
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
      </div>

    )
  }
}

export default Home
