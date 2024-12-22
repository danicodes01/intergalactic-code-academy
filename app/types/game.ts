// src/types/game.ts
export interface User {
    id: string;
    name: string;
    email: string;
    progress: GameProgress;
  }
  
  export interface GameProgress {
    currentLevel: number;
    completedChallenges: string[];
    unlockedAreas: GameArea[];
    score: number;
  }
  
  export enum GameArea {
    FRONTEND_CORPS = 'frontend-corps',
    SYSTEMS_DIVISION = 'systems-division',
    MISSION_CONTROL = 'mission-control'
  }
  
  export interface Challenge {
    id: string;
    title: string;
    description: string;
    area: GameArea;
    difficulty: ChallengeDifficulty;
    requirements: string[];
    startingCode: string;
    solution: string;
    tests: ChallengeTest[];
  }
  
  export enum ChallengeDifficulty {
    BEGINNER = 'beginner',
    INTERMEDIATE = 'intermediate',
    ADVANCED = 'advanced'
  }
  
  // Define possible test output types
  export type TestOutput = 
    | string 
    | number 
    | boolean 
    | null 
    | Array<TestOutput> 
    | { [key: string]: TestOutput };
  
  export interface ChallengeTest {
    id: string;
    description: string;
    testFunction: string;
    expectedOutput: TestOutput;
  }
  
  export interface GameState {
    playerPosition: Position;
    currentArea: GameArea;
    activeChallenge: Challenge | null;
    isPaused: boolean;
  }
  
  export interface Position {
    x: number;
    y: number;
  }
  
  export interface GameColors {
    background: string;
    foreground: string;
    accent: string;
    stars: string;
    glow: string;
  }