export enum MemoryPlatform {
  ELIZA_OS = 'ELIZA_OS',
  VIRTUALS = 'VIRTUALS',
  CREW_AI = 'CREW_AI',
}

export enum MemoryType {
  AGENT = 'AGENT',
  EXTERNAL = 'EXTERNAL',
}

export type MarketMemory = {
  id: string;
  title: string;
  description: string;
  dataUrl: string;
  price: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: any;
  type: MemoryType;
  platform: MemoryPlatform;
  updatedAt: Date;
  curator: string;
};
