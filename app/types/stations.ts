import { GameArea, ChallengeDifficulty } from './game';

export interface Station {
    id: string;
    name: string;
    area: GameArea;
    position: StationPosition;
    icon: string;
    description: string;
    learningPath: LearningPath;
    isUnlocked: boolean;
    requiredStations?: string[];
  }
  
  export interface StationPosition {
    x: number;
    y: number;
    radius: number;
  }
  
  export interface LearningPath {
    title: string;
    description: string;
    modules: LearningModule[];
    totalXP: number;
  }
  
  export interface LearningModule {
    id: string;
    title: string;
    description: string;
    difficulty: ChallengeDifficulty;
    challenges: string[];
    xpReward: number;
    completionStatus: ModuleStatus;
  }
  
  export enum ModuleStatus {
    LOCKED = 'locked',
    AVAILABLE = 'available',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed'
  }