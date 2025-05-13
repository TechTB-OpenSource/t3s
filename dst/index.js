// t3s.js
import base from './css/t3s-base.css';
import util from './css/t3s-util.css';
import ani from './css/t3s-ani.css';
import comp from './css/t3s-comp.css';

// String identifiers for use elsewhere if needed
export const t3sBase = 't3s-base';
export const t3sUtil = 't3s-util';
export const t3sAni = 't3s-ani';
export const t3sComp = 't3s-comp';

export const t3s = [
    't3s-base',
    't3s-util',
    't3s-ani',
    't3s-comp',
]

// Full combined CSS string
export const t3sString = `${base}\n${util}\n${ani}\n${comp}`;
