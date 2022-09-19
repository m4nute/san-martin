import React from 'react'
import styles from '../styles/ImgText.module.scss'

function ImgText(props) {
    return (
        <React.Fragment>
            {props.order === 1 ?
                <React.Fragment>
                    <div className={styles.text1}>
                        <h1>{props.title}</h1>
                        <p>{props.p1}</p>
                        <p>{props.p2}</p>
                        <p>{props.p3}</p>
                        <p>{props.p4}</p>
                    </div>
                    <div className={styles.pic1}>
                        <img src={require(`../images/${props.img}`)} alt={`${props.alt}`} />
                    </div>
                </React.Fragment>
            :
                 <React.Fragment>
                    <div className={styles.pic1}>
                        <img src={require(`../images/${props.img}`)} alt={`${props.alt}`} />
                    </div>
                    <div className={`${styles.text1} capital`}>
                        <h1 className='capital'>{props.title}</h1>
                        <p>{props.p1}</p>
                        <p>{props.p2}</p>
                        <p>{props.p3}</p>
                        <p>{props.p4}</p>
                    </div>
                </React.Fragment>}
        </React.Fragment>
    )
}

export default ImgText