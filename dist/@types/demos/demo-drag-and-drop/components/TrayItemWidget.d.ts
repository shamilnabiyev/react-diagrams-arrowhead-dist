/// <reference types="react" />
import * as React from "react";
export interface TrayItemWidgetProps {
    model: any;
    color?: string;
    name: string;
}
export interface TrayItemWidgetState {
}
export declare class TrayItemWidget extends React.Component<TrayItemWidgetProps, TrayItemWidgetState> {
    constructor(props: TrayItemWidgetProps);
    render(): JSX.Element;
}
