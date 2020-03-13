$(document).ready(function(){
    $('#btnSend').click(function(){
        
        var errores ='';
        //validando el nombre........
        if($('#names').val()==''){
            errores += '<p>Escriba un nombre</p>';
            //PARA SUBRRAYAR LOS CUADROS DE LOS ERRORES
            $('#names').css("border-bottom-color","#F14B4B")
        }
        //para quitar el subrayado rojo
        else{
            $('#names').css("border-bottom-color","#D1D1D1")
        }
        //validando el correo
        if($('#email').val()==''){
            errores += '<p>Escriba su correo </p>';
            $('#email').css("border-bottom-color","#F14B4B")
        }
        //para quitar el subrayado rojo
        else{
            $('#email').css("border-bottom-color","#D1D1D1")
        }
        //validar mensaje
        if($('#mensaje').val()==''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color","#F14B4B")
        }
        //para quitar el subrayado rojo
        else{
            $('#mensaje').css("border-bottom-color","#D1D1D1")
        }
        //alert(errores);
        
        //vamos a mostrar el mensaje de error con la ventana de html*/
        if(errores==''==false){
            var mensajeModal = '<div class="modal_wrap">'+
                 '<div class="mensaje_modal">'+
                 '<h3>errores encontrados</h3>'+
                 errores+
                 '<span id="btnClose">Cerrar</span>'+
                 '</div>'
            '</div>'
            //mostrar el mensaje de error de html
            $('body').append(mensajeModal);
        }

        //cerrando el mensaje de errores
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        })

    });
});