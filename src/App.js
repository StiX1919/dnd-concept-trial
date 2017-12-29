import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import Task from './Task'
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [{cardHeader: 'hello', tasks: ['give', 'me', 'money']}, {cardHeader: 'numbah 2', tasks: ['shit', 'sticks']}, {cardHeader: 'Bueno', tasks: ['tardes']}]
    }
  }

  renderList(index, header, tasks) {
    console.log(header)
    var piece = null;
    if(this.props.cardPosition === index) {
      piece = <Task />
      return <Card index={index} header={header} tasks={tasks}> {piece} </Card>
    }
    else return <Card index={index} header={header} tasks={tasks}>  {piece}  </Card>
    
    
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '900px',
        display: 'flex',
        background: 'blue'
      }}>
      {this.state.cards.length > 0 && 
        this.state.cards.map((card, index) => {return this.renderList(index, card.cardHeader, card.tasks)})
      }
        
      </div> 
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
