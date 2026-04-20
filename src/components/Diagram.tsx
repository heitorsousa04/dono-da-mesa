import React from 'react';

interface DiagramProps {
  chapterId: number;
}

const TableBg = () => (
  <>
    <rect width="680" height="360" rx="16" fill="#2d7a3a" stroke="#2d5a35" strokeWidth="12" />
    {/* Pockets */}
    <circle cx="20" cy="20" r="22" fill="#0f1a12" />
    <circle cx="340" cy="16" r="20" fill="#0f1a12" />
    <circle cx="660" cy="20" r="22" fill="#0f1a12" />
    <circle cx="20" cy="340" r="22" fill="#0f1a12" />
    <circle cx="340" cy="344" r="20" fill="#0f1a12" />
    <circle cx="660" cy="340" r="22" fill="#0f1a12" />
  </>
);

const Ball = ({ cx, cy, type }: { cx: number | string, cy: number | string, type: 'white' | 'red' | 'yellow' | 'orange' | 'blue' }) => {
  const colors = {
    white: '#f9fafb',
    red: '#e03030',
    yellow: '#e0c030',
    orange: '#e08030',
    blue: '#4a9aee'
  };
  const ncx = Number(cx);
  const ncy = Number(cy);
  return (
    <g>
      <circle cx={ncx} cy={ncy} r="12" fill={colors[type]} stroke="#000" strokeWidth="1" opacity="0.3" transform="translate(2, 2)" />
      <circle cx={ncx} cy={ncy} r="12" fill={colors[type]} stroke={type === 'white' ? '#d1d5db' : '#000'} strokeWidth="1" />
      <circle cx={ncx - 3} cy={ncy - 4} r="4" fill="#ffffff" opacity="0.4" />
    </g>
  );
};

const Cue = ({ x1, y1, x2, y2 }: { x1: number | string, y1: number | string, x2: number | string, y2: number | string }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c8a96e" strokeWidth="6" strokeLinecap="round" />
);

const Path = ({ x1, y1, x2, y2, color = "#ffffff" }: { x1: number | string, y1: number | string, x2: number | string, y2: number | string, color?: string }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeDasharray="6,6" markerEnd="url(#arrow)" />
);

const Label = ({ x, y, text }: { x: number | string, y: number | string, text: string }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect x="-10" y="-12" width={text.length * 8 + 20} height="24" fill="#0d2010" stroke="#2d5a35" strokeWidth="2" rx="4" />
    <text x="0" y="4" fill="#4ddd6f" fontSize="12" fontFamily="sans-serif" fontWeight="bold">{text}</text>
  </g>
);

const imageUrls: Record<number, string> = {
  1: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709505/Realistic_photography__professional_202604201505_wmnpzr.jpg",
  2: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709507/Realistic_photography__professional_202604201506_sblvoy.jpg",
  3: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709508/Realistic_photography__professional_202604201507_e1xuc8.jpg",
  4: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709511/Realistic_photography__professional_202604201507_1_yuarrh.jpg",
  5: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709513/Realistic_photography__professional_202604201508_sxpsxl.jpg",
  6: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709516/Realistic_photography__professional_202604201509_ewuwmy.jpg",
  11: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709519/Realistic_photography__professional_202604201514_odti6p.jpg",
  12: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709521/Realistic_photography__professional_202604201515_cw9kgt.jpg",
  13: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709523/Realistic_photography__professional_202604201516_tkih6w.jpg",
  14: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709526/Realistic_photography__professional_202604201517_gjkgiz.jpg",
  15: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709529/Realistic_photography__professional_202604201518_exsdk9.jpg",
  16: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709532/Realistic_photography__professional_202604201520_jmvmgs.jpg",
  17: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709535/Realistic_photography__professional_202604201521_ppy5lm.jpg",
  18: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709538/Realistic_photography__professional_202604201522_irsf7j.jpg",
  19: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709540/Realistic_photography__professional_202604201522_1_gc1cyt.jpg",
  20: "https://res.cloudinary.com/dtcjxw6ax/image/upload/q_auto/f_auto/v1776709543/Realistic_photography__professional_202604201523_lp5m42.jpg"
};

export const Diagram: React.FC<DiagramProps> = ({ chapterId }) => {
  
  const renderContent = () => {
    switch (chapterId) {
      case 1: // Stance
        return (
          <>
            <TableBg />
            {/* Stick figure base */}
            <path d="M 280 280 L 320 180 L 400 120" stroke="#4ddd6f" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 360 280 L 360 160" stroke="#4ddd6f" fill="none" strokeWidth="6" strokeLinecap="round" />
            <circle cx="450" cy="80" r="15" fill="#4ddd6f" />
            <path d="M 400 120 L 440 95" stroke="#4ddd6f" fill="none" strokeWidth="6" strokeLinecap="round" />
            
            <Cue x1="200" y1="180" x2="520" y2="130" />
            <Ball cx="540" cy="125" type="white" />
            
            <Label x="220" y="310" text="Perna direita reta" />
            <Label x="380" y="310" text="Esquerda dobrada" />
            <Label x="360" y="40" text="Queixo no taco" />
            <line x1="260" y1="280" x2="300" y2="310" stroke="#4ddd6f" strokeWidth="2" />
          </>
        );
      case 2: // Ponte
        return (
          <>
            <TableBg />
            {/* Hand abstraction */}
            <path d="M 200 140 Q 230 110 250 160 Q 240 190 200 220" fill="#0d2010" stroke="#39c45a" strokeWidth="4" />
            <circle cx="250" cy="160" r="5" fill="#39c45a" />
            
            <Cue x1="50" y1="160" x2="300" y2="160" />
            <Ball cx="320" cy="160" type="white" />
            <Ball cx="520" cy="160" type="red" />
            <Path x1="335" y1="160" x2="505" y2="160" />
            <Path x1="535" y1="160" x2="650" y2="160" />
            
            {/* Distance line */}
            <line x1="250" y1="180" x2="320" y2="180" stroke="#f0c040" strokeWidth="2" />
            <text x="270" y="200" fill="#f0c040" fontSize="14" fontWeight="bold">25cm</text>
            <Label x="150" y="100" text="Canal V" />
          </>
        );
      case 3: // Peito e Queixo
        return (
          <>
            <TableBg />
            <rect x="0" y="0" width="680" height="360" fill="#0f1a12" /> {/* Cover table for abstract view */}
            <circle cx="340" cy="100" r="40" fill="none" stroke="#4ddd6f" strokeWidth="4" />
            {/* Eyes */}
            <circle cx="320" cy="90" r="5" fill="#4ddd6f" />
            <circle cx="360" cy="90" r="5" fill="#4ddd6f" />
            <path d="M 320 120 Q 340 130 360 120" stroke="#4ddd6f" fill="none" strokeWidth="3" />
            
            <Cue x1="340" y1="280" x2="340" y2="100" />
            <circle cx="340" cy="300" r="20" fill="#f9fafb" />
            
            <Label x="380" y="80" text="Olho dominante no taco" />
            <Label x="380" y="200" text="Taco roçando no peito" />
          </>
        );
      case 4: // Empunhadura
        return (
          <>
            <TableBg />
            <rect x="0" y="0" width="680" height="360" fill="#0f1a12" />
            
            {/* Three phases */}
            <Cue x1="80" y1="180" x2="220" y2="180" />
            <path d="M 120 160 Q 150 160 160 200 Q 120 200 120 160" fill="#0d2010" stroke="#39c45a" strokeWidth="3" />
            <Label x="100" y="240" text="1. Posição Inicial" />
            
            <Cue x1="280" y1="180" x2="420" y2="180" />
            <path d="M 320 150 Q 350 150 370 210 Q 320 210 320 150" fill="#0d2010" stroke="#39c45a" strokeWidth="3" />
            <Label x="300" y="240" text="2. Mão Abre (Backswing)" />
            
            <Cue x1="480" y1="180" x2="620" y2="180" />
            <path d="M 520 160 Q 550 160 560 200 Q 520 200 520 160" fill="#0d2010" stroke="#39c45a" strokeWidth="3" />
            <Label x="490" y="240" text="3. Fecha Suave" />
          </>
        );
      case 5: // Timing
        return (
          <>
            <TableBg />
            <rect x="0" y="0" width="680" height="360" fill="#0f1a12" />
            <Cue x1="150" y1="180" x2="350" y2="180" />
            <Ball cx="400" cy="180" type="white" />
            
            {/* Movement arrows */}
            <path d="M 280 150 L 320 150 L 310 140 M 320 150 L 310 160" stroke="#e05050" fill="none" strokeWidth="3" />
            <text x="250" y="130" fill="#e05050" fontWeight="bold">Backswings</text>

            <path d="M 350 210 L 450 210 L 440 200 M 450 210 L 440 220" stroke="#39c45a" fill="none" strokeWidth="5" />
            <text x="360" y="240" fill="#39c45a" fontWeight="bold">Aceleração + Follow Through</text>
            
            <line x1="400" y1="250" x2="400" y2="160" stroke="#8aaa90" strokeDasharray="4,4" />
            <line x1="460" y1="250" x2="460" y2="160" stroke="#8aaa90" strokeDasharray="4,4" />
            <text x="405" y="265" fill="#f0c040" fontSize="12">15-20cm além</text>
          </>
        );
      case 7: // Follow
        return (
          <>
            <TableBg />
            <Ball cx="200" cy="180" type="white" />
            <circle cx="200" cy="172" r="3" fill="#39c45a" /> {/* Contact point */}
            <Cue x1="50" y1="172" x2="180" y2="172" />
            
            <Ball cx="400" cy="180" type="red" />
            
            <Path x1="215" y1="180" x2="385" y2="180" />
            <Path x1="415" y1="180" x2="550" y2="180" /> {/* Red ball path */}
            
            <line x1="200" y1="200" x2="400" y2="200" stroke="#4a9aee" strokeWidth="4" strokeDasharray="8,4" markerEnd="url(#arrowBlue)" />
            <text x="250" y="220" fill="#4a9aee" fontWeight="bold">Branca avança</text>
            
            <Label x="150" y="120" text="Bate acima do centro" />
          </>
        );
      case 8: // Draw
        return (
          <>
            <TableBg />
            <Ball cx="200" cy="180" type="white" />
            <circle cx="200" cy="188" r="3" fill="#4a9aee" /> {/* Contact point */}
            <Cue x1="50" y1="188" x2="180" y2="188" />
            
            <Ball cx="450" cy="180" type="red" />
            
            <Path x1="215" y1="180" x2="435" y2="180" />
            <Path x1="465" y1="180" x2="600" y2="180" />
            
            {/* Draw path (returning) */}
            <path d="M 430 195 Q 300 220 150 195" fill="none" stroke="#f0c040" strokeWidth="4" strokeDasharray="8,4" markerEnd="url(#arrowYellow)" />
            <text x="250" y="240" fill="#f0c040" fontWeight="bold">Branca recua (Draw)</text>
            
            <Label x="140" y="130" text="Bate abaixo do centro" />
          </>
        );
      case 9: // Side Spin
        return (
          <>
            <TableBg />
            <Ball cx="200" cy="180" type="white" />
            <circle cx="192" cy="180" r="3" fill="#e08030" stroke="#fff" />
            <circle cx="208" cy="180" r="3" fill="#4a9aee" stroke="#fff" />
            
            <Path x1="215" y1="180" x2="500" y2="180" />
            {/* Wall bounce paths */}
            {/* Without spin */}
            <line x1="500" y1="180" x2="500" y2="340" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,4" />
            {/* Left spin path */}
            <line x1="500" y1="180" x2="600" y2="340" stroke="#e08030" strokeWidth="3" markerEnd="url(#arrow)" />
            {/* Right spin path */}
            <line x1="500" y1="180" x2="400" y2="340" stroke="#4a9aee" strokeWidth="3" markerEnd="url(#arrow)" />
            
            <Label x="120" y="110" text="Esquerda: vai pra direita" />
            <Label x="320" y="110" text="Direita: vai pra esquerda" />
          </>
        );
      case 10: // Long Shots
        return (
          <>
            <TableBg />
            <Ball cx="620" cy="300" type="red" />
            
            {/* Posição Curta */}
            <Ball cx="500" cy="240" type="white" />
            <Path x1="510" y1="245" x2="605" y2="292" />
            <Label x="440" y="210" text="Curta (30cm)" />
            
            {/* Posição Média */}
            <Ball cx="340" cy="160" type="white" />
            <Path x1="352" y1="166" x2="480" y2="230" />
            <Label x="280" y="120" text="Média (Meio)" />
            
            {/* Posição Longa */}
            <Ball cx="80" cy="60" type="white" />
            <Path x1="95" y1="68" x2="330" y2="155" />
            <Label x="80" y="20" text="Longa (Atenção Máxima)" />
            
            {/* Target pocket highlight */}
            <circle cx="660" cy="340" r="30" fill="none" stroke="#e05050" strokeWidth="3" opacity="0.6" />
          </>
        );
      case 11: // Bola colada
        return (
          <>
            <TableBg />
            <Ball cx="340" cy="30" type="white" /> {/* Colada na borda superior */}
            <Ball cx="340" cy="200" type="red" />
            
            {/* High bridge abstraction */}
            <path d="M 320 0 Q 340 30 360 0" fill="none" stroke="#f0c040" strokeWidth="8" />
            <Cue x1="340" y1="-80" x2="340" y2="15" />
            
            <Path x1="340" y1="45" x2="340" y2="185" />
            <Label x="400" y="40" text="Ponte alta" />
            <Label x="400" y="80" text="Golpe curto e vertical" />
          </>
        );
      case 12: // Controle da Branca
        return (
          <>
            <TableBg />
            {/* Reto (Ruim) */}
            <Ball cx="100" cy="180" type="white" />
            <Ball cx="200" cy="180" type="red" />
            <Path x1="115" y1="180" x2="185" y2="180" />
            <text x="140" y="160" fill="#e05050" fontWeight="bold">X Reto (Branca para)</text>
            
            {/* Com ângulo (Bom) */}
            <Ball cx="400" cy="220" type="white" />
            <Ball cx="500" cy="150" type="red" />
            <Ball cx="600" cy="250" type="yellow" /> {/* Próxima bola */}
            
            <Path x1="412" y1="212" x2="488" y2="158" />
            {/* Branca defletindo para posição boa */}
            <path d="M 480 150 L 520 200" stroke="#39c45a" strokeWidth="3" strokeDasharray="6,6" markerEnd="url(#arrowGreen)" />
            <text x="400" y="130" fill="#39c45a" fontWeight="bold">✓ Ângulo (Vai pra próxima)</text>
          </>
        );
      case 13: // Defesa
        return (
          <>
            <TableBg />
            <Ball cx="340" cy="180" type="white" />
            <Ball cx="550" cy="240" type="red" />
            <Ball cx="580" cy="260" type="yellow" />
            <Ball cx="520" cy="280" type="orange" />
            <text x="500" y="210" fill="#fff" fontSize="12">Sem bola fácil</text>
            
            {/* Option 1: Colada */}
            <Path x1="340" y1="180" x2="340" y2="25" color="#4a9aee" />
            <Label x="220" y="40" text="1. Colar na tabela" />
            
            {/* Option 2: Longe */}
            <Path x1="340" y1="180" x2="60" y2="180" color="#f0c040" />
            <Label x="60" y="210" text="2. Longe das bolas" />
          </>
        );
      case 14: // Sinuca
        return (
          <>
            <TableBg />
            <Ball cx="200" cy="180" type="white" />
            <Ball cx="350" cy="180" type="orange" /> {/* Blocking */}
            <Ball cx="500" cy="180" type="red" /> {/* Target */}
            
            {/* Vision line blocked */}
            <line x1="215" y1="180" x2="335" y2="180" stroke="#e05050" strokeWidth="2" strokeDasharray="4,4" />
            <line x1="330" y1="170" x2="340" y2="190" stroke="#e05050" strokeWidth="3" />
            <line x1="340" y1="170" x2="330" y2="190" stroke="#e05050" strokeWidth="3" />
            
            <Label x="280" y="130" text="Visão bloqueada" />
            <Label x="280" y="230" text="Adversário sem saída" />
          </>
        );
      case 15: // Leitura (Sequência)
        return (
          <>
            <TableBg />
            <Ball cx="150" cy="180" type="white" />
            <Ball cx="250" cy="100" type="red" />    {/* 1 */}
            <Ball cx="400" cy="120" type="yellow" /> {/* 2 */}
            <Ball cx="550" cy="240" type="blue" />   {/* 3 */}
            <Ball cx="200" cy="300" type="orange" /> {/* X (Armadilha) */}
            
            <text x="240" y="90" fill="#fff" fontWeight="bold">1</text>
            <text x="390" y="110" fill="#fff" fontWeight="bold">2</text>
            <text x="540" y="230" fill="#fff" fontWeight="bold">3</text>
            <text x="190" y="290" fill="#e05050" fontWeight="bold">X</text>
            
            {/* Planned path of the white ball */}
            <path d="M 165 170 L 235 110 L 385 120 L 535 230" fill="none" stroke="#39c45a" strokeWidth="3" strokeDasharray="6,6" markerEnd="url(#arrowGreen)" />
            <Label x="230" y="320" text="Evite: Sem continuação" />
          </>
        );
      case 20: // Drill
        return (
          <>
            <TableBg />
            <line x1="226" y1="0" x2="226" y2="360" stroke="#2d5a35" strokeWidth="4" />
            <line x1="453" y1="0" x2="453" y2="360" stroke="#2d5a35" strokeWidth="4" />
            
            {/* Bloco 1: Curta */}
            <text x="80" y="50" fill="#f0c040" fontWeight="bold">BLOCO 1 (10m)</text>
            <Ball cx="60" cy="180" type="white" />
            <Ball cx="160" cy="180" type="red" />
            <Path x1="75" y1="180" x2="145" y2="180" />
            
            {/* Bloco 2: Diagonal Longa */}
            <text x="300" y="50" fill="#f0c040" fontWeight="bold">BLOCO 2 (10m)</text>
            <Ball cx="260" cy="300" type="white" />
            <Ball cx="410" cy="80" type="red" />
            <Path x1="270" y1="285" x2="395" y2="95" />
            
            {/* Bloco 3: Controle/Efeito */}
            <text x="520" y="50" fill="#f0c040" fontWeight="bold">BLOCO 3 (10m)</text>
            <Ball cx="550" cy="200" type="white" />
            <path d="M 550 185 Q 560 100 620 150" fill="none" stroke="#4a9aee" strokeWidth="3" strokeDasharray="4,4" markerEnd="url(#arrowBlue)" />
            <path d="M 550 215 Q 520 280 620 280" fill="none" stroke="#f0c040" strokeWidth="3" strokeDasharray="4,4" markerEnd="url(#arrowYellow)" />
          </>
        );
      default:
        // Generic fallback diagram logic
        return (
          <>
            <TableBg />
            <text x="340" y="180" fill="#8aaa90" textAnchor="middle" className="font-title text-4xl opacity-50">
              PRATIQUE ISTO NA MESA
            </text>
          </>
        );
    }
  }

  return (
    <>
      {imageUrls[chapterId] ? (
        <img 
          src={imageUrls[chapterId]} 
          alt={`Ilustração do capítulo ${chapterId}`} 
          style={{ width: '100%', borderRadius: '12px', maxHeight: '420px', objectFit: 'cover' }} 
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="rounded-2xl overflow-hidden border-2 border-pool-border bg-[#0d2010]">
          <svg viewBox="0 0 680 360" width="100%" height="auto" className="block max-h-[400px] w-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
              </marker>
              <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#39c45a" />
              </marker>
              <marker id="arrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4a9aee" />
              </marker>
              <marker id="arrowYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f0c040" />
              </marker>
            </defs>
            
            {renderContent()}
          </svg>
        </div>
      )}
    </>
  );
};
