import { INhansu } from 'app/shared/model/nhansu.model';

export interface IHocham {
  id?: number;
  mahocham?: string;
  tenhocham?: string;
  sudung?: number;
  nhansus?: INhansu[];
}

export const defaultValue: Readonly<IHocham> = {};
