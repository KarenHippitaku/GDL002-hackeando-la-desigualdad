window.datosmujeres = {
  datawoman: datawoman

};


function datawoman(MUJERES){
  let name=[];
  for(let i=0;i<MUJERES.length; i++){
    let pruebadata={
      "nombre": MUJERES[i].Nombre,
      "tiempo": MUJERES[i].Fecha,
      "bio": MUJERES[i].Bio,
      "pais": MUJERES[i].Pais,
      "profesion": MUJERES[i].Ocupacion
    };
    
    name.push(pruebadata); 
    
  }
  return name;
  console.log(name);
}


//esta funcion aun no sirve, estoy tratando de acceder a la info de la base de datos.

