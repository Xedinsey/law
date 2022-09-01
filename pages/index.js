import Head from 'next/head'
import styles from '../styles/Home.module.css'
import man from "../public/img/man.png"
import Image from "next/image";

const Home = () => {
    return (
        <>
            <Head>
                <title>Law</title>
                <meta name="description" content="Сайт юридической помощи"/>
                <meta charSet="utf-8"/>
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>ЮРИСТЫ</h1>
                    <button className={styles.button}>Записаться на консультацию</button>
                </header>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">О нас</a></li>
                    </ul>
                    <div className={styles.contacts}>
                        <Image src="/img/call.svg" width={40} height={40} alt="call"/>
                        <a href="tel: +74951234567">+7 (495) 123-45-67</a>
                        <Image src="/img/mail.svg" width={40} height={40} alt="call"/>
                        <a href="mailto: example@mail.ru">example@mail.ru</a>
                    </div>
                </nav>
                <main>
                    <section className={styles.block}>
                        <div>
                            <Image src="/img/херня.svg" width={95} height={44} />
                            <h2>We're Group Of Certified Law Professionals</h2>
                            <p>we have helped countless maritime workers and their families go up against the largest offshore companies and win.</p>
                            <button>Get In Touch</button>
                        </div>
                        <div className={styles.image}>
                            <Image src={man} width={672} height={708} alt="alt"/>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home
