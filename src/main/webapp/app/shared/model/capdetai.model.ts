import { IDetai } from 'app/shared/model/detai.model';

export interface ICapdetai {
  id?: number;
  macapdetai?: string;
  tencapdetai?: string;
  sudung?: number;
  detais?: IDetai[];
}

export const defaultValue: Readonly<ICapdetai> = {};
