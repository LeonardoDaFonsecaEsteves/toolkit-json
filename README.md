# toolkit-json

toolkit for json

---

## JsonCircularStringify

function qui permet de stringify tout type d'objet ou de fichier json

to use it, just import it and pass it as a parameter of the object or the file to stringify

```
 const stringify = JsonCircularStringify(
     'string',
     {
         obj: 'object',
         arr: [
             { val: 123, str: "Json" }
            ]
    })
console.log(stringify) 
// output ["string",{"obj":"object","arr":[{"val":123,"str":"Json"}]}]

```

---
