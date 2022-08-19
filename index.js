
 class persona {

    constructor(nombre,apellido,mascotas,libros){
        this.nombre=nombre;
        this.apellido=apellido;
       
        this.mascotas=mascotas;
        this.libros=libros
    }

    countMascotas(mascota, mascota2){
        this.mascotas.push(mascota,mascota2);
        return this.mascotas;

    }
    getFullName(){
        return this.nombre+ ' ' + this.apellido
    }

    getBooks(){
        let titulos=[];
        this.libros.forEach(libro => {
            titulos.push(libro.nombre);
        });

        return titulos;

    }

}


const libros=[{nombre:'El señor de los anillos', libros:"william golding"},{nombre:'Fundacion', libros:"Issac Asimov"}];
let animales= ['pez'];
persona = new persona('ulises','hernandez',animales,libros);

console.log(persona.countMascotas('perro','gato'));
console.log(persona.getFullName());
console.log(persona.getBooks());