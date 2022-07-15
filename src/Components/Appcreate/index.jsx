import React from 'react';
import styles from '../Appcreate/Appcreate.css'

function Appcreate(props){
    return(
        <section>
            <article>
                <img src={props.image} alt="no image :(" />
            </article>
            <article className='text_article'>
                <h2>{props.infoH2}</h2>
                <h3>{props.infoH3}</h3>
                <h4>{props.infoH4}</h4>
            </article>
        </section>
    )
}
export default Appcreate