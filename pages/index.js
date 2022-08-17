import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <>
            <Head>
                <title>Law</title>
                <meta name="description" content="Сайт юридической помощи"/>
                <meta charSet="utf-8"/>
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__back}>
                    <header className={styles.header}>
                        <h1>ЮРИСТЫ</h1>
                        <button className={styles.button}>Записаться на консультацию</button>
                    </header>
                    <nav className={styles.navigation}>
                        <ul className={styles.navigation__list}>
                            <li><a className={styles.navigation__item} href="#">Главная</a></li>
                            <li><a className={styles.navigation__item} href="#">Контакты</a></li>
                            <li><a className={styles.navigation__item} href="#">О нас</a></li>
                        </ul>
                        <div className={styles.contacts}>
                            <a className={styles.contacts__item} href="tel: +74951234567">+7 (495) 123-45-67</a>
                            <a href="mailto: example@mail.ru">example@mail.ru</a>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Home
