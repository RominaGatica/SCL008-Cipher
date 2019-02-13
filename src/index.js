function funcEncode(){

    //let result = ""; //declare variable con su contenido vacio
    //let name = prompt("ESCRIBE TU NOMBRE"); // declare variable name con prompt para que usuario escriba en la pantalla(PROBANDO CON PROMPT)
    //let key = prompt("INGRESA TU CLAVE"); // declare la variable para que usuario ingrese su numero secreto(probando con prompt)
    let name = document.getElementById("mensaje").value;// llamo a mi id del imput y tomo su contenido
    let key = document.getElementById("numbersecret").value;
    let resulfinal = cipher.encode(key,name)//llamar al resultado desde el cipher encode

     //alert(result); //para que muestre el resultado final y fuera de for para que no lo muestre una y otra vez
    document.getElementById("result").innerHTML = `Tu texto codificado es: ${resulfinal}`;
   
    }

    function funcDecode(){

        //let result = ""; //declare variable con su contenido vacio
        //let name = prompt("ESCRIBE TU NOMBRE"); // declare variable name con prompt para que usuario escriba en la pantalla(PROBANDO CON PROMPT)
        //let key = prompt("INGRESA TU CLAVE"); // declare la variable para que usuario ingrese su numero secreto(probando con prompt)
        let name = document.getElementById("mensaje").value;// llamo a mi id del imput y tomo su contenido
        let key = document.getElementById("numbersecret").value;
        let resultfinal = cipher.decode(key,name)//llamar al resultado desde cipher decode

     //alert(result); //para que muestre el resultado final y fuera de for para que no lo muestre una y otra vez
        document.getElementById("descifrado").innerHTML = `Tu texto codificado es: ${resultfinal}`;
    }

    