let lista_personas = [{"nombre" : "David", "tipo" : "persona", "id" : 1669},
            {"nombre" : "Julito", "tipo" : "persona", "id" : 2004},
            {"nombre" : "Daniel", "tipo" : "persona", "id" : 1825}

]
for(let personas of lista_personas){
    for(let propiedad in personas){
        console.log(propiedad)
    }
}