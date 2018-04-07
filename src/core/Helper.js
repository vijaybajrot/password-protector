export function isObjEmpty(Obj) {
    return Object.keys(Obj).length === 0 && Obj.constructor === Object;
}