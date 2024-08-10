function direcionar(){
    window.location = "/index.html";
}

function retornaAtletica(){
    return window.location.href = "../templates/atleticas.html";
}

function retornar(){
    return window.location.href = "https://arthurroma.github.io/Eventos-PF/";
}

// mecanismo de busca com autocomplete
const searchWrapper = document.querySelector('.search');
const inputBox = searchWrapper.querySelector('input');
const sugestBox = searchWrapper.querySelector('.list');
const icon = searchWrapper.querySelector('#busca');
let linkTag = searchWrapper.querySelector('a');
let webLink;

inputBox.onkeyup =(e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(e.key === 'Enter') {
        if(userData){
            window.open(`https://arthurroma.github.io/Eventos-PF/atleticas/${userData}`, '_blank');
        }
    }

    if(userData){
        icon.onclick = ()=>{
            webLink = `https://arthurroma.github.io/Eventos-PF/atleticas/${userData}`;
            linkTag.setAttribute('href', webLink);
            linkTag.click();
        }
        emptyArray = sugestoes.filter((data)=>{
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);
        let allList = sugestBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; index++){
            allList[i].setAttribute('onclick', 'select(this)');
        }
        if(e.key === 'Escape'){
            searchWrapper.classList.remove('active');
        }
    } else{
        searchWrapper.classList.remove('active');
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://arthurroma.github.io/Eventos-PF/atleticas/${selectData}`;
        linkTag.setAttribute('href', webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove('active');
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userData}</li>`
    }else{
        listData = list.join('');
    }

    sugestBox.innerHTML = listData;
}
