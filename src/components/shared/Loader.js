import styles from './Loader.module.css';


const Loader = () => {
    return (
        <div className={`${styles.loader_spinner}`}>
            <div className={`spinner-border`} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loader;