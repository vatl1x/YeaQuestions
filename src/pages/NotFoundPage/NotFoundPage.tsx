import notFound from '../../assets/icons/not-found.svg'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className="container">
        <div className={styles.layout}>
            <img src={notFound} alt="" width={400}/>
            <strong className={styles.label}>Страница не найдена</strong>
        </div>
    </div>
  )
}

export default NotFoundPage