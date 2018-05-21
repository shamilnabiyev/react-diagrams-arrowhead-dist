/// <reference types="react" />
import * as React from "react";
import { Application } from "../Application";
export interface BodyWidgetProps {
    app: Application;
}
export interface BodyWidgetState {
}
/**
 * @author Dylan Vorster
 */
export declare class BodyWidget extends React.Component<BodyWidgetProps, BodyWidgetState> {
    constructor(props: BodyWidgetProps);
    render(): JSX.Element;
}
