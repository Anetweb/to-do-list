import { Component } from "react";
import pencil from './pencil.jpg';

export class ToDoList extends Component {
state = {
userinput:'',
toDoList: []
}

onChangeEvent(e) {
  this.setState({userinput: e});
}

addItem(input) {
    if(input === "") {
        alert("Please enter in item")
    }else {
    let ListArray = this.state.toDoList;
    ListArray.push(input)
    this.setState({toDoList: ListArray, userinput:''})
    console.log(ListArray)
}}

deleteItem() {
let ListArray = this.state.toDoList;
ListArray = [];
this.setState({toDoList: ListArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSumbit(e) {
    e.preventDefault()

}

render() {
    return (
        <div>
            <form onSubmit={this.onFormSumbit}>
        <div className="container">
        <input type="text" placeholder="What are your plans ?"
        onChange={(e)=>{this.onChangeEvent(e.target.value)}}
        value={this.state.userinput}/>
    </div>

    <div className="container">
    <button onClick={()=> this.addItem(this.state.userinput)}className="add">Add</button>
    </div>
    <div className="container">
    <ul>
        {this.state.toDoList.map((item, index) => (
        <li onClick={this.crossedWord} key={index}><img src={pencil} width="30px" alt="pen"/>
        {item}
        </li>
        ))}
    </ul>
    </div>
    <div className="container">
    <button onClick={()=> this.deleteItem()} className="delete">Delete</button>
    </div>
    </form>
    </div>
    )

}

}
