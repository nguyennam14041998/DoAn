import { IDetai } from 'app/shared/model/detai.model';

export interface ILinhvuc {
  id?: number;
  malv?: string;
  tenlv?: string;
  sudung?: number;
  detais?: IDetai[];
}

export const defaultValue: Readonly<ILinhvuc> = {};
