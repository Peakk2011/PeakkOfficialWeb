interface InjectConfig {
    html?: {
        id: string;
        location: () => string;
    };
    css?: {
        location: () => { css: string };
    };
}

declare module 'https://mint-teams.web.app/Mintkit/mint.js' {
    export const Mint: {
        include(path: string): Promise<void>;
        injectHTML(selector: string, html: string): void;
        injectTitle(titleHtml: string): void;
        init(callback: () => void): void;
        inject(config: InjectConfig): void;
        Router: {
            route(pattern: string, callback: (params: Record<string, string>) => void): any;
            notFound(callback: (path: string) => void): any;
            init(): any;
        };
        navigate(path: string): void;
    };
}
