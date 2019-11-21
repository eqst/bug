//引入react核心库
import React,{Component} from "react";
//引入list和search
import Search from "./components/search/search";
import List from "./components/list/list";
//默认暴露
export default class App extends Component{
  //参数初始化
  state = {
    users:[],
    isLoading:'false',
    isFirst:'true',
    error:""
  }
  //数据更新函数
  updateAppState = (obj)=>{
    this.setState(obj)
  }
  render(){
    return(
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search updateAppState = {this.updateAppState}/>
        </section>
        <List {...this.state}/>
      </div>
    )
  }
}