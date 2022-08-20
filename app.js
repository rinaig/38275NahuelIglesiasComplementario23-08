 
function loguinSistema(){ //Se crea la funcion general de loguin del sistema

    let ingresoLoguin = Number(prompt("DOCHISTO \n \nPor favor escoge la opcion: \n \n1. Ingresar al Sistema con clave Existente \n     (Ingresar Usario y Contraseña)\n \n2. Crear Usuario y Contraseña \n     (Crear nuevo usuario y contraseña)"))  //Se muestra el Usuario posibilidad de ingresar al sistema mediante un Login o crear un nuevo usuario

    //Se definen datos de usuarios existentes dentro del array.
    const usu1 = {nomUsuario: "Juan2384", passUsuGuardado: "PassUsu1"}
    const usu2 = {nomUsuario: "Alberto5689", passUsuGuardado: "PassUsu2"}
    const usu3 = {nomUsuario: "jorge2486", passUsuGuardado: "PassUsu3"}
    
    const listaUsuarios = [usu1, usu2,usu3];  //la lista de usuarios existentes en el array. 
   
    function crearNuevoUsuario(){     // Se crea la funcion para crear nuevo usuario.
                    let ingresoNewNomUsuario = prompt("Ingrese su Nuevo nombre de Usuario") 
            let ingresoNewPassUsuario = prompt("Ingrese su Nueva Clave")      

            //SE CREO NUEVO ARRAY PARA PODER ALMACENAR SOLAMENTE LOS DATOS DE USUARIO Y CONTRASEÑA CREADOS.
            const newUsu = {nuevoUsuario: ingresoNewNomUsuario, nuevaContraseña: ingresoNewPassUsuario}
            const listaNewUsuario = [newUsu];
            listaNewUsuario.push({nuevoUsuario: ingresoNewNomUsuario, nuevaContraseña: ingresoNewPassUsuario})


            listaUsuarios.push({nomUsuario: ingresoNewNomUsuario, passUsuGuardado: ingresoNewPassUsuario}) 
            alert( "USUARIO CREADO \n \nBienvenido a DOCHISTO \n \nSistema que te permitira crear tu historial de pacientes y comentarios de cada visita realizada ") 
            logicaSistema() 

            ///// SE TRAE DESDE EL HTML LOS LI DONDE SE MOSTRARA EL USUARIO Y LA CONSTRASEÑA
            let datoNewUsuario = document.getElementById('NewUsuario')
            let datoNewPass = document.getElementById('NewPass')

            /// CON ESTE FOR SE CREA UNA LISTA CON EL NOMBRE DE USUARIO Y CONTRASEÑA
            for (const pers of listaNewUsuario) {
                datoNewUsuario.innerHTML = `Usuario: ${pers.nuevoUsuario}` 
                datoNewPass.innerHTML = `Contraseña: ${pers.nuevaContraseña}`
}

}



   
        if(ingresoLoguin == 1){  // Si el usuario elije opcion 1 entonces:
        let UsuExistNomUsuario = prompt("Ingrese su nombre de usuario") //ingresa nombre usuario 
        let UsuExistPassUsuario = prompt("Ingrese su Clave") //ingresa nombre  contraseña
        for(const datos of listaUsuarios){    //recorre el array buscando dentro de datos el nombre de usuario y contraseña
       
        if (datos.nomUsuario == UsuExistNomUsuario && datos.passUsuGuardado == UsuExistPassUsuario){// si ambos coinciden da ingreso llamando a la logica del juego.
                alert("Bienvenido a DOCHISTO: " + UsuExistNomUsuario )
            logicaSistema() // llama a la logica del sistema
            break; // cuando se termina de utilizar el sistema sale   
            }
       
         else{  // si nombre de usuario y contraseña no coinciden sale del juego  
            alert("Alguno de sus datos es incorrecto, por favor vuelva a intentarlo")
            break;}
        }}

        if (ingresoLoguin == 2){ //En el caso que elija en la segunda opcion crear un usuario, se llama directamente a la funcion crearNuevoUsuario. 
        crearNuevoUsuario()
         }}

        loguinSistema() //Se llama a la funcion loguin para comenzar el mismo. 

        ////////////////// Se crea el entorno del sistema
      
        
        
         
        function logicaSistema(){

    //Se crean los pacientes existentes con datos ya guardados
    const paciente1 = {dni: 31288916, nombre: "Nahuel", apellido: "Iglesias", fechNac: ('21/10/1984'), comentariosSesion:"Comentario guardado paciente 2"}
    const paciente2 = {dni: 32166940, nombre: "Analia", apellido: "Alarcon", fechNac: ('24/02/1986'), comentariosSesion: "Comentario guardado paciente 2"}
    const paciente3 = {dni: 30555999, nombre: "Nicolas", apellido: "Moreno",fechNac: ('15/10/2009'), comentariosSesion: "Comentario guardado paciente 3"}

    const listaDePacientes = [paciente1, paciente2,paciente3]; //Se crea el array llamado lista de pacientes  


       // Se crean las 3 funciones del sistema
    function crearNuevoPaciente(){  //funcion para crear nuevos pacientes

       listaDePacientes.push({ // Se solicita el usuario todos los datos del paciente. 
       dni: Number(prompt("Ingrese DNI del Paciente")), 
       nombre: prompt("Ingrese nombre del Paciente"), 
       apellido: prompt("Ingrese Apellido del Paciente"),
       fechNac: prompt("Ingrese Fecha de Nacimiento"),
       comentariosSesion: prompt("Ingrese comentarios de Sesion"), 
       })
       alert('Usted ha dado de alta correctamente un Paciente')

            ///// SE TRAE DESDE EL HTML LOS LI DONDE SE MOSTRARAN LOS DATOS DEL NUEVO PACIENTE CREADO
            let datoNuevoDni = document.getElementById('nuevoDNI')
            let datoNuevoNombre = document.getElementById('nuevoNombre')
            let datoNuevoApellido = document.getElementById('nuevoApellido')
            let datoNuevoFechNac = document.getElementById('nuevoFechNac')
            let datoNuevoComentario = document.getElementById('nuevoComentario')


            //SE RECORRE LOS DATOS DEL NUEVO PACIENTE
            for (const datosNewPac of listaDePacientes) {
                datoNuevoDni.innerHTML = `DNI: ${datosNewPac.dni}` 
                datoNuevoNombre.innerHTML = `Nombre: ${datosNewPac.nombre}`
                datoNuevoApellido.innerHTML = `Apellido: ${datosNewPac.apellido}`
                datoNuevoFechNac.innerHTML = `Fecha de Nacimiento: ${datosNewPac.fechNac}`
                datoNuevoComentario.innerHTML = `Comentario Primera Sesion: ${datosNewPac.comentariosSesion}`
            }}

       function consultarPaciente(){
       const busquedaDNI = listaDePacientes.find(resultado => resultado.dni === Number(prompt("Ingrese el DNI a Consultar")))
       console.log(busquedaDNI) // SE MUESTRA EL RESULTADO DEL PACIENTE BUSCADO
       }

       function agrgarComentariosPaciente(){ 
           //SE CREO LA VARIABLE PARA MOSTRAR EL DNI DEL PACIENTE
           let dniPacienteBuscar = Number(prompt("Ingrese DNI de Paciente"))
           cargarComentaro = listaDePacientes.findIndex((dato => dato.dni === dniPacienteBuscar));
           listaDePacientes[cargarComentaro].comentariosSesion = prompt("Ingrese cometarios del Paciente");
           

           //SE CREA UN PARRAFO PARA MOSTRAR LOS COMENTARIOS DEL PACIENTE: 
           let nuevoComentarioPacienteDOM = document.getElementById('comentPass')
           nuevoComentarioPacienteDOM.innerHTML = `DNI: ${dniPacienteBuscar} Nuevo Comentario: ${listaDePacientes[cargarComentaro].comentariosSesion}`
        }
    

        let opcionesSistema = Number(prompt("DOCHISTO \n \nPor favor escoge la opcion: \n \n1. Crear Nuevo Paciente \n2. Consutar Paciente por DNI \n3. Actualizar Datos de Paciente \n4. Para salir del Sistema"))  //Se muestra el Usuario posibilidad de ingresar al sistema mediante un Login o crear un nuevo usuario
        

        if (opcionesSistema == 1){
             crearNuevoPaciente()}
        if(opcionesSistema == 2){
            consultarPaciente()}
        if (opcionesSistema == 3){
            agrgarComentariosPaciente()        }
        if (opcionesSistema == 4){
            alert("Gracias por Utilizar DOCHISTO \n \nLo esperamos nuevamente")      }
    }


    

    







    