export interface TiersResponse {
  id: string;
  tier_name: string;
  tier_description: string;
  min_points: number;
  max_points: number;
  priority: number;
  benefit: string[];
  next_tier: string;
  previous_tier: string;
  maintain_points: number;
  points_reward: number;
  reward_ratio: string;
}
