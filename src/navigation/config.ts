import { TSitter } from "../screens/Sitters/hooks/useSittersList";

export enum ERootStack {
  Sitters = "Sitters",
  SitterDetails = "SitterDetails",
}

export type TRootStack = {
  [ERootStack.Sitters]: undefined;
  [ERootStack.SitterDetails]: { data: TSitter };
};
