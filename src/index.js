import  fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function t3sAll() {
    const cssPathUtil = join(__dirname, 'css', 't3s-util.css');
    const cssPathComp = join(__dirname, 'css', 't3s-comp.css');
    const cssPathAni = join(__dirname, 'css', 't3s-ani.css');
    const cssContentUtil = fs.readFileSync(cssPathUtil, 'utf8');
    const cssContentComp = fs.readFileSync(cssPathComp, 'utf8');
    const cssContentAni = fs.readFileSync(cssPathAni, 'utf8');
    const cssContentAll = [
        cssContentUtil,
        cssContentComp,
        cssContentAni
    ].join('\n');
    return cssContentAll;
}

export function t3sBase() {
    const cssPathBase = join(__dirname, 'css', 't3s-base.css');
    return fs.readFileSync(cssPathBase, 'utf8');
}

export function t3sUtil() {
    const cssPathUtil = join(__dirname, 'css', 't3s-util.css');
    return fs.readFileSync(cssPathUtil, 'utf8');
}

export function t3sComp() {
    const cssPathComp = join(__dirname, 'css', 't3s-comp.css');
    return fs.readFileSync(cssPathComp, 'utf8');
}

export function t3sAni() {
    const cssPathAni = join(__dirname, 'css', 't3s-ani.css');
    return fs.readFileSync(cssPathAni, 'utf8');
}
