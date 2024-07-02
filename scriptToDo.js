var task=document.getElementById('task')
// Criando um evento de erro caso a barra esteja vazia
function verificar(n){
    if(n===''){
        return false
    }else{
        return true
    }
}
function add(){
    // Condição baseada no que foi digitado
    if(verificar(task.value)==true){
        
        // Criando os elementos necessários
        var res=document.createElement('div')

        // Utilzando classList para estilizar os elementos
        res.classList.add("resultado")

        var check=document.createElement('input')
        check.setAttribute('type','checkbox')
        check.classList.add('checkStyle')
        var inres=document.createElement('div')
        inres.classList.add("content")
        var text=document.createElement('div')
        text.classList.add("Texto")
        var parent=document.querySelector('div.parent')
        var checkParent=document.createElement('div')
        checkParent.classList.add('checkStyle')
        let lista=[]
        //Colocando o conteúdo dentro de uma variável
        inres.innerHTML=`${task.value}`

        //Definindo os parents e childs
        res.appendChild(check)
        res.appendChild(inres)

        // Fazendo a tarefa digitada aparecer na tela
        parent.appendChild(res)
        lista.push(inres.innerHTML)

        //Criando uma função de remover as tarefas selecionadas
        var botao2=document.querySelector('button#botao2')
        botao2.addEventListener("mouseup",(e)=>{
            switch (e.button) {
                case 0:
                if (check.checked==true){
                    parent.removeChild(res)
                }
                 
                
            }
            

    })
    //Criando um evento para a task selecionada
    check.addEventListener('click', function(){
      
        if(check.checked==true){

            // "Riscando" a task selecionada
            res.style.textDecorationColor='blue'
            res.style.textDecorationLine='line-through'
            
            
            
        }
        else{
            //Removendo o risco após o check não estar mais
            res.style.textDecoration='none'
        }
        

    })
    }
    

    else if(verificar(task.value)==false){
        window.alert('ERRO[] Preencha o Campo antes de adicionar.')
    }
     
}
