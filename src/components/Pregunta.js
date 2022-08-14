import React, {useEffect} from 'react'
import styles from '../styles/Pregunta.module.scss'
import Swal from 'sweetalert2';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Pregunta(props) {
    const comprobar = (e) => {
        e.target.innerText !== props.correcta ? 
            Swal.fire({
            icon: 'error',
            title: 'Incorrecto...',
            text: `La respuesta correcta era ${props.correcta}`,
            showConfirmButton: true,
            confirmButtonText: 'Siguiente',
          }).then((result) => {
            (result.isConfirmed || result.isDenied || result.isDismissed)  && props.siguiente(0)
          }) : 
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Respuesta Correcta!',
            showConfirmButton: true,
            confirmButtonText: 'Siguiente',
          }).then((result) => {
            (result.isConfirmed || result.isDenied || result.isDismissed)  && props.siguiente(1)})
    }
    useEffect(() => {
        Aos.init({duration: 1000})
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
  return (
    <React.Fragment>
        <h2 data-aos='fade-up' className='capital'>{props.pregunta}</h2>
        <div className={styles.respuestas}>
            {props.respuestas.map((respuesta, index) => {
                return <button data-aos='fade-up-right' data-aos-delay={`${100 * index}`} key={index} onClick={(e) => {comprobar(e)}} className={styles.resp}>{respuesta}</button>})}
        </div>
    </React.Fragment>
  )
}

export default Pregunta