class Error{
    constructor(){
        this.errors = {};
    }

    store(errorKey,value){
        this.errors[errorKey] = value;
    }
    
    has(errorKey){
        if(this.errors.hasOwnProperty(errorKey)){
            return true;
        }
        return false;
    }
    
    get(errorKey){
        if(this.errors[errorKey]) return this.errors[errorKey];
    }
    
    delete(errorKey){
        return delete this.errors[errorKey];
    }
}

export default Error;
