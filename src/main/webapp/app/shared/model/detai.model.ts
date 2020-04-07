import { Moment } from 'moment';
import { IDutoanKP } from 'app/shared/model/dutoan-kp.model';
import { ITiendo } from 'app/shared/model/tiendo.model';
import { IDanhgia } from 'app/shared/model/danhgia.model';
import { ICoquanphoihop } from 'app/shared/model/coquanphoihop.model';
import { INguonkinhphi } from 'app/shared/model/nguonkinhphi.model';
import { INhansu } from 'app/shared/model/nhansu.model';

export interface IDetai {
  id?: number;
  ma?: string;
  ten?: string;
  thoigiantao?: Moment;
  thoigianbatdau?: Moment;
  thoigianketthuc?: Moment;
  muctieu?: string;
  noidung?: string;
  tinhcapthiet?: number;
  ketqua?: string;
  xeploai?: number;
  trangthai?: number;
  sudung?: number;
  dutoanKPS?: IDutoanKP[];
  tiendos?: ITiendo[];
  danhgias?: IDanhgia[];
  linhvucId?: number;
  capdetaiId?: number;
  hoidongdanhgiaId?: number;
  coquanphoihops?: ICoquanphoihop[];
  nguonkinhphis?: INguonkinhphi[];
  nhansus?: INhansu[];
}

export const defaultValue: Readonly<IDetai> = {};
