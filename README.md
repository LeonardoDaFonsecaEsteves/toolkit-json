# toolkit-json

toolkit for json
![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/LeonardoDaFonsecaEsteves/8a6c3dd8d57f8bcab1d4126ee2caf9d0/raw/toolkit-json__heads_main.json) [![codecov](https://codecov.io/gh/LeonardoDaFonsecaEsteves/toolkit-json/branch/main/graph/badge.svg?token=5QTMF25PCI)](https://codecov.io/gh/LeonardoDaFonsecaEsteves/toolkit-json) [![CodeQL](https://github.com/LeonardoDaFonsecaEsteves/toolkit-json/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/LeonardoDaFonsecaEsteves/toolkit-json/actions/workflows/codeql-analysis.yml)
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
