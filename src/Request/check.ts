export function isEmail(_email: string): boolean {
    
    const check = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    return check.test(_email);
}

export function isString(_value:any): boolean {
    if ( (_value instanceof String || typeof _value === 'string' ) ) {
        return true;
    }
    else {
        return false;
    }
}