/**
 * recursive function but flat the whole JSON object file passed in args
 * @param {any} args 
 * @returns JSON file stringify
 */
 const JsonCircularStringify = (...args) => {
    /**
     * recursive function which will be called to process 
     * the entire depth of the file or the object pass to args
     * @param {string | object } subject  
     * @param {object} _refs weakSet
     * @returns  JSON
     */
    const execRecursively = (subject, _refs = null) => {
        // create WeakSet
        if (!_refs) _refs = new WeakSet();

        //if the subject is already in the refs then we stop the recursivity
        if (_refs.has(subject)) {
            return;
        }
        // if the subject is of type object 
        if ("object" === typeof subject) {
            // add refs subject
            _refs.add(subject);
            // then we loop through its content and recall the function
            for (let key in subject) execRecursively(subject[key], _refs);
        }
    };

    /**
     * returns a JSON.stringify with arguments as parameters
     *  and recursive function to deepen it
     */
    return JSON.stringify(args, execRecursively())
};