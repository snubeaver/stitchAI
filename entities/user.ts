import { DeploymentStatus } from './deployment';
import { MemoryPlatform, MemoryType } from './market-memory';

export type User = {
  walletAddress: string;
  agent: Agent[];
  memory: Memory[];
};

export type Agent = {
  id: string;
  name: string;
  description: string;
  socialLink: string;
  memory: string;
  status: DeploymentStatus;
};

export type Memory = {
  id: string;
  title: string;
  description: string;
  dataUrl: string;
  price: number;
  type: MemoryType;
  platform: MemoryPlatform;
  updatedAt: Date;
};
