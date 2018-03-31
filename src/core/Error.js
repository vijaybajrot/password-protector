class Error{
    constructor(){
        this.errors = {};
    }

    store(errorKey,value){
        this.errors[errorKey] = value;
    }
    
    has(errorKey){
        return this.errors.hasOwnProperty(errorKey) == true;
    }
    
    get(errorKey){
        return this.errors[errorKey];
    }
    
    delete(errorKey){
        return delete this.errors[errorKey]
    }
}

export default Error;
