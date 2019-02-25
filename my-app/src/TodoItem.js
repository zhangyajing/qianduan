/**
 * Created by aDMIN on 2019/2/25.
 */
import React,{Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }
    handleClick(){

    }
}

export default TodoItem;
