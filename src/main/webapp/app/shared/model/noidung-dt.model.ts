import { IDutoanKPCT } from 'app/shared/model/dutoan-kpct.model';

export interface INoidungDT {
  id?: number;
  tennoidung?: string;
  sudung?: number;
  dutoanKPCTS?: IDutoanKPCT[];
}

export const defaultValue: Readonly<INoidungDT> = {};
