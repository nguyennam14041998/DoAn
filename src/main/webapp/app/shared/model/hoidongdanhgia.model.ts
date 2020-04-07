import { IDetai } from 'app/shared/model/detai.model';
import { IThanhvienHD } from 'app/shared/model/thanhvien-hd.model';

export interface IHoidongdanhgia {
  id?: number;
  mahoidong?: string;
  tenhoidong?: string;
  sudung?: number;
  detais?: IDetai[];
  thanhvienHDS?: IThanhvienHD[];
}

export const defaultValue: Readonly<IHoidongdanhgia> = {};
