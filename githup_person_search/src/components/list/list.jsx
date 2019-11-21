//引入react核心库
import React,{Component} from "react";
//在list中需要使用item,引入item
import Item from "../item/item";
//默认暴露
export default class List extends Component{
  //在外部创建订阅函数
  // 返回的数据不需要展开，在render中自己展开
  render(){
    //使用props接受父元素的参数
    console.log(this.props);
    const {users,isFirst,isLoading,error} = this.props
    //判断各个参数的状态并返回结果
    if (isFirst) {
      return <h2>输入关键字以搜索</h2>
    }else if (isLoading) {
      return <h2>loading.....</h2>
    }else if (error) {
      return <h2>{error}</h2>
    }else{
      return(
        <div className="row">
          {
            users.map((item)=>{
              return <Item key= {Item.login} {...item} />
            })
          }
        </div>
      )
    }
  }
}