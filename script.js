let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//Função responsável por fazer toda a mudança de horário
function updateClock() {
    let now = new Date(); //Pegamos a hora atual
    //Destrinchamos a informação data e hora que a função acima nos trouxe, pegando apenas as informações quenos interessa, que é horas, minutos e segundos.
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; // Editamos o HTML do relógio digital na tela para o usuário, com as informações reais do minuto e segundo atual
}

function fixZero(time) { //Função válida para ser usada tanto nas horas, quanto nos minutos, quanto nos segundos
    if(time < 10) { //Se a hora que eu passei para a função fixZero for menor que 10, coloque um 0 antes do número. Assim ele exibirá por exemplo: 00, 01, 02, 03, 04 até chegar no 09
        return '0' + time;
    } else { //Caso o time passado for igual ou maior a 10, aí já não precisa colocar mais o '0' antes do número. Então retorna só o número mesmo.
        return time;
    }
}

setInterval(updateClock, 1000); //Função que funcionará como um Timer, ou seja, basicamente ela rodará a função de atualizar a hora a cada 1 segundo para poder atualizar os elementos na tela.