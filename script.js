window.onload = function(){
const savedName = localStorage.getItem('nome');
const savedAge = localStorage.getItem('idade');

 if (savedName){
    document.getElementById('nome').value = savedName;
 }
 if (savedAge){
    document.getElementById('idade').value = savedAge;
 }
};

document.getElementById('btnconfirma').addEventListener('click', function(){
const nome = document.getElementById('nome').value;
const idade = document.getElementById('idade').value;

localStorage.setItem('nome', nome);
localStorage.setItem('idade', idade);

alert('Dados salvos com sucesso!!');
});

document.getElementById('btnlimpa').addEventListener('click', function(){
    localStorage.clear();
})

