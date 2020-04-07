import { IDetai } from 'app/shared/model/detai.model';

export interface INguonkinhphi {
  id?: number;
  manguonkinhphi?: string;
  tennguonkinhphi?: string;
  noidung?: string;
  sotiencap?: number;
  sudung?: number;
  detais?: IDetai[];
}

export const defaultValue: Readonly<INguonkinhphi> = {};
