window.addEventListener("DOMContentLoaded", () => {

    Ejercicios();

});

const Ejercicios = () => {

    Ejercicio1y2();
    Ejercicio3();
    Ejercicio4();
    Ejercicio5();
    Ejercicio6();
    Ejercicio7();
    Ejercicio8();
    Ejercicio9();
    Ejercicio10();

}

const Ejercicio1y2 = () => {

    const button = document.getElementById('prompt');
    const button2 = document.getElementById('prompt2');
    button.addEventListener('click', () => {

        prompt("Cómo te llamas?", "Escribe tu nombre");


    });

    button2.addEventListener('click', () => {

        const message = prompt("Cómo te llamas?", "Escribe tu nombre");
        const p = document.createElement('p');
        const father = document.getElementById('Ej2');

        p.innerHTML = "Hola " + message;
        p.classList.add("text-center");
        console.log(p);
        father.appendChild(p);

    });



}

const Ejercicio3 = () => {

    const btn = document.getElementById('op');

    btn.addEventListener('click', () => {

        let a = prompt("Ingresa el primer número", "Escribe el número");
        let b = prompt("Ingresa el segundo número", "Escribe el número");

        a = Number(a);
        b = Number(b);

        calcularOp(a, b);


    });


}

const calcularOp = (a, b) => {

    let Operaciones = [];
    if(b == 0) return;

    const father = document.getElementById('Ej3');

    Operaciones.push(a + b, a - b, a * b, a / b, a % b);
    Operaciones.forEach(op => {

        console.log(op);

        const p = document.createElement('p');
        p.innerHTML = "Resultado: " + op.toString();
        p.classList.add("text-center");
        p.classList.add("border-bottom", "border-primary");
        father.appendChild(p);
        

    });



}

const Ejercicio4 = () => {

    

}

const Ejercicio5 = () => {

    const submit = document.getElementById('sbm');
    const input1 = document.getElementById('inp-1');
    const input2 = document.getElementById('inp-2');
    const input3 = document.getElementById('inp-3');
    const input4 = document.getElementById('inp-4');

    let errors = [];

    submit.addEventListener('click', () => {

        if(!input1.value) errors.push('Se necesita agregar un usuario');
        if(!input2.value) errors.push('Se necesita un nombre');
        if(!input3.value) errors.push('Debes introducir una contraseña');
        if(!input4.value) errors.push('Debes volver a escribir la contraseña');
        if(input3.value != input4.value) errors.push('Las contraseñas deben ser iguales');

        if(errors) {

            imprimirAlerta(errors);
            errors = [];

        }

        else {

            imprimirAlerta(errors);
            errors = [];

        }


    });

}

const imprimirAlerta = (errores) => {

    const alerta = document.createElement('p');
    const Ejercicio5 = document.getElementById('Ej5');

    if(errores.length != 0) {

        console.log(errores);
        alerta.innerHTML = '¡Hubo un error!';
        alerta.classList.add('lead', 'text-center', 'text-danger', 'mt-2');
        Ejercicio5.appendChild(alerta);


    }

    else {

        alerta.innerHTML = '¡Usuario creado!';
        alerta.classList.add('lead', 'text-center', 'text-success', 'mt-2');
        Ejercicio5.appendChild(alerta);

    }

}

const Ejercicio6 = () => {

    const btn = document.getElementById('btn-primos');

    btn.addEventListener('click', () => {

        const limite = prompt('Ingresa el número hasta el que se desea calcular los números primos', 'Ingresa el número');

        calcularPrimos(limite);

    });

}

const calcularPrimos = (limite) => { 

    const father = document.getElementById('Ej6-primos');

    for(let contador = 0; contador < limite; contador++) {

        if(esPrimo(contador) && contador > 0) {

            const primo = document.createElement('p');
            primo.innerHTML = contador.toString();
            primo.classList.add('text-success');
            father.appendChild(primo);

        }

    }

}

const esPrimo = (numero) => {

    //Divide el número ingresado por cada número previo para corroborar si el residuo es 0
    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {

            return false;

        }
    }  

    return true;

}

const Ejercicio7 = () => {

    const btn = document.getElementById('Ej7-Enviar');
    let palabras = [];

    btn.addEventListener('click', () => {

        let input = document.getElementById('Ej7-inp').value;

        input = input.trim();

        palabras = input.split(' ');

        crearInformacion(palabras);

    });

}

const crearInformacion = (palabras) => {

    //Section
    const father = document.getElementById('Ej7');

    //Elementos creados
    const numeroDePalabras = document.createElement('p');
    const primeraPalabra = document.createElement('p');
    const ultimaPalabra = document.createElement('p');
    const arregloInvertido = document.createElement('p');
    const ordenDeAbecedario = document.createElement('p');
    const ordenDeAbecedarioInverso = document.createElement('p');

    
    numeroDePalabras.innerHTML = "El número de palabras es: " + palabras.length.toString();
    numeroDePalabras.classList.add('text-center');

    primeraPalabra.innerHTML = "La primera palabra es: " + palabras[0].toString();
    primeraPalabra.classList.add('text-center');

    ultimaPalabra.innerHTML = "La última palabra es: " + palabras[palabras.length - 1];
    ultimaPalabra.classList.add('text-center'); 

    arregloInvertido.innerHTML = "El arreglo invertido es: " + palabras.reverse().toString();
    arregloInvertido.classList.add('text-center');
    
    ordenDeAbecedario.innerHTML = "Las palabras en orden alfabético son: " + palabras.sort().toString();
    ordenDeAbecedario.classList.add('text-center');

    ordenDeAbecedarioInverso.innerHTML = "Las palabras en orden inverso al alfabeto son: " + palabras.sort().reverse().toString();
    ordenDeAbecedarioInverso.classList.add('text-center');


    father.appendChild(numeroDePalabras);
    father.appendChild(primeraPalabra);
    father.appendChild(ultimaPalabra);
    father.appendChild(arregloInvertido);
    father.appendChild(ordenDeAbecedario);
    father.appendChild(ordenDeAbecedarioInverso);

}


const Ejercicio8 = () => {

    const btn1 = document.getElementById('anterior');
    const btn2 = document.getElementById('siguiente');

    const imgs = ['imagen1', 'imagen2', 'imagen3'];

    btn1.addEventListener('click', () => {

        let idImg = document.querySelector('[aria-label="image"]').id;
        idImg = Number(idImg) - 1;
        if(idImg < 1) return;
        idImg -= 1;
        cambiarUrl(imgs[idImg], idImg);


    });

    btn2.addEventListener('click', () => {

        let idImg = document.querySelector('[aria-label="image"]').id;
        idImg = Number(idImg) - 1;  
        if(idImg >= imgs.length - 1) return;
        idImg += 1;
        cambiarUrl(imgs[idImg], idImg);

    });

}

const cambiarUrl = (url, id) => {

    const image = document.querySelector('[aria-label="image"]');
    image.src = "/img/" + url + ".jpg";
    image.id = id + 1;


}

const Ejercicio9 = () => {

    const response1 = document.getElementById('resp1');
    const response2 = document.getElementById('resp2');
    const response3 = document.getElementById('resp3');
    const response4 = document.getElementById('resp4');

    const btnEnviar = document.getElementById('Ej9-Env');


    btnEnviar.addEventListener('click', () => {

        if(response1.checked) {

            crearMensaje(1, '1');

        } else {

            crearMensaje(0, '1');

        }
        if(response2.checked) {

            crearMensaje(1, '2');

        } else {

            crearMensaje(0, '2');

        }
        if(response3.checked) {

            crearMensaje(1, '3');

        } else {

            crearMensaje(0, '3');

        }
        if(response4.checked) {

            crearMensaje(1, '4');

        } else {

            crearMensaje(0, '4');

        }

    });


}

const crearMensaje = (Estado, pregunta) => {

    const message = document.createElement('p');
    const father = document.getElementById('Ej9');

    if(Estado) {

        message.innerHTML = "La respuesta de la pregunta " + pregunta + " es correcta";
        message.classList.add('text-center', 'mt-2', 'text-success');

    } else {

        message.innerHTML = "La respuesta de la pregunta " + pregunta + " es incorrecta";
        message.classList.add('text-center', 'mt-2', 'text-danger');

    }

    father.appendChild(message);

}

const Ejercicio10 = () => {

    //Seleccionar los elementos del formulario con los que se trabajará
    const usuario = document.getElementById('usuarioEj10');
    const nombre = document.getElementById('nombreEj10');
    const contraseña = document.getElementById('contraseñaEj10');
    const confirmarContraseña = document.getElementById('contraseña2Ej10');
    const email = document.getElementById('emailEj10');
    const check1 = document.getElementById('check1Ej10');
    const check2 = document.getElementById('check2Ej10');
    const hobbie1 = document.getElementById('hobbi1Ej10');
    const hobbie2 = document.getElementById('hobbi2Ej10');
    const hobbie3 = document.getElementById('hobbi3Ej10');
    const hobbie4 = document.getElementById('hobbi4Ej10');
    const selectList = document.getElementById('selectListEj10');
    const calle = document.getElementById('calleEj10');
    const numeroInterior = document.getElementById('numintEj10');
    const colonia = document.getElementById('coloniaEj10');
    const estado = document.getElementById('estadoEj10');
    const pais = document.getElementById('paisEj10');
    const cp = document.getElementById('cpEj10');

    const btn = document.getElementById('btnEnvEj10');

    //Arreglo que guarda errores generados
    let errores = [];

    btn.addEventListener('click', () => {

        //Validaciones de cada campo
        if(!usuario.value) errores.push('Debes agregar un usuario');
        if(!nombre.value) errores.push('Debes agregar un nombre');
        if(!contraseña.value) errores.push('Debes introducir una contraseña');
        if(!confirmarContraseña.value) errores.push('Debes reintroducir la contraseña');
        if(contraseña.value != confirmarContraseña.value) errores.push('Las constraseñas deben ser iguales');
        if(!email.value) errores.push('Debes ingresar un email');
        if(!(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value))) errores.push('Debes ingresar un email valido');
        if(!(check1.checked || check2.checked)) errores.push('Debes ingresar un sexo');
        if(!(hobbie1.checked || hobbie2.checked || hobbie3.checked || hobbie4.checked)) errores.push('Debes ingresar un hobbie');
        if(selectList.value == 1) errores.push('Debes seleccionar un estado civil');
        if(!calle.value) errores.push('Debes ingresar una calle');
        if(!(/^[A-Za-z-0-99999999]/.test(calle.value))) errores.push('Debes ingresar una calle válida');
        if(!numeroInterior.value) errores.push('Debes ingresar un número interior');
        if(!(/^[0-9]*(\.?)[ 0-9]+$/.test(numeroInterior.value))) errores.push('Debes ingresar un número interior válido');
        if(!colonia.value) errores.push('Debes ingresar una colonia');
        if(!(/^[A-Za-z]+$/.test(colonia.value))) errores.push('Debes ingresar una colonia válida')
        if(!estado.value) errores.push('Debes ingresar un estado');
        if(!pais.value) errores.push('Debes ingresar un pais');
        if(!cp.value) errores.push('Debes ingresar un código postal');
        if(!(/^[0-9]*(\.?)[ 0-9]+$/.test(cp.value) && cp.value.length <= 5)) errores.push('Debes ingresar un código postal válido');

        //Si existen errores se crearán los mensajes de error
        if(errores) {

            crearErrores(errores);

        }

    });

    const crearErrores = (errores) => {

        const father = document.getElementById('Ej10'); 

        //Crear un 'p' por cada error y añadirlo al section
        errores.forEach( error => {

            const newError = document.createElement('p');    
            newError.innerHTML = error;
            newError.classList.add('text-center', 'text-danger', 'border-bottom');    
            father.appendChild(newError);

        });

    }


}