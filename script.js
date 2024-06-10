$(document).ready(function(){
    
    alert(`Olá, seja bem-vindo à sua lista de tarefas!`)


    $('form').on('submit', function(e){
        
        console.log('submit')
        e.preventDefault()

        const novaTarefa = $('#novaTarefa').val()
        const novoItem = $('<li></li>')

        $(`<p>${novaTarefa}</p>`).appendTo(novoItem)

        $(novoItem).appendTo('ul');
        $('#novaTarefa').val('');

        novoItem.on('click', function(e){
            if(e.target.classList.contains('checar')){
                e.target.classList.remove('checar')
            } else {
                e.target.classList.add('checar')
            }
        })
    })

})


