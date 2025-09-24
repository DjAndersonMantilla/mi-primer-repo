const recetas = [
    {
        nombre: "pan",
        ingredientes : ["harina", "agua", "levadura", "sal"],
        precio : 60000
    },{
        nombre: "pizza",
        ingredientes : ["harina", "agua", "levadura", "sal", "queso", "tomate", "ajo", "aceite", "oregano", "albahaca"],
        precio : 20000
    }
 
]
 
recetas.forEach(receta => {
    console.log(`
        Nombre de la receta: ${receta.nombre}
        Precio: ${receta.precio}
        Ingredientes: \n${receta.ingredientes.map((ingrediente,i) => `${i+1}:${ingrediente} \n`).join(``)}
        `)
}
)