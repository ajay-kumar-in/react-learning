import './Card.css'

function Card(props) {
    let class1 = 'card_comp ' + props.className;
    console.log('props.className', props.className);
    return (
        <div className={class1}>{props.children}</div>
    )
}

export default Card;