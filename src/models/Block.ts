import Attributes from "./Attributes";

class Block {
    id: number;
    attributes: Attributes;

    constructor(id: number, attributes: Attributes){
        this.id = id;
        this.attributes = attributes;
    }
}

export default Block;