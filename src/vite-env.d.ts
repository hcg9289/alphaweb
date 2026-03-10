/// <reference types="vite/client" />

declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.tsx" {
    import React from 'react';
    const Component: React.ComponentType<any>;
    export default Component;
}
