//Como add eventos com os elementos JQUERY !

const header = document.querySelector('header button')
$(document).ready(function() {    //pratica comum! é usado para garantir que a FUNCTION so vai rodar dps que todo o DOCUMENT HTML estiver carregado

    $('header button').click(function() {
        $('form').slideDown();  //quando clicar no botão NOVA IMAGEM+ o formulario vai descer com uma animação suave.
    }) 

    $('#botao-cancelar').click(function() {
        $('form').slideUp();  //quando clicar no botão CANCELAR o formulario vai subir com uma animacao suave.
    }) 

    $('form').on('submit',function(e) {  //qnd clicamos no botao ADD
        e.preventDefault();
        const endImgNova = $('#end-img-nova').val();   //val = value. Obtemos o valor do campo de entrada do URL e armazena na variavel const endImgNova.
        const novoItem = $ ('<li style="display:none" >  </li>');   //criacao de um novo item na lista. As imgs novas submetidas ficam nas tags LI. 
                                                                    //display:none para nao serem exibidas agora, so mais tarde com o fadeIn()
        $ (`<img src=" ${endImgNova}" />`).appendTo(novoItem);   //cria uma nova IMG com o SRC da URL submetida! essa funcao pega o end da img nova submetida e coloca na const novo item, ou seja, dentro das tags ti.

        $(` <div class="overlay-imagem-link">           
                <a href="${endImgNova}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
                </a>
            </div> `).appendTo(novoItem);  // uma nova div é criada com as informacoes da nova foto add

        $(novoItem).appendTo('ul');  //novo item é add na galeria! o novoItem aqui já tem todas as conf para entrar na tag UL                
        $(novoItem).fadeIn(1000);  //a funcao fadeIn() faz com que o item apareca gradualmente ao longo de 1 segundo = 1000 milisegundos
        $('#end-img-nova').val('');  //vamos limpar o campo dps que foi add uma nova url. pra isso selecionamos o campo pelo id.
    })    
}) 



