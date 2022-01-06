import React from 'react';
import Cdata from './Cdata';
import './card.css';
function Card() {
    return(
        <>
        {
            Cdata.map((value) =>{
                return <>
                <div className='main__card'>
                    <div className='card'>
                        <div className='card__name'>
                            <h2 className='card__text'> {value.name}</h2>
                            </div> 
                        </div> 
                </div>
                </>
            })
        }
        </>
    )   
}

export default Card;
