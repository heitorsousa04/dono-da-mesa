import { chaptersPart1, Chapter } from './chaptersPart1';
import { chaptersPart2 } from './chaptersPart2';
import { chaptersPart3 } from './chaptersPart3';
import { bonus1 } from './bonus1';
import { bonus2 } from './bonus2';
import { bonus3 } from './bonus3';

export const chapters: Chapter[] = [
  ...chaptersPart1,
  ...chaptersPart2,
  ...chaptersPart3,
  ...bonus1,
  ...bonus2,
  ...bonus3
];

export interface Section {
  id: string;
  title: string;
  chapters: Chapter[];
}

export const sections: Section[] = [
  {
    id: "main",
    title: "Dono da Mesa",
    chapters: [...chaptersPart1, ...chaptersPart2, ...chaptersPart3]
  },
  {
    id: "bonus1",
    title: "Bônus: Mente de Gladiador",
    chapters: bonus1
  },
  {
    id: "bonus2",
    title: "Bônus: Guia de Bolas Impossíveis",
    chapters: bonus2
  },
  {
    id: "bonus3",
    title: "Bônus: Truques de Mestre",
    chapters: bonus3
  }
];

export type { Chapter };
