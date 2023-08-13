import React from "react";
import "./App.css"

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(abc){
    if(abc !== ""){
      const newItem = {
        id: Date.now(),
        value: abc,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list: list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input){
    this.setState({ newItem: input });
  }

  render(){
    return(
      <div>
      <h1>To Do List</h1>
      <div className="main_div">
        Add an Item:
        <br />
        <input
          type="text"
          placeholder="Write a task"
          required
          value={ this.state.newItem}
          onChange={ e => this.updateInput(e.target.value)}
        />

        <button
        onClick={() => this.addItem(this.state.newItem)}
        disabled={!this.state.newItem.length}
        >
          Add task
        </button>
        <div>
          <ul>
            {
              this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                  </li>
                  
                );
              })
            }
            <li>This is last dummy task</li><button >Delete</button>
          </ul>
        </div>
      </div>



    </div>

    )
    
  }
}

export default App;