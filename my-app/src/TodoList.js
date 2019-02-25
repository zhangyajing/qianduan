/**
 * Created by aDMIN on 2019/2/25.
 */
import React,{Component,Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{
   constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            list : ['english','html','javascript']
        }
    }

    render(){
        return (
            <Fragment>
            {/*这是JSX的组件*/}
                <div>
                    <label htmlFor="insetArea">请输入：</label>
                    <input
                        id='insetArea'
                        value={this.state.inputValue}
                        onChange = {this.handleInputChange.bind(this)}
                        className = 'input'
                    />
                    <button
                        onClick={this.handleButtonClick.bind(this)}
                    >提交</button>
                 </div>
                 <ul>
                     {
                        this.state.list.map((item,index) => {
                        return (
                            <div>
                                <TodoItem
                                    content = {item}
                                    index={index}
                                    deleteItem={this.handleItemDelete}
                                />
                            </div>
                            )
                       })
                     }
                 </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }
    handleButtonClick(){
        this.setState({
            list : [...this.state.list , this.state.inputValue]
        });
        this.state.inputValue = '';
    }
    hanleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list : list
        })
    }
}

export default TodoList;