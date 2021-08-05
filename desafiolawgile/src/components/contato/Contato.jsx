import './index.css'
import React from 'react';
import Avatar from '../../imagens/avatar.jpg'
import face from '../../imagens/facebook.png'
import inst from '../../imagens/instagram.png'
import twt from '../../imagens/twitter.png'
const Contato = () =>{
    return (
        <section>
            <h2>Converse Conosco</h2>
            <article>
                
                <img src={Avatar} alt="" />
                
            </article>
            <p>Para reservas de lotes ou mais informaçoes entre em contato.</p>
            <article>
            <a href="mailto:email@email?"><span>Emai: email@email.com</span></a>
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=2199668800"> <span>whatssap: 21 99668800</span></a>
                <div className='contato'>
                        <a href='https://google.com'> <img src={face} alt="" srcset="" /></a>
                        <a href='https://google.com'>  <img src={inst} alt="" srcset="" /></a>
                        <a href='https://google.com'>  <img src={twt} alt="" srcset="" /></a>
                </div>
            </article>
        </section>
    )
   };
   
export default Contato