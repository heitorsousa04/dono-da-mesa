import { chaptersPart1, Chapter } from './chaptersPart1';
import { chaptersPart2 } from './chaptersPart2';
import { chaptersPart3 } from './chaptersPart3';

export const chapters: Chapter[] = [
  ...chaptersPart1,
  ...chaptersPart2,
  ...chaptersPart3
];

export type { Chapter };
