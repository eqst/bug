//暴露
// 引入react--ES6的模块化规范
import React,{Component} from 'react'
import Add from "./Component/add/add.jsx"
import List from "./Component/list/list.jsx"



//定义组件
 export default class App extends Component{

  state = {
    comments :[
      {id:'ud7tudjf7tje83h8g7',name:"啦啦",content:"fdcfgvhbj"},
      {id:'ab7tudjf7tje83h8g8',name:"哈哈",content:"bjnknbub"}, 
      {id:'cd7tudjf7tje83h8g9',name:"嘿嘿",content:"bknkknkjn"}
    ]
  }


  //状态在哪更新状态的方法就在哪---操作状态--commentObj
  // 添加评论--add
  addComment = (commentObj) => {

    // state中的数据:1.不能直接修改2.不能直接更新
    //获取原状态
    // let {comments} = this.state//不要这样获取状态中的对象类型数据,后面或许产生问题
    let comments = [...this.state.comments]
    
    //新的添加数据
    comments.unshift(commentObj)
    //新数据维护到状态中
    this.setState({comments})
    
  }

  // 删除评论--item
  deleteComment = (id) => {
    
    //获取原状态
    let comments = [...this.state.comments]
    //删除数组中ID与传递过来的相同的那个对象
  //   comments.map( () => {
  //     if (item.id === id) {
  //       comments.splice(index,1)
  //     }
  //   } )
  //   this.setState(  {comments} )
  // }
//接到数组===使用Fuller删除
  comments = comments.filter( (item) => {
    return item.id !== id
  } )
  this.setState(  {comments} )
}
  render(){
   let  {comments} = this.state
  return(
    <div>
      <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        {/* 给过去add */}
      <Add addComment = {this.addComment}/>
      <List comments={comments}  deleteComment = {this.deleteComment}/>  
      </div>   
    </div>
  
  )
}
}
