class Error{
    constructor(){
        this.errors = {};
    }

    store(error){
        this.errors[error] = error;
    }
    
    has(errorKey){
        return this.errors.hasOwnProperty(errorKey);
    }
    
    get(errorKey){
        return this.errors[errorKey];
    }
    
    delete(errorKey){
        return delete this.errors[errorKey]
    }
}

export default Error;
