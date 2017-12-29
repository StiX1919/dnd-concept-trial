import React, { Component } from 'react';
import Task from './Task'
import {DropTarget} from 'react-dnd'
import {moveCard} from './Game'


const cardTarget = {
    drop: function(props, monitor) {
        moveCard(props.index)
    }
}
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class Card extends Component {
  
  render() {
      console.log(this.props)
      const{connectDropTarget} = this.props
    return connectDropTarget(
      <div style={{
        width: '300px',
        height: '900px',
      }}>
      <h1>{this.props.header}</h1>
      {this.props.tasks.length > 0 && 
        this.props.tasks.map((task, index) => <Task index={index} task={task}/>)
        }
        
      </div>
    );
  }
}

export default DropTarget('task', cardTarget, collect)(Card);