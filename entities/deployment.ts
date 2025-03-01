export enum DeploymentStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export type InstanceListItem = {
  jobId: string;
  instanceName: string;
  status: string;
  isRunning: boolean;
};

export type InstanceListResponse = {
  deployments: InstanceListItem[];
  availableInstances: string[];
};

export type MemoriesCsvResponse = {
  csv: string;
  filename: string;
};
