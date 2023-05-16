import styles from './DemoComp.module.css'
import Card from './Card';
import { useState } from 'react';
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
        setItems((previousItems)=> {
            return [{...childCompExp, id: Math.random(1)}, ...previousItems]
        })
        console.log('prrr', props);
    }

    return (
        // <Card className={styles.ext_container}>
        //     <FormFun></FormFun>
        //     <div className={styles['democss']}>
        //         <span className={styles['nameCss']}>{name}</span>
        //         <span>{props.email}</span>
        //         <button onClick={updateName}>Update name</button>
        //     </div>
        // </Card>

        <div className={styles.ext_container}>
            <FormFun getEnteredDataOnSubmit={getEnteredDataOnSubmitHandler}></FormFun>
            {/* {props.items.map((el) => <ListData key={el.id} title={el.title} amount={el.amount} date={el.date}/>)} */} 
            {items.map(el=> <ListData 
                key={el.id} title={el.title} amount={el.amount} date={el.date}
            />)}
        </div>
    )
}

export default DemoComp;