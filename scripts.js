window.addEventListener('load', function(){

    const button = document.querySelector('.btn');
    const toastMsg = document.querySelector('.toasts');

    const randomMsg = ['First message','Second message', 'Third message', 'Fourth message'];
    const colors = ['blue', 'green', 'red'];
    button.addEventListener('click', () => createToast());

    function createToast(){
    let toastEl = document.createElement('div');
    toastEl.classList.add('toast');
    toastEl.classList.add(getColors())
    toastEl.innerHTML = getRandomMsg()
    toastMsg.appendChild(toastEl)
    
    setTimeout(() => {
        toastEl.remove()
    }, 3000)
    }

    function getRandomMsg(){
    return randomMsg[Math.floor(Math.random() * randomMsg.length)]
    }

    function getColors(){
    return colors[Math.floor(Math.random() * colors.length)]
    }

});