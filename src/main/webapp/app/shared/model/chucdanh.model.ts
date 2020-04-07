import { INhansu } from 'app/shared/model/nhansu.model';

export interface IChucdanh {
  id?: number;
  machucdanh?: string;
  tenchucdanh?: string;
  sudung?: number;
  nhansus?: INhansu[];
}

export const defaultValue: Readonly<IChucdanh> = {};
