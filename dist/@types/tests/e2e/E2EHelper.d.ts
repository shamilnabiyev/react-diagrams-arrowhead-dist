import { ElementHandle, Page } from "puppeteer";
export declare class E2EElement {
    helper: E2EHelper;
    page: Page;
    element: ElementHandle;
    id: string;
    constructor(helper: E2EHelper, page: Page, element: ElementHandle, id: string);
}
export declare class E2ENode extends E2EElement {
    port(id: string): Promise<E2EPort>;
    model(): Promise<any>;
}
export declare class E2EPort extends E2EElement {
    parent: E2ENode;
    constructor(helper: E2EHelper, page: Page, element: ElementHandle, id: string, parent: E2ENode);
    link(port: E2EPort): Promise<E2ELink>;
    linkToPoint(x: number, y: number): Promise<E2ELink>;
}
export declare class E2ELink extends E2EElement {
    model(): Promise<any>;
    exists(): Promise<boolean>;
    select(): Promise<any>;
}
export declare class E2EHelper {
    page: Page;
    constructor(page: Page);
    link(id: any): Promise<E2ELink>;
    node(id: any): Promise<E2ENode>;
}
