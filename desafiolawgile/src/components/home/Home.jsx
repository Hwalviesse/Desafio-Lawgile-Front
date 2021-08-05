
import post from '../../imagens/caixa.jpg'
import post2 from '../../imagens/etiqueta.jpg'
import postit from '../../imagens/post-it.jpg'
import {NavLink} from 'react-router-dom'
import "./index.css"


  const Home = ()=>{
    const produtos = [
      {titulo:'Caixa de Post-it', preco:'24,99', img: post, descricao:'Diversos Post-its para você escrever seus lembretes. Caixa fechada contendo 24 pads com cores varidas.'},
      {titulo:'Post-it', preco:'8,99', img: postit, descricao:'Post-it individual, com cores variadas.'},
      {titulo:'Etiqueta', preco:'5,99', img: post2, descricao:'Marcador de página adesivo Neon'}
      
    ];
    
   
    return (
         <ul className='produtos'>
        {produtos.map(({titulo, preco,descricao,img}) =>(
          <article>
            <h2 key={titulo}>{titulo}</h2>
            <div ><img src={img} alt='post-it'></img></div>
            <p>{descricao}</p>
           
          <span>R$:{preco}</span>
          <div> <NavLink to='/compre'><button className='btn'>Comprar</button></NavLink>
          </div>
          </article>
    ))}
        
        </ul>
    )
}
export default Home
