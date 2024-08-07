const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voce ja imaginou como seria o mundo se a inteligencia artificial pudesse sentir emoçoes? ",
        alternativas: [
            {
                texto: "interabilidade e relacionamento humano,ética e responsabilidade, imacto pscicológico,  autonomia e decisão.",
                afirmacao: " em ultima analise se a inteligencia tivesse emoçoes, isso abriria novas oportunidaes e desafios éticos e socias."
            },
            {
                texto: "Texto 2",
                afirmacao: "Afirmação 2"
            }
        ]
    },
    {
        enunciado: "quais são os principais  desafios éticos que surgem com o avanço da inteligencia artificial? ",
        alternativas: [
            {
                texto: "os principais desafios éticos que surgem com o avanço da inteligencia artificial incluem: privacidade e segurança dos dados, trasparencia e explicabilidade, responsabilidade e prestaçao.",
                afirmacao: "esses desafios éticos destacam a necessidade urgente de desenvolver diretrizes éticas robustas, regulamentaçoes adquadas e um dialogo ético."
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
        enunciado: "como a inteligencia artificial pode ser usada para melhorar a precisão e a velocidade dos diagnosticos medicos?",
        alternativas: [
            {
                texto: "analise de imagem, processamento de dados, apoio a decisão clínica, triagem e classificação.",
                afirmacao: "tem o potencial de trasformar a prática médica, melhorando tanto a precisão quanto a eficiêcia dos diagnósticos médicos,além de facilitar a entrega de cuidados de saúde." 
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
   
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
