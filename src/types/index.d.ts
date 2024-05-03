export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface Icolor {
  name: string;
  id: string;
  code: string;
}

export interface IIcon {
  name: string;
  id: string;
  syboml: string;
}

export interface ICategory {
  name: string;
  user: IUser | string;
  isEditable: boolean;
  color: Icolor;
  icon: Icolor;
}
