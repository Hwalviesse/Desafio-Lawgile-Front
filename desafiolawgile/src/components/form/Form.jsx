import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client';
import  './style.css'


const GET_PEDIDOS = gql`
    query{
        pedidos{
            id
            email
            produtos
        }
    }
`;

const ADD_PEDIDO = gql`
    mutation createPedido($produto: String, $email: String) {
    createPedido(data: {produto: $produto, email: $email}){
        _id
        email
        produto

    }
}`;


const valorInicial = { email: " ", produto: "" }
const Form = () => {

    const [criarPedido] = useMutation(ADD_PEDIDO, {
        variables: {
            email: String,
            produto: String
        }
    })


    const [inputs, setInputs] = useState(valorInicial)


    const handleInputChange = (input) => {

        setInputs({ ...inputs, [input.target.name]: input.target.value })
    }

    return (
        <div>
        <div className='formulario'>
        <form onSubmit={(e) => {

            e.preventDefault();
            criarPedido();


            setInputs(valorInicial)

        }}>

            <label>Produto:</label>
            <input
                type="text"
                name="produto"
                onChange={handleInputChange}
                value={inputs.produto || " "} />
            <label>Email :</label><input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email || " "} />
            <button type='submit'>Comprar</button>
            
        </form>
        <section>
                <h1>Compre Um Post-it e fique mais feliz</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
        </div>
        </div>
    )
}

export default Form