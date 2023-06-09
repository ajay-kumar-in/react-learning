import styles from './FormFun.module.css';
import { useState, useRef } from 'react';

function FormFun(props) {
    // const [newtitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    let titleChangeRef = useRef()

    // const [userInput, setUserInput] = useState({
    //     newtitle: '',
    //     newAmount: '',
    //     newDate: ''
    // })

    // const titleChangeHandler = (event) => {
    //     setNewTitle(event.target.value);
    //     // console.log('aaaaaaaaaaaaaaaa', event.target.value);

    //     // setUserInput((prevState)=> {
    //     //     return {...prevState, newTitle: event.target.value}
    //     // })
    //     // console.log('aaaaaaaaaaaaaaaa', event.target.value, 'bbbbbbbbbb', userInput);
    // }

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
        // console.log('aaaaaaaaaaaaaaaa', event.target.value);

        // setUserInput((prevState)=> {
        //     return {...prevState, newAmount: event.target.value}
        // })
        // console.log('aaaaaaaaaaaaaaaa', event.target.value, 'bbbbbbbbbb', userInput);
    }

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
        // console.log('aaaaaaaaaaaaaaaa', event.target.value);

        // setUserInput((prevState)=> {
        //     return {...prevState, newDate: event.target.value}
        // })
        // console.log('aaaaaaaaaaaaaaaa', event.target.value, 'bbbbbbbbbb', userInput);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('titleChangeRef.current.value', titleChangeRef.current.value);
        const dataObj = {
            // title: newtitle,
            title: titleChangeRef.current.value,
            amount: newAmount,
            date: new Date(newDate).toISOString()
        }

        // setNewTitle('');
        titleChangeRef.current.value = '';
        setNewAmount('');
        setNewDate('');

        props.getEnteredDataOnSubmit(dataObj);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={`${styles['new-expense__controls']}`}>
                {/* <div className={`${styles['new-expense__control']}`}>
                    <label>Title</label>
                    <input type='text' value={newtitle} onChange={titleChangeHandler} />
                </div> */}

                <div className={`${styles['new-expense__control']}`}>
                    <label>Title</label>
                    <input type='text' ref={titleChangeRef} />
                </div>
                <div className={styles['new-expense__control']}>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={newAmount} onChange={amountChangeHandler} />
                </div>
                <div className={styles['new-expense__control']}>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={newDate} onChange={dateChangeHandler} required />
                </div>
            </div>
            <div className={`${styles['new-expense__actions']}`}>
                <button className='bg-success' type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default FormFun;