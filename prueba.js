/*  let miAuto = {
    marca:"toyota",
    modelo:"corolla ",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};
 miAuto.marca = "Ford" 
delete miAuto.marca 
miAuto.detalleDelAuto ()

console.log(miAuto ) */

/*  function auto(marca, modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autoNuevo = new auto("tesla","modelo 3",2020)
let autoNuevo2 = new auto("misubichi","modelo 10",2000)
let autoNuevo3 = new auto("mazda","modelo gt",1993)

 console.log (autoNuevo3) */

 function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }

  let autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto numero"+(i+1));
    var modelo = prompt("Ingresa el modelo del auto"+(i+1));
    var annio = prompt("Ingresa el año del auto"+(i+1));
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }


 