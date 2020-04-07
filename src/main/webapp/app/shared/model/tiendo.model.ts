import { Moment } from 'moment';

export interface ITiendo {
  id?: number;
  matiendo?: string;
  kybaocao?: string;
  noidung?: string;
  thoigianbatdau?: Moment;
  thoigianketthuc?: Moment;
  khoiluonghoanthanh?: number;
  ghichu?: string;
  sudung?: number;
  detaiId?: number;
}

export const defaultValue: Readonly<ITiendo> = {};
