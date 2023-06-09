import styles from './DemoComp.module.css'
// import Card from './Card';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom'
import FormFun from './FormFun';
import ListData from './ListData'

const itemsDummy = [
    { id: '1', title: 'Ajay', amount: 'ajay@email.com', date: '1-1- 2020' },
    { id: '2', title: 'Ajay', amount: 'ajay@email.com', date: '1-1-2020' },
    { id: '3', title: 'Ajay', amount: 'ajay@email.com', date: '1-1-2020' },
];

function DemoComp(props) {
    const [items, setItems] = useState(itemsDummy);

    const getEnteredDataOnSubmitHandler = (childCompExp) => {
        setItems((previousItems) => {
            return [{ ...childCompExp, id: Math.random(1) }, ...previousItems]
        })
        console.log('prrr', props);
    }

    return (
        // <Card className={styles.ext_container}>
        //         <FormFun getEnteredDataOnSubmit={getEnteredDataOnSubmitHandler}></FormFun>
        //         {items.map(el => <ListData
        //             key={el.id} title={el.title} amount={el.amount} date={el.date}
        //         />)}
        // </Card>

        <React.Fragment>
            {/* {ReactDOM.createPortal(
                <div className={styles.ext_container}>
                    <FormFun getEnteredDataOnSubmit={getEnteredDataOnSubmitHandler}></FormFun>
                    {items.map(el => <ListData
                        key={el.id} title={el.title} amount={el.amount} date={el.date}
                    />)}
                </div>,
                document.getElementById('parallel-root')
            )} */}

            <div className={styles.ext_container}>
                <FormFun getEnteredDataOnSubmit={getEnteredDataOnSubmitHandler}></FormFun>
                {items.map(el => <ListData
                    key={el.id} title={el.title} amount={el.amount} date={el.date}
                />)}
            </div>
        </React.Fragment>
    )
}

export default DemoComp;