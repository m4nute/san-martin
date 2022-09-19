import React, { useEffect } from 'react'; import "bootswatch/dist/lux/bootstrap.min.css"; import styles from '../styles/Home.module.scss'; import Aos from 'aos'; import 'aos/dist/aos.css'; import { useNavigate } from 'react-router-dom'; import ImgText from './ImgText'; import Section from './Section'
function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 0,
            once: true })
    })
    return (
        <div className={styles.homepage}>
            <div className={`${styles.cont1} `} data-aos='fade-up-right'>
                <ImgText alt={'portada'} order={1} img={'portada.webp'} title={'José de San Martín'} p1={'Fue un militar y político argentino. Debido a sus logros, es considerado el "Padre de la Patria". Es la principal figura de la liberación de Argentina, Chile y Perú.'} p2={'Cada 17 de agosto, se conmemora el aniversario de la muerte del General San Martín. Hoy se cumplen 172 años de su fallecimiento.'} p3={'Múltiples instituciones educativas llevan su nombre, así como también calles, avenidas y ciudades como San Martín de los Andes.'} />
            </div>
            <div className={`${styles.cont2}`} data-aos='fade-up-left'>
                <ImgText alt={'billete'} order={0} img={'cincopesos.webp'} title={'Conmemoraciones'} p1={'Es la imagen argentina con más presencia en la numismática: ha aparecido en 13 monedas y 52 billetes.'} p2={'En 2020 han sido retirados de circulación los billetes de $5 con su figura. De todas formas, próximamente reaparecerá en los billetes de $1000.'} />
            </div>
            <h2 data-aos='slide-left'>Batallas más importantes</h2>
            <div className={`${styles.cont3}`} data-aos='fade-up' data-aos-delay="50">
                <div className={styles.section}>
                    <Section alt={'lorenzo'} img={'lorenzo.webp'} p1={'San Lorenzo'} p2={'3 de Febrero de 1813'} />
                </div>
                <div className={styles.section}>
                    <Section alt={'chacabuco'} img={'chacabuco.webp'} p1={'Chacabuco'} p2={'12 de Febrero de 1817'} />
                </div>
                <div className={styles.section}>
                    <Section alt={'maipu'} img={'maipu.webp'} p1={'Maipú'} p2={'5 de Abril de 1818'} />
                </div>
            </div>
            <div className={`${styles.cont4}`}>
                <button className={styles.button} onClick={() => navigate('./trivia', { replace: true })}>
                    Probá tus conocimientos con la trivia!</button>
            </div>
        </div>)
}
export default Home