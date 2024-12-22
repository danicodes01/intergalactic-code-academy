import { Station, ModuleStatus } from '../types/stations';
import { GameArea, ChallengeDifficulty } from '../types/game';

export const GAME_STATIONS: Station[] = [
  {
    id: 'frontend-corps',
    name: 'Frontend Engineering Corps',
    area: GameArea.FRONTEND_CORPS,
    position: { x: 200, y: 200, radius: 50 },
    icon: '🛸',
    description: 'Master frontend engineering with challenges in UI/UX, state management, and optimization.',
    learningPath: {
      title: 'Frontend Development Path',
      description: 'Learn modern frontend development practices',
      modules: [
        {
          id: 'react-basics',
          title: 'React Fundamentals',
          description: 'Learn the core concepts of React',
          difficulty: ChallengeDifficulty.BEGINNER,
          challenges: ['react-intro', 'state-props', 'hooks-basic'],
          xpReward: 100,
          completionStatus: ModuleStatus.AVAILABLE
        }
      ],
      totalXP: 1000
    },
    isUnlocked: true
  },
  {
    id: 'systems-division',
    name: 'Systems Engineering Division',
    area: GameArea.SYSTEMS_DIVISION,
    position: { x: 600, y: 300, radius: 50 },
    icon: '🛰️',
    description: 'Dive into systems engineering with algorithms, data structures, and system design.',
    learningPath: {
      title: 'Systems Engineering Path',
      description: 'Master system design and backend development',
      modules: [
        {
          id: 'algo-basics',
          title: 'Algorithm Fundamentals',
          description: 'Learn essential algorithms and data structures',
          difficulty: ChallengeDifficulty.BEGINNER,
          challenges: ['sorting-basics', 'search-algo', 'data-structures'],
          xpReward: 100,
          completionStatus: ModuleStatus.LOCKED
        }
      ],
      totalXP: 1200
    },
    isUnlocked: false,
    requiredStations: ['frontend-corps']
  },
  {
    id: 'mission-control',
    name: 'Mission Control',
    area: GameArea.MISSION_CONTROL,
    position: { x: 400, y: 500, radius: 50 },
    icon: '🪐',
    description: 'Central hub for learning path selection and progress tracking.',
    learningPath: {
      title: 'Mission Control Center',
      description: 'Track your progress and choose your path',
      modules: [],
      totalXP: 0
    },
    isUnlocked: true
  }
];