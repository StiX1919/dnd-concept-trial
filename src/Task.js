import React, { Component } from 'react';
import {DragSource} from 'react-dnd'

const taskSource = {
    beginDrag: function (props, monitor) {
        return {cardId: 1}
    }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Task extends Component {
  
  render() {
      const{connectDragSource, isDragging} = this.props
    return connectDragSource(
      <div style={{
        width: '300px',
        height: '100px',
      }}>
      {this.props.task}
      </div>
    );
  }
}

export default DragSource('task', taskSource, collect)(Task);