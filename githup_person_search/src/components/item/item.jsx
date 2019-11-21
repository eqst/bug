//引入react核心库
import React,{Component} from "react";
//引入css样式

//暴露模块
export default class Item extends Component{
  //render
  render (){
    //将请求到的数据解构赋值
    console.log(this.props);
    const {login,html_url,avatar_url} = this.props
    return(
      <div className="card">
      <a href={html_url}>
        <img src={avatar_url} style={{width: '100px'}} alt = "图片"/>
      </a>
      <p className="card-text">{login}</p>
    </div>
    )
  }
}