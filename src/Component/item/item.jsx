import React,{Component} from "react";
import "./item.css"


export default class Item extends Component{

  //删除
  delete = (id) => {
    //删除该条评论--获取该条评论的ID
    // 不改了--const
    const {deleteComment} = this.props
    // 删除
    //指定没有就去找window
    if(window.confirm("确定删除吗?")){
      deleteComment(id)
    }
     
  }
  //渲染
  render() {
    //不能传key
    let {id,name,content} = this.props
    return (
      <li className ="list-grouop-item">
        <div className ="handle">
                    {/* 没点删除就调用了 --{this.delete(id)}  */}
          {/* 点击要函数--给函数--函数体里调用函数 */}
          {/* 在react当中,执行点击时外部要包一个函数--点击时调用 */}
          <a href="#1" onClick = {() => {this.delete(id)}}>刪除</a>
        </div>
    <p className ="user"><span>{name}</span><span>说:</span></p>
    <p className ="content">{content}</p>
    
     </li>
    )
  }
}
