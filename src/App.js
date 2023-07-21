import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  constructor(){
    super()
    this.state ={
      colors: ['Orange','Red','DarkRed','Lime','Gold', 'purple','Turquoise','Tomato','Brown','SpringGreen','DarkOrange','Teal','green', 'violet','blue', 'gray','aqua','yellow'],
    }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(index){
    const {colors} = this.state 
    const newColors = [...colors]
    const randomIndex = Math.floor(Math.random()*colors.length)
    // console.log(newColors);
    newColors[index]=colors[randomIndex]
    this.setState({colors:newColors})
  }
  render() {

    return (
      <div className='container d-flex mt-5'style={{flexWrap:'wrap'}}>
        {this.state.colors.map((color,index)=>(
          <div key={index} onClick={()=>this.changeColor(index)}
          className='box' 
          style={{width:'200px',height:'200px',cursor:'pointer',background:color}}>
  
          </div>
        ))}
      </div>
    );
  }
}
export default App;
