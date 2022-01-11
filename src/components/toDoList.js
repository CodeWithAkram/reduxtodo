import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItems, deleteItem, deleteAll } from '../actions/index';

const ToDoList = () => {

    const [inputData, setInputData] = useState('');
    const myListData = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();

    return (
        <>
            <div className="main_div">
                <div className="inner_div">
                    <h1>Please add todo task 👍 </h1>
                    <div className="input_div">
                        <input type="text" placeholder="👍 Add Items" className='input_text'
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)} />
                        <i className='fa fa-plus add' onClick={() => dispatch(addItems(inputData), setInputData(''))}></i>
                    </div>

                    {
                        myListData.map((elem) => {
                            return (
                                <div className="add_items" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <i className='fas fa-trash delete' onClick={() => dispatch(deleteItem(elem.id))}></i>
                                </div>
                            )
                        })
                    }

                </div>
                <button className='Items_btn' data-sm-link-text="Remove all" onClick={() => dispatch(deleteAll())}>Delete All</button>
            </div>
        </>
    )
}

export default ToDoList;
