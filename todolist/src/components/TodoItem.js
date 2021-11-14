import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        console.log(id);
        return (
            <div className="todo-item" onClick={()=> onToggle(id)}>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation();
                    onRemove(id)
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>

        )
    }
}

export default TodoItem;