//Como add eventos com os elementos JQUERY !

const header = document.querySelector('header button')
$(document).ready(function() {    //p chamar o jquery usamos o $

//outra forma mais simplificada de fazer:
    $('header button').click(function() {
        $('form').slideDown();  //quando clicar no botão NOVA IMAGEM+ o formulario vai descer
    }) 

    $('#botao-cancelar').click(function() {
        $('form').slideUp();  //quando clicar no botão CANCELAR o formulario vai subir
    }) 

//segunda forma de add eventos
    $('form').on('submit',function(e) {
        e.preventDefault();
        const endImgNova = $('#end-img-nova').val();   //val = value. Estamos pegando as img novas subsmetidas.
        const novoItem = $ ('<li style="display:none" >  </li>');              //as imgs novas submetidas tem que ficar nas tags LI.
        
        $ (`<img src=" ${endImgNova}" />`).appendTo(novoItem);   //essa funcao pega o end da img nova submetida e coloca na const novo item, ou seja, dentro das tags ti.

        $(` <div class="overlay-imagem-link">
                <a href="${endImgNova}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
                </a>
            </div> `).appendTo(novoItem);

        $(novoItem).appendTo('ul');  //o novoItem aqui já tem todas as conf para entrar na tag UL                
        $(novoItem).fadeIn(1000);
        $('#end-img-nova').val('');  //vamos limpar o campo dps que foi add uma nova url. pra isso selecionamos o campo
    })    
}) 



