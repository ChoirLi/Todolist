import React,{Component,Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class Todolist extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue: '',
            list:[]
        }
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange} 
                    >
                    
                    </input>
                    <button type="primary" onClick={this.handleBtnClick}>提交</button>
                    
                </div>
                <ul>
                   {this.getTodoItem()}
                </ul>
                
            </Fragment>
     

        )
    }
    
    getTodoItem(){
       return this.state.list.map((item,index)=>{
            return ( 
                <TodoItem key={index}
                          content={item} 
                          index={index}
                          deleteItem={this.handleItemDelete}
                ></TodoItem>
                                        
            )
        })
    }



    handleInputChange(e){
        const value=e.target.value;
        this.setState((prevState)=>({
            inputValue:value
        }));
    }

    handleBtnClick(e){
       
        this.setState((prevState)=>(
            {list:[...prevState.list,prevState.inputValue],
            inputValue:''
            }));
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list };
        });
    }

}

export default Todolist;