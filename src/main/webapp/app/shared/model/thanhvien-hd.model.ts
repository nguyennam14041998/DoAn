export interface IThanhvienHD {
  id?: number;
  ten?: string;
  donvi?: string;
  trachnhiem?: number;
  sudung?: number;
  hoidongdanhgiaId?: number;
}

export const defaultValue: Readonly<IThanhvienHD> = {};
