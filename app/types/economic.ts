export enum CurrencyType {
    VENUS_CREDITS = 'venus_credits',
    SATURN_RINGS = 'saturn_rings',
    LUNAR_POINTS = 'lunar_points',
    FEDERATION_CREDITS = 'federation_credits'
  }
  
  export interface CurrencyBalance {
    amount: number;
    lastUpdated: Date;
    transactionHistory: Transaction[];
  }
  
  export interface UserWallet {
    [CurrencyType.VENUS_CREDITS]: CurrencyBalance;
    [CurrencyType.SATURN_RINGS]: CurrencyBalance;
    [CurrencyType.LUNAR_POINTS]: CurrencyBalance;
    [CurrencyType.FEDERATION_CREDITS]: CurrencyBalance;
  }

  export enum TransactionType {
    CHALLENGE_REWARD = 'challenge_reward',
    ACHIEVEMENT_REWARD = 'achievement_reward',
    CURRENCY_EXCHANGE = 'currency_exchange',
    WEEKLY_BONUS = 'weekly_bonus',
    SPEED_BONUS = 'speed_bonus'
  }
  
  export interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    currency: CurrencyType;
    timestamp: Date;
    description: string;
    sourceType?: string; // challenge_id, achievement_id, etc.
    sourceId?: string;
  }
  
  export interface ExchangeRate {
    sourceCurrency: CurrencyType;
    targetCurrency: CurrencyType;
    rate: number;
    lastUpdated: Date;
  }

  export interface ChallengeReward {
    baseCurrency: CurrencyType;
    baseAmount: number;
    speedBonusMultiplier: number;
    maxSpeedBonus: number;
    attemptPenaltyFactor: number; // For exponential decay
  }
  
  export interface WeeklyChallenge {
    id: string;
    startDate: Date;
    endDate: Date;
    reward: {
      currency: CurrencyType.FEDERATION_CREDITS;
      amount: number;
    };
    bonusConditions?: {
      timeLimit?: number; // in minutes
      bonusMultiplier?: number;
    };
  }

  export interface ChallengeReward {
    baseCurrency: CurrencyType;
    baseAmount: number;
    speedBonusMultiplier: number;
    maxSpeedBonus: number;
    attemptPenaltyFactor: number; // For exponential decay
  }
  
  export interface WeeklyChallenge {
    id: string;
    startDate: Date;
    endDate: Date;
    reward: {
      currency: CurrencyType.FEDERATION_CREDITS;
      amount: number;
    };
    bonusConditions?: {
      timeLimit?: number; // in minutes
      bonusMultiplier?: number;
    };
  }