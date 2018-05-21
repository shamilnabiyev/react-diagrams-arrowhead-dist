import { PortModel, AbstractPortFactory } from "storm-react-diagrams";
export declare class SimplePortFactory extends AbstractPortFactory {
    cb: (initialConfig?: any) => PortModel;
    constructor(type: string, cb: (initialConfig?: any) => PortModel);
    getNewInstance(initialConfig?: any): PortModel;
}
