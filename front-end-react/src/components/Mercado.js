import { useEffect, useState } from "react";
import "../css/style.css";

async function getProdutos() {
  const response = await fetch("http://127.0.0.1:5000/produtos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
}

export default function Mercado() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [info, setInf] = useState({
    total: 0,
    desconto: 0,
    produtos: 0,
    produtos_dif: 0,
  });

  function handleOnclick(produto) {
    if (carrinho.length === 0) {
      let new_produto = { ...produto, estoque: 1 };
      produto.estoque -= 1;
      carrinho.push(new_produto);
    } else {
      let isContem = false;
      carrinho.forEach((item) => {
        if (item.id === produto.id) {
          item.estoque += 1;
          produto.estoque -= 1;
          isContem = true;
        }
      });
      if (!isContem) {
        let new_produto = { ...produto, estoque: 1 };
        produto.estoque -= 1;
        carrinho.push(new_produto);
      }
    }
    setCarrinho([...carrinho]);
    info.total =Number((produto.valor+info.total).toFixed(2))
    info.produtos += 1 
    info.produtos_dif=carrinho.length
    console.log(carrinho)
    if(info.produtos_dif>=3 && info.produtos<5){
      info.desconto = Number((info.total*0.1).toFixed(2))
    }else if(info.produtos_dif>=5){
      info.desconto = Number((info.total*0.2).toFixed(2))
    }else{
      info.desconto=0
    }
    setInf(info);
  }

    function handleRemove(produto) {
      carrinho.forEach((item) => {
        if (item.id === produto.id) {
          item.estoque -= 1;
          info.total =Number((info.total-produto.valor).toFixed(2))
        }
      });
      if( info.total<=0.01){
        info.total=0;
      }
      let newCarrinhoSemProduto = carrinho.filter((item) => item.estoque !== 0);
      console.log(newCarrinhoSemProduto)
      console.log(carrinho)
      setCarrinho(newCarrinhoSemProduto);
      info.produtos-=1;
      console.log(carrinho)
      info.produtos_dif=newCarrinhoSemProduto.length
      if(info.produtos_dif>=3 && info.produtos<5){
        info.desconto = Number((info.total*0.1).toFixed(2))
      }else if(info.produtos_dif>=5){
        info.desconto = Number((info.total*0.2).toFixed(2))
      }else{
        info.desconto=0
      }
      setInf(info);
    }

  useEffect(() => {
    getProdutos().then((data) => {
      setProdutos(data);
    });
  }, []);

  return (
    <>
      <div id="produtos_painel" className="produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="card">
            <div className="cartao">
              <div className="cartao_top">
                <p>{produto.nome}</p>
              </div>
              <div className="cartao_main">
                <img src={produto.img} alt="" />
              </div>
              <div className="cartao_valor">
                <p>R$:{produto.valor}</p>
              </div>
              <div className="cartao_estoque">
                <p>Disponivel: {produto.estoque}</p>
              </div>
              <div className="cartao_botao">
                <button onClick={() => handleOnclick(produto)}>
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carrinho_page">
        <div className="carrinho_top_inf">
          <div className="inf_valor">
            <h3>
              Total R$:{" "}
              <span id="carrinho_inf_valor_template">{info.total}</span>
            </h3>
          </div>
          <div className="inf_desc">
            <h3>
              Desconto R$: <span id="carrinho_inf_desc_template">{info.desconto}</span>
            </h3>
          </div>
          <div className="inf_qtd">
            <h3>
              Produtos Qtd: <span id="carrinho_inf_qtd_template"> {info.produtos}</span>
            </h3>
          </div>
          <div className="inf_dif">
            <h3>
              Produtos Diferentes:
              <span id="carrinho_inf_qtd_dif_template">{info.produtos_dif}</span>
            </h3>
          </div>
        </div>
        <div id="carrinho_painel" className="carrinho">
          {carrinho.map((produto) => (
            <div key={produto.id} className="card">
              <div className="cartao">
                <div className="cartao_top">
                  <p>{produto.nome}</p>
                </div>
                <div className="cartao_main">
                  <img src={produto.img} alt="" />
                </div>
                <div className="cartao_valor">
                  <p>R$:{produto.valor}</p>
                </div>
                <div className="cartao_estoque">
                  <p>Quantidade: {produto.estoque}</p>
                </div>
                <div className="cartao_botao">
                  <button onClick={() => handleRemove(produto)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button id="btn_limpar">Limpar</button>
        <button id="btn_finalizar">Finalizar Conta</button>
      </div>
    </>
  );
}
