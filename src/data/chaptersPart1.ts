export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  text: string[];
  tip?: string;
  error?: string;
  checklist?: string[];
}

export const chaptersPart1: Chapter[] = [
  {
    id: 1,
    title: "POSICIONAMENTO (STANCE)",
    subtitle: "A base de tudo. Quem não sabe se posicionar já perde antes de bater.",
    text: [
      "A maioria das pessoas chega na sinuca do bar, pega o taco e fica em pé batendo como se fosse uma vassoura. O resultado é bola pra todo lado, todo mundo rindo, e você pagando rodada. Isso acaba hoje.",
      "A posição correta se chama Stance. A regra é simples: perna direita reta, perna esquerda dobrada para frente. A distância entre as duas pernas segue a largura dos seus ombros — nem muito aberto, nem muito fechado. Isso te dá equilíbrio sem engessamento.",
      "O corpo precisa ficar inclinado para frente, com o queixo próximo ao taco. Quanto mais baixo você deitar na linha do taco, maior a sua precisão. Jogador de pé é jogador que erra.",
      "Para canhoto: inverte tudo. Perna esquerda reta, perna direita dobrada."
    ],
    tip: "Antes de deitar na mesa, aponte o taco para a bola alvo ainda em pé. Só então desça o corpo mantendo o alinhamento. Isso garante que você já tá na linha certa.",
    error: "Ficar completamente em pé ou agachado demais. Os dois tiram equilíbrio e precisão. A posição semi-inclinada é o ponto certo.",
    checklist: [
      "Perna direita reta (canhoto: esquerda)",
      "Perna esquerda dobrada para frente",
      "Distância entre pernas = largura dos ombros",
      "Corpo inclinado, queixo próximo ao taco",
      "Peso distribuído nas duas pernas"
    ]
  },
  {
    id: 2,
    title: "A PONTE (BRIDGE)",
    subtitle: "Sua mão de apoio é o trilho do taco. Ponte fraca, taco torto, bola errada.",
    text: [
      "A ponte é a mão que fica apoiada na mesa e guia o taco durante a tacada. É o trilho por onde o taco desliza. Se a ponte for fraca ou mal formada, o taco vai desviar milímetros — suficiente pra errar uma bola fácil.",
      "A ponte correta: espalhe bem os dedos na mesa, levante levemente a palma deixando só as pontas dos dedos tocando no pano. Una o polegar ao indicador formando um canal em V. O taco desliza dentro desse V. Dê um leve giro para a direita se for destro.",
      "Distância mínima de 25cm entre a ponte e a ponta do taco. Menos que isso, você perde controle.",
      "Existem três tipos: baixa (bola normal), média (bola um pouco alta), alta (bola colada na tabela). Comece sempre pela baixa."
    ],
    tip: "Para testar se sua ponte está firme — tenta empurrar ela com a outra mão depois de posicionada. Se balançar, está errado. Ponte boa é estátua, não se move durante a tacada.",
    error: "Deixar a palma completamente plana na mesa. Isso tira o canal e o taco fica solto, desviando pra qualquer lado na hora do impacto.",
    checklist: [
      "Dedos bem espalhados, pontas tocando no pano",
      "Palma levemente levantada",
      "Canal V formado entre polegar e indicador",
      "Mínimo 25cm da ponte até a ponta do taco",
      "Ponte firme, não se move durante a tacada"
    ]
  },
  {
    id: 3,
    title: "PEITO E QUEIXO (CHEST & CHIN)",
    subtitle: "Dois pontos do corpo que a maioria ignora e que fazem toda a diferença na precisão.",
    text: [
      "Além da posição das pernas e da ponte, dois pontos do corpo são fundamentais e quase ninguém fala sobre eles: o peito e o queixo.",
      "O peito serve como guia do taco. Quando você deita na mesa, o taco deve roçar levemente no peito durante o movimento de ida e volta. Isso funciona como um trilho adicional, garantindo que o taco não desvie para os lados. Quanto mais o taco roçar no peito em linha reta, mais certeira é a tacada.",
      "O queixo é o ponto de mira. O taco deve passar embaixo do queixo, mais precisamente embaixo do seu olho dominante. Isso alinha visualmente o taco com a bola. Se o taco estiver passando do lado do queixo, você está mirando torto sem perceber."
    ],
    tip: "Teste em casa antes de ir pro bar. Deite sobre uma mesa qualquer com o taco e veja se ele passa reto embaixo do seu queixo. Se estiver passando do lado, ajuste a posição do corpo até centralizar.",
    error: "Segurar a cabeça elevada, longe do taco. Quanto mais longe o queixo do taco, menor a precisão. Jogadores profissionais ficam com o queixo quase encostando no taco.",
    checklist: [
      "Taco roçando levemente no peito",
      "Queixo próximo e alinhado com o taco",
      "Olho dominante diretamente acima do taco",
      "Cabeça baixa, próxima à linha de visão"
    ]
  },
  {
    id: 4,
    title: "EMPUNHADURA (GRIP)",
    subtitle: "Segurar o taco parece óbvio. Não é. A maioria aperta demais e perde tudo.",
    text: [
      "A empunhadura é a mão que segura o taco na parte traseira. O erro mais comum de iniciante é apertar o taco com força, achando que isso dá mais controle. Na prática, apertar demais trava o pulso, elimina a sensibilidade e faz o taco desviar.",
      "A regra é segurar como se você estivesse segurando na mão de uma criança: força suficiente pra não cair, leve o suficiente pra não machucar. Envolva o taco com o polegar e o indicador formando um anel. Os outros dedos ficam em contato suave dando suporte.",
      "Posição inicial: dedo indicador aponta para o chão. Se estiver apontando para o lado, o taco vai desviar.",
      "Na hora do backswing, a mão abre levemente mantendo os 5 dedos em contato com o taco. Na hora de finalizar a tacada, a mão fecha suavemente. Nunca aperta forte no impacto."
    ],
    tip: "Quanto mais flexibilidade você tiver nos dedos, mais potência terá na tacada. Antes de jogar, abra e feche a mão várias vezes pra soltar os dedos. Taco solto na mão = mais velocidade e sensibilidade.",
    error: "Apertar o taco com força no momento do impacto. Isso é o caminho certo pra bola ir pro lugar errado. A mão deve estar relaxada até o final da tacada.",
    checklist: [
      "Polegar e indicador formam um anel em volta do taco",
      "Outros dedos em contato suave",
      "Dedo indicador aponta para o chão",
      "Mão relaxada — nunca apertar",
      "Abre no backswing, fecha suave na finalização"
    ]
  },
  {
    id: 5,
    title: "A TACADA PERFEITA (TIMING)",
    subtitle: "Força não encaçapa bola. Timing e aceleração gradual encaçapam.",
    text: [
      "Todo iniciante bate forte achando que vai impressionar. Resultado: bola branca voando pra fora, duas bolas caindo juntas, adversário te agradecendo pelos pontos. Força sem técnica é o caminho mais rápido pra perder dinheiro.",
      "O segredo da tacada perfeita é a aceleração gradual. Você começa o movimento devagar e vai aumentando a velocidade até o impacto — igual uma bola de neve descendo o morro que vai ganhando velocidade gradualmente.",
      "O processo: faça 2 ou 3 movimentos de aquecimento (backswings), sentindo o alinhamento. No último backswing, faça uma pequena pausa. Então acelere o taco gradualmente até bater na bola. Depois do impacto, continue o movimento por mais 15-20cm (follow through). Nunca para o taco no impacto."
    ],
    tip: "O follow through é o segredo mais ignorado. Depois de bater, o taco tem que continuar avançando. Quem para o taco no impacto perde precisão e controle. Pensa que a bola está 20cm além de onde ela realmente está.",
    error: "Bater rápido demais sem aquecimento e parar o taco no impacto. Os dois erros juntos são responsáveis por 80% das bolas erradas dos iniciantes.",
    checklist: [
      "2-3 backswings de aquecimento sentindo o alinhamento",
      "Pausa traseira antes da tacada final",
      "Aceleração gradual — começa devagar e vai ganhando velocidade",
      "Impacto limpo no centro da bola branca",
      "Follow through de 15-20cm após o impacto"
    ]
  },
  {
    id: 6,
    title: "CABEÇA PARADA (HEAD STILL)",
    subtitle: "Um centímetro de movimento da cabeça na hora errada e a bola vai pro lugar errado.",
    text: [
      "Esse é o capítulo mais ignorado e mais importante ao mesmo tempo. Pode ser que sua posição, ponte, grip e timing estejam perfeitos — e você ainda assim erra porque levantou a cabeça antes do impacto.",
      "A regra é absoluta: cabeça parada durante e após a tacada. Não levanta até a bola alvo ter entrado (ou errado) a caçapa. Qualquer movimento da cabeça no momento do impacto transfere tensão pro taco e desvia milímetros suficientes pra errar.",
      "O instinto natural é querer olhar a bola entrando — e é exatamente esse instinto que faz você errar. Confie na tacada que você executou. A bola vai entrar ou não independente de você olhar."
    ],
    tip: "Treine em casa sem bola. Deite na mesa, execute o movimento da tacada e force-se a manter a cabeça parada por 2 segundos após o follow through. Repita até virar automático.",
    error: "Levantar a cabeça para ver a bola entrar antes do impacto. Esse é o erro número 1 de quem já tem técnica mas ainda erra bolas fáceis em momentos de pressão.",
    checklist: [
      "Cabeça completamente parada durante a tacada",
      "Não levanta até a bola alvo parar",
      "Olhos focados na bola branca no momento do impacto",
      "Respiração controlada — não prende o ar"
    ]
  },
  {
    id: 7,
    title: "EFEITO ALTO (FOLLOW / TOPSPIN)",
    subtitle: "Bate acima do centro e a bola branca avança. Controle onde ela vai parar.",
    text: [
      "Agora que você domina o básico, chegou a hora de controlar o que a bola branca faz depois que bate na bola alvo. Isso se chama efeito, e é o que separa quem joga de quem só bate.",
      "O efeito alto (follow ou topspin) faz a bola branca continuar avançando na mesma direção após o impacto. Serve para se posicionar para a próxima bola ou forçar a bola branca a ir para determinado lado da mesa.",
      "Como fazer: bate na bola branca acima do centro. Quanto mais acima, mais forte o efeito. O taco deve estar paralelo à mesa — se estiver inclinado para cima, aumenta o efeito.",
      "Quando usar: quando a próxima bola está na mesma direção da que você acabou de encaçapar. A branca avança e já fica posicionada para o próximo tiro."
    ],
    tip: "Comece com efeito leve — bate 1 dedo acima do centro. Conforme for pegando o jeito, vai subindo. Efeito forte demais com pouca prática faz a branca pular ou desviar.",
    error: "Levantar o taco para cima achando que isso dá mais efeito. O efeito vem do ponto de contato na bola, não do ângulo do taco. Taco paralelo à mesa sempre."
  }
];