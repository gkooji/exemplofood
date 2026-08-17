import {use, useState} from 'react'

// array de objetos contendo o estado inicial do cardapio

const cardapio=[
    {id:1,nome:"Combo-Mcchiken-medio",preco:25.00,disponivel:true,quantidade:0},
    { id: 1, nome: "Combo-Legal", preco: 35.00, disponivel: true, quantidade: 0 },
    { id: 1, nome: "Combo-Maneiro", preco: 45.00, disponivel: true, quantidade: 0 },
    { id: 1, nome: "Combo-Sinistro", preco: 65.00, disponivel: true, quantidade: 0 },

];

const Pedido = () => {

    //hook useState-Manipula o estado da variavel
    //estados para gerenciar a lista de itens
    const[items,setItems]=useState(cardapio);
    const[status,setStatus]=useState("");
    const[enviar,setEnviar]=useState(false);

    //valor fixo adicionado ao total quando tiver itens no carrinho
    const taxaEntrega=5.00;


    //função que altera a quantidade de um pedido
    const alterarQuantidade =(id,valor)=>{
        setItems(prev=>
            prev.map(item=>
                item.id===id ? {...item,quantidade: Math.max(0,item.quantidade + valor)}: item

                
            )
        )

    }











  return (
    <>
      
    </>
  )
}

export default Pedido
