import Block from "../models/Block";

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blockLoading: boolean;
  blocks: Block[];
}
