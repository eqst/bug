import React,{Component} from "react";
 import uuid from "uuid"

 export default class Add extends Component{
  add = () => {
    //接添加的评论
    let {addComment} = this.props
    
    //获取用户输入
      //拿到节点--写的方式不一样
      let name = this.refs.name.value
      let content = this.content.value

      // 定义变量--
      
      // console.log(name.value,content.value)
 
    //校验数据as
      if (!name.trim() || !content.trim()) {
        alert ("不能为空")
        return 
      }
    //将输入的数据维护到状态中-ID唯一  UUUID码
    //点击添加的时候先存入数据库--生成唯一的ID--直接调用
    addComment({id:uuid(),name,content})
    //清空输入
    this.refs.name.value = ""
    this.content.value = ""
   }




  
  //渲染
  render(){
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref = "name"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={(content) => {this.content=content}}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button  onClick = {this.add} type="button" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )  
  }
}