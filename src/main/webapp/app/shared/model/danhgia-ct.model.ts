import { INoidungdanhgia } from 'app/shared/model/noidungdanhgia.model';

export interface IDanhgiaCT {
  id?: number;
  diem?: number;
  sudung?: number;
  noidungdanhgias?: INoidungdanhgia[];
  danhgiaId?: number;
}

export const defaultValue: Readonly<IDanhgiaCT> = {};
