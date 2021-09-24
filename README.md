# toolkit-json

toolkit for json
![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/LeonardoDaFonsecaEsteves/6efb09a5572ada0bac3126f346d76e32/raw/toolkit-json__heads_main.json) [![CodeQL](https://github.com/LeonardoDaFonsecaEsteves/toolkit-json/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/LeonardoDaFonsecaEsteves/toolkit-json/actions/workflows/codeql-analysis.yml)
---

## JsonCircularStringify

function qui permet de stringify tout type d'objet ou de fichier json

to use it, just import it and pass it as a parameter of the object or the file to stringify

```javascript
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
