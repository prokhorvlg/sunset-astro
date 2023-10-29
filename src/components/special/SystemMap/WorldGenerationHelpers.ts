import { Node } from './SystemMap'

export const findNewPoint = (x: number, y: number, angle: number, distance: number) => {
    const result = {
        x: 0, 
        y: 0
    }

    result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
    result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);

    return result;
}

export const increaseBrightness = (hex: string, percent: number) => {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    const r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

export const hashCode = (s: string) => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)

export const convertTreeToArray = (object: Node) => {
    let visited: Node[] = [];
    let queue: Node[] = []; 
    let current: Node = object;

    current.parent = '';
    queue.push(current);
    while (queue.length) {
        const nextCurrent: Node | undefined = queue.shift(); 
        if (nextCurrent === undefined) return visited; 
        current = nextCurrent;
        visited.push(current);

        if (current.children) {
            current.children.forEach((child) => {
                child.parent = current.name
                queue.push(child)
            }) 
        }
    }
    return visited;
}