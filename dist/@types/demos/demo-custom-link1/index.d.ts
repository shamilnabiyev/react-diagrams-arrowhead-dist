/// <reference types="react" />
import { DefaultPortModel, DefaultLinkWidget, DefaultLinkModel, DefaultLinkFactory } from "storm-react-diagrams";
import * as React from "react";
export declare class AdvancedLinkModel extends DefaultLinkModel {
    constructor();
}
export declare class AdvancedPortModel extends DefaultPortModel {
    createLinkModel(): AdvancedLinkModel | null;
}
export declare class AdvancedLinkSegment extends React.Component<{
    model: AdvancedLinkModel;
    path: string;
}> {
    path: SVGPathElement;
    circle: SVGCircleElement;
    callback: () => any;
    percent: number;
    handle: any;
    mounted: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export declare class AdvancedLinkFactory extends DefaultLinkFactory {
    constructor();
    getNewInstance(initialConfig?: any): AdvancedLinkModel;
    generateLinkSegment(model: AdvancedLinkModel, widget: DefaultLinkWidget, selected: boolean, path: string): JSX.Element;
}
declare const _default: () => JSX.Element;
export default _default;
