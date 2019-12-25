import { ModelsInterfaces } from "./ModelsInterface";

export interface BaseModelInterface {
  prototype?;
  associate?(models: ModelsInterfaces): void;
}
