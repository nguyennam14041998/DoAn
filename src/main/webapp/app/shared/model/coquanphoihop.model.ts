import { IDetai } from 'app/shared/model/detai.model';

export interface ICoquanphoihop {
  id?: number;
  macoquan?: string;
  tencoquan?: string;
  noidung?: string;
  tendaidien?: string;
  sudung?: number;
  detais?: IDetai[];
}

export const defaultValue: Readonly<ICoquanphoihop> = {};
