import React, { useState } from 'react'

const Todos = () => {

    const [value, setValue] = useState([]);
    const [icon, setIcon] = useState();

    // const [message, setMessage] = useState('No tasks, add a task');

    let addItem = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            const newValue = e.target.value;
            const isOnTheList = value.includes(newValue);

            if (isOnTheList) {
                //message
            } else {
                newValue !== "" && setValue([...value, newValue]);
            }
        }

        // this.addForm.reset();
        // ref={input => this.addForm = input}
    }

    let removeItem = (item) => {
        const newValues = value.filter(value => {
            return value !== item;
        });
        setValue(newValues);
    }

    let message;
    if (value.length === 0) {
        message = "No tasks, add a task";
    } else {
        message = "What needs to be done?";
    }

    let addIcon = () => {
        setIcon("x");
    }

    let removeIcon = () => {
        setIcon('');
    }


    let loop = value.map(item => {
        return (
            <tr key={item} onMouseOver={addIcon} onMouseOut={removeIcon}>
                <td >{item}</td>
                <td onClick={(e) => removeItem(item)} className="text-center text-black-50" style={{ cursor: "pointer" }}>{icon}</td>
            </tr>
        )
    });

    return (
        <div className="container-fluid">
            <h1 className="display-1 text-center text-black-50">todos</h1>
            <table className="table shadow p-3 mb-5 bg-light rounded">
                <tbody>
                    <tr>
                        <td>
                            <input className="container border-0 shadow-none bg-light" type="text" placeholder={message} onKeyUp={addItem} /></td>
                        <td></td>
                    </tr>
                    {loop}
                    <tr>
                        <td>item left</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Todos

