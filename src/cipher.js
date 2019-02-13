window.cipher = {
  encode: (key,name) => {
    let result = ""; //declare variable con su contenido vacio
    for (let i=0; i<name.length; i++){ // for para recorrer lo que escribe el ususario
     //declaro variable de formula= al codigo ascii de un n° - 65(inicio cod ascii+desplazamiento que ingresa el ususario) %26(n°desplazamientos)+65
   let formula = ((name.charCodeAt(i)-65+parseInt(key))%26+65); // parse int de string transforma a numero
   result += String.fromCharCode(formula); //para concatenar la formula en la let result
    }
    return result
  },
  decode: (key,name) => {
    let result = "";
    for (let i=0; i<name.length; i++){ // for para recorrer lo que escribe el ususario
      //declaro variable de formula= al codigo ascii de un n° - 65(inicio cod ascii+desplazamiento que ingresa el ususario) %26(n°desplazamientos)+65
    let formula = ((name.charCodeAt(i)-90-parseInt(key))%26+90); // parse int de string transforma a numero
    result += String.fromCharCode(formula); //para concatenar la formula en la let result
  }
  return result
  }
}

     
  
  

   
    
  
       
 


