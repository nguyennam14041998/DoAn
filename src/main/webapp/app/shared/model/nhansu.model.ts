import { IChunhiem } from 'app/shared/model/chunhiem.model';
import { IDetai } from 'app/shared/model/detai.model';

export interface INhansu {
  id?: number;
  manhansu?: string;
  tennhansu?: string;
  sdt?: number;
  email?: string;
  diachi?: string;
  namsinh?: string;
  sudung?: number;
  chunhiems?: IChunhiem[];
  detais?: IDetai[];
  donviId?: number;
  chucdanhId?: number;
  hochamId?: number;
}

export const defaultValue: Readonly<INhansu> = {};
