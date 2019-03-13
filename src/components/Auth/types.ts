import { WithStyles } from "@material-ui/core/styles";
import styles from "./styles";

export interface Validation {
  required?: boolean;
  minLength: number;
  isSame?: boolean;
}

export interface Input {
  value: string;
  validation: Validation;
  error: string | null;
  isTouched: boolean
}

export interface State {
  name: Input;
  password: Input;
  [key: string]: any;
}

export enum TabsTypes {
  sign_in,
  sign_up
}

export interface Props extends WithStyles<typeof styles> {}