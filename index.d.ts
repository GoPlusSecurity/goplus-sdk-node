import { GoPlus } from './src/script/api';
import { ErrorCode } from './src/script/errorcode';

declare module '@goplus/sdk-node' {
    export const GoPlus: GoPlus;
    export const ErrorCode: ErrorCode;
}
