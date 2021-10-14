var nome=prompt("Digite seu nome de robô: ");

var conteudoA = "<img src='imagens/melville.jpg'/> <img src='imagens/valenttia.jpg'/> <h2>Escolha onde será sua jornada...</h2> <p>Após uma catástrofe global, a maioria dos seres humanos foram extintos do planeta Terra, outros partiram para outros planetas.</p> <p>Melville e Valenttia foram as únicas cidades que não foram destroçadas por completo pela catástrofe. " + nome + ", escolha a cidade que você quer desbravar. </p> <button onclick='carregarConteudo(conteudoB)'>Seguir em Melville</button> <button onclick='carregarConteudo(conteudoC)'>Seguir em Valenttia</button>";

var conteudoB = "<img src='imagens/posto.jpg' /> <p>Você acordou quase sem bateria e na cidade de Melville. Você procura por ajuda, mas não há absolutamente ninguém. A única coisa que você vê é um posto de gasolina abandonado. </p> <button onclick='carregarConteudo(conteudoB1)'>Ir até o posto de gasolina</button> <button onclick='carregarConteudo(conteudoB2)'>Continuar procurando outro lugar</button>";

var conteudoB1 = "<img src='imagens/bateria.jpeg' />  <p>Ao chegar no posto de gasolina, você não encontra nada que possa ser útil para recarregar sua bateria. Ela está com 15% restantes, você começa a se desesperar. E decide continuar procurando.</p> <button onclick='carregarConteudo(conteudoB2)'>Continuar jornada</button>";

var conteudoB2 = "<img src='imagens/arnold.png' /> <p>Você decide continuar procurando outro lugar e acaba encontrando um humano sobrevivente. Seu nome é Arnold, ele é o único sobrevivente dessa cidade e te sugere duas coisas para resolver seu problema.</p> <button onclick='carregarConteudo(conteudoB3)'>Ir até uma usina elétrica a 5km de distância e recarregar sua bateria por completo.</button> <button onclick='carregarConteudo(conteudoB4)'>Usar a bateria do carro de Arnold.</button>";

var conteudoB3 = "<img src='imagens/fim1.png' /> <p>Faltando 1,5km da usina, você perde suas forças e se descarrega por completo. Sua jornada acabou por aqui, " + nome + ".</p> <button onclick='recarregar()'>Voltar ao início</button>";

var conteudoB4 = "<img src='imagens/arnold2.png' />  <p>Arnold te auxilia a colocar a bateria, ela parece não funcionar no início, mas acaba te dando um pouco mais de carga. Agora você tem 50% de bateria.</p> <button onclick='carregarConteudo(conteudoB5)'>Ir para a usina elétrica, em busca da bateria completa.</button> <button onclick='carregarConteudo(conteudoB6)'>Tentar assasinar Arnold e ficar com a casa dele.</button>";

var conteudoB5 = "<img src='imagens/combate.png' /> <p>No caminho para a usina elétrica, você encontra outro robô, que tenta roubar sua bateria. Vocês entram em combate e você acaba vitorioso, porém ficando com algumas peças danificadas após a luta. Logo, surge a ideia de substituí-las com as peças do outro robô. </p> <button onclick='carregarConteudo(conteudoB51)'>Continuar</button>";

var conteudoB51 = "<img src='imagens/fim3.jpg' /> <p>Você conseguiu chegar a usina elétrica! Agora pode carregar 100% de sua bateria e continuar sua jornada.</p> <button onclick='carregarConteudo(conteudoB51)'>Fim</button>";

var conteudoB6 = "<img src='imagens/fim2.png' /> <p>Ao tentar assassinar Arnold, seu gato surge para impedi-lo. E então, Arnold se revolta com a sua atitude e te destrói. Fim da jornada, caro(a) " + nome +  ".</p> <button onclick='recarregar()'>Finalizar jornada</button>";

var conteudoC = "<img src='imagens/gatinho.png'/> <p> "+nome+ ", você acorda na cidade de Valenttia, uma das duas cidades sobreviventes. Você percebe que está ficando sem bateria e olha ao redor e vê somente um gatinho.</p> <button onclick='carregarConteudo(conteudoC1)'>Ir até o gatinho</button> <button onclick='carregarConteudo(conteudoC2)'>Ir andando para encontrar uma solução para a bateria.</button>";

var conteudoC1 = "<img src='imagens/casa.jpg'/> <p>Você vai em direção ao gatinho, mas ele se assusta e sai andando. Seguindo ele, você se depara com uma casa conservada. Aparentemente, não tem ninguém em casa. O que quer fazer?</p> <button onclick='carregarConteudo(conteudoC3)'>Bater na porta.</button> <button onclick='carregarConteudo(conteudoC4)'>Entrar sem bater.</button>";

var conteudoC2 = "<img src='imagens/casa.jpg'/> <p>Depois de minutos andando, você encontra uma casa conservada. Aparentemente, não tem ninguém em casa. </p> <button onclick='carregarConteudo(conteudoC3)'>Bater na porta.</button> <button onclick='carregarConteudo(conteudoC4)'>Entrar sem bater.</button>";

var conteudoC3 = "<img src='imagens/porta-aberta.png'/> <p>Você bate e espera alguns segundos... quando vai bater novamente, se depara com uma mulher na porta. Ela se chama Natasha e bem desconfiada pergunta o que você quer. Você explica a sua situação e ela te dá duas opções.</p> <button onclick='carregarConteudo(conteudoC5)'>Ficar na casa dela por um tempo, enquanto ela tenta uma solução para ajudar.</button> <button onclick='carregarConteudo(conteudoC6)'>Procurar outra ajuda pela cidade.</button>";

var conteudoC4 = "<img src='imagens/fim4.png'/> <p>Você tenta entrar sorrateiramente por uma janela, mas acaba sendo atingido(a) por uma mulher com um taco de baseball . É o seu fim, você morreu, " +nome+ ".</p> <button onclick='recarregar()'>Voltar ao início</button>";

var conteudoC5 = "<img src='imagens/pedecabra.png'/> <p>Natasha te leva para o porão da sua casa e diz que vai procurar algumas ferramentas e equipamentos para te ajudar. Por algum motivo, você desconfia da fala dela e fica reflexivo(a). De repente, você vê Natasha vindo em sua direção com um pé de cabra, e você acaba de ter a certeza que ela tem segundas intenções. O que você faz?</p> <button onclick='carregarConteudo(conteudoC7)'>Tentar soltar o pé de cabra de sua mão.</button> <button onclick='carregarConteudo(conteudoC8)'>Correr.</button>";

var conteudoC6 = "<img src='imagens/fim5.png'/> <p>Você fica por muito tempo tentando encontrar ajuda e sua bateria acaba.. é o seu fim, " +nome+ ".</p> <button onclick='recarregar()'>Voltar ao início.</button>";

var conteudoC7 = "<img src='imagens/fim6.png'/> <p>Você vai em direção a Natasha e com muita habilidade consegue tirar o pé de cabra de sua mão. Consegue prender ela e procurar algum equipamento que pode te salvar.</p> <p>Depois de alguns minutos você acaba encontrando uma bateria que carrega a luz solar, consegue se salvar e abandona Natasha presa. Você conseguiu!</p> <button onclick='recarregar()'>Finalizar jornada</button>";

var conteudoC8 = "<img src='imagens/fim7.png'/> <p>Você corre desesperadamente até a porta que entraram, porém ela está fechada! Natasha não hesita e te acerta com o pé de cabra. É o seu fim... Sua jornada acabou, "+nome+".</p> <button onclick='recarregar()'>Voltar ao início.</button>";


function carregarConteudo(conteudo){
    var elemento = document.getElementById("conteudo");
    elemento.innerHTML = conteudo;
}

function estilo(){
    text.style.fontFamily = "Arial";
    text.style.color = "green";
    text.fontSize = "30px";
}

function recarregar(){
    window.scrollTo(0, 0);
    location.reload();
}

carregarConteudo(conteudoA);
estilo();