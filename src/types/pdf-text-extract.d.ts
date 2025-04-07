declare module 'pdf-text-extract' {
    type Callback = (err: Error | null, pages?: string[]) => void;
    function extract(filepath: string, options: any, cb: Callback): void;
    function extract(filepath: string, cb: Callback): void;
    export = extract;
  }
  