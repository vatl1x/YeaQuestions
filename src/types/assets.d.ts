declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.svg?react" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;
    export default ReactComponent;
}

declare module "*.png" {
    const content: any;
    export default content;
}

declare module "*.scss" {
    const content: any;
    export default content;
}