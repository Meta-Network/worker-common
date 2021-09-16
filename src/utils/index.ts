import { MetaWorker } from '@metaio/worker-model';
import process from 'process';

export const removeControlCharacters = (str: string): string => {
  return str
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
    .replace(/[^\x20-\x7E]/g, '');
};

export const isUndefined = (obj: unknown): obj is undefined =>
  typeof obj === 'undefined';

export const isProd = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

export const isDeployTask = (conf: unknown): boolean => {
  if ((conf as MetaWorker.Configs.DeployTaskConfig).template) return true;
  return false;
};

export const isPublishTask = (conf: unknown): boolean => {
  if ((conf as MetaWorker.Configs.PublishTaskConfig).site) return true;
  return false;
};

export const isPostTask = (conf: unknown): boolean => {
  if ((conf as MetaWorker.Configs.PostTaskConfig).post) return true;
  return false;
};
