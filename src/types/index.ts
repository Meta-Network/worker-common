export type RemoveIndex<Q> = {
  [key in keyof Q as string extends key
    ? never
    : key extends string
    ? key
    : never]: Q[key];
};

export type LoggerServiceOptions = {
  appName: string;
  hostName: string;
  secret: string;
  backendUrl: string;
  lokiUrl: string;
};

export type BackendTaskServiceOptions = {
  hostName: string;
  secret: string;
  backendUrl: string;
};
