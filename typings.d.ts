// style
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';

// img
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
// font
declare module '*.tiff';
// thirty lib
// declare module 'rc-animate';
// declare module 'react-copy-to-clipboard';
// declare module 'react-fittext';
// declare module '@antv/data-set';
// declare module 'nzh/cn';
declare const APP_TYPE: string;
declare module 'memoize-one' {
  function memoizeOneFuc<T extends (...args: any[]) => any>(
    resultFn: T,
    isEqual?: (a: any, b: any, index: number) => boolean,
  ): T;
  export default memoizeOneFuc;
}
