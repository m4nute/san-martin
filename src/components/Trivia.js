import React, { useEffect,useState,useRef } from 'react'
import styles from '../styles/Trivia.module.scss'
import Pregunta from './Pregunta';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';

function Trivia() {
  const navigate = useNavigate()
  const preguntas2 = [{pregunta : 'Cuantos años se cumplen de la muerte de San Martín en 2022?', respuestas : ['181','167','172','177'], correcta : '172'},{pregunta : 'Cuantos años tenía San Martín cuando falleció?', respuestas : ['72','70','64','83'], correcta : '72'},{pregunta : 'En dónde falleció?', respuestas : ['Buenos Aires','Entre Ríos','Francia','Corrientes'], correcta : 'Francia'},{pregunta : 'En qué año nació?', respuestas : ['1771','1778','1769','1776'], correcta : '1778'},{pregunta : 'En dónde comenzó sus estudios?', respuestas : ['Málaga','Murcia','Buenos Aires','Madrid'], correcta : 'Madrid'},{pregunta : 'A qué países liberó?', respuestas : ['Argentina, Chile y Uruguay','Argentina, Uruguay y Brasil','Argentina, Uruguay y Perú','Argentina, Chile y Perú'], correcta : 'Argentina, Chile y Perú'},{pregunta : 'En qué año falleció?', respuestas : ['1850','1851','1859','1855'], correcta : '1850'},{pregunta : 'Qué unidad militar creó y encabezó?', respuestas : ['Regimiento de Granaderos a Caballo','Regimiento de Granaderos','Regimiento Argentino de Granaderos','Regimiento de Infantería de Monte 9'], correcta : 'Regimiento de Granaderos a Caballo'},{pregunta : 'En qué año se casó con Remedios de Escalada?', respuestas : ['1807','1811','1812','1810'], correcta : '1812'},{pregunta : 'Cuál de estas fue la mayor derrota militar del general?', respuestas : ['Batalla de Maipú (1818)','Batalla de San Lorenzo (1813)','Batalla de Chacabuco (1817)','Batalla de Cancha Rayada (1818)'], correcta : 'Batalla de Cancha Rayada (1818)'},{pregunta : 'Cuántos hermanos tenía San Martín?', respuestas : ['Cuatro','Dos','Ninguno','Cinco'], correcta : 'Cuatro'},{pregunta : 'Quién se sacrificó para salvar a San Martín en la batalla de San Lorenzo?', respuestas : ['Ramón Freire','Ángel Benítez','Juan Bautista Cabral','Pedro de Cevallos'], correcta : 'Juan Bautista Cabral'},{pregunta : 'En dónde nació?', respuestas : ['Trinidad','Yapeyú','Montevideo','Paraná'], correcta : 'Yapeyú'}]

  const pageRef = useRef()
  const [contador, setContador] = useState(0)
  const [puntos, setPuntos] = useState(0)
  const [preguntas, setPreguntas] = useState(preguntas2.sort(() => Math.random() - 0.5));


  useEffect(() => {
    Aos.init({duration: 1000})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function siguiente(resp) {
    for(let i = 1; i < 33; i++) {
      setTimeout(() => pageRef.current.style.opacity = 1 - 0.03125 * i, 8 * i)
    }
    setTimeout(() => setContador(contador + 1),256)
    for(let i = 1; i < 33; i++) {
      setTimeout(() => pageRef.current.style.opacity = 0 + 0.03125 * i, 256 + 8 * i)
    }
    resp === 1 && setPuntos(puntos + 1)
  }
  const restart = () => {
    setPreguntas(preguntas2.sort(() => Math.random() - 0.5))
    setContador(0)
    setPuntos(0) 
  }
  return (
    <div className={`${styles.homepage}`} ref={pageRef}>
      {contador < preguntas.length && <h1 data-aos='fade-up'>Pregunta {contador + 1}</h1>} 
      {contador < preguntas.length ? <Pregunta pregunta={preguntas[contador].pregunta} siguiente={siguiente} respuestas={preguntas[contador].respuestas} correcta={preguntas[contador].correcta} /> : 
    <div className={styles.resultado}>
      <h1 className={`${styles.capital} ${styles.mrg}`}>Puntaje: {puntos}/{preguntas2.length}</h1>
      <h2 className={styles.capital}>El {Math.round((puntos / preguntas2.length) * 100)}% de tus respuestas fueron correctas.</h2>
      {puntos < 6 ? <h3 className={styles.capital}>Bastante Flojo...</h3> : puntos < 10 ? <h3 className={styles.capital}>Bastante bien...</h3> : <h3 className={styles.capital}>Excelente, sabes bastante!</h3>}
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => navigate('/', { replace: true })}>Volver al Inicio</button>
          <button className={styles.button} onClick={() => restart()}>Volver a Intentar</button>
        </div>
      </div>
      }
    </div>
  )
}

export default Trivia