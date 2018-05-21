import { LinkModel, DiagramEngine, PortModel } from "storm-react-diagrams";
export declare class DiamondPortModel extends PortModel {
    position: string | "top" | "bottom" | "left" | "right";
    constructor(pos?: string);
    serialize(): {
        id: string;
    } & {
        type: string;
        selected: boolean;
    } & {
        name: string;
        parentNode: string;
        links: string[];
        maximumLinks: number;
    } & {
        position: string;
    };
    deSerialize(data: any, engine: DiagramEngine): void;
    createLinkModel(): LinkModel;
}
