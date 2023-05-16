import styles from './ListData.module.css'

function ListData(props) {
    return (
        <div>
            <span className={styles['itemCss']}>{props.title}</span>
            <span className={styles['itemCss']}>{props.amount}</span>
            <span className={styles['itemCss']}>{props.date}</span>
        </div>
    )
}

export default ListData;