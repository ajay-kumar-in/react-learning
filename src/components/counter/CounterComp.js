import react from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incriment, decriment, increaseByValue } from '../../store/counter';

const CounterComp = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=> {
        return state.counter.count;
    })

    const incrimentHandler = ()=> {
        dispatch(incriment());
    }

    const decrimentHandler = ()=> {
        dispatch(decriment());
    }

    const countByValue = ()=> {
        dispatch(increaseByValue({ value: 5}))
    }


    return (
        <react.Fragment>
            <p>{ count }</p>
            <div>
                <button onClick={incrimentHandler}>Incriment</button>
                <button onClick={decrimentHandler}>Decriment</button>
                <button onClick={countByValue}>Increase By 5</button>
            </div>
        </react.Fragment>
    )
};

export default CounterComp;