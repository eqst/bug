//引入react核心库
import React,{Component} from "react";
//引入axios,需要用来发get请求
import axios from "axios"
//默认暴露
export default class Search extends Component{
  //创建ref用以获取节点,及节点的内容
  myRef = React.createRef()
  //创建搜索的回调函数
  search = ()=>{
    //解构赋值获取更新数据函数
    let {updateAppState} = this.props
    //获取用户输入
    const keyWord = this.myRef.current.value
    //校验数据
    if(keyWord.trim() === "") return
    //根据输入内容更新链接
    const URL =  `https://api.github.com/search/users?q=${keyWord}`
    //请求之前更新数据,即定义更新数据的方法
    updateAppState(
      {
        users:[],
        isFirst:true,
        isLoading:false,
        error:""
      }
    )
    //使用axios发送请求
    //(使用.then确定成功的回调,使用catch获取失败的回调)
    axios.get(URL)
      .then((value)=>{
        updateAppState({
          users:[],
          isFirst:false,
          isLoading:false,
          error:""
        })
      })
      .catch((error)=>{
        updateAppState({
          users:[],
          isFirst:false,
          isLoading:false,
          error:error.massage
        })
      })
    //清空input(current当前的位置)
    this.myRef.current.value = ""
  }
  
  //使用render
  render(){
    return(
      <div>
        <input type="text" placeholder="enter the name you search"ref = {this.myRef} />&nbsp;
        <button onClick = {this.search}>Search</button>
      </div>
    )
  }
}