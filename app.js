const expInput = document.querySelector('#input-exp');
const amtInput = document.querySelector('#input-amt');
const cancelBtn = document.querySelector('#cancel-btn');
const addBtn = document.querySelector('#btn-add');
const expList = document.querySelector('#exp-list');
const totalExp = document.querySelector('#total');


let totalExpenses = 0;

const clear = () => {
    expInput.value = '';
    amtInput.value = '';
}

addBtn.addEventListener('click', () =>{
    const exp = expInput.value;
    const amt = amtInput.value;

    if (
        exp.trim().length <= 0 || amt <=0 || amt.trim().length <=0
    ) {
        
       
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Inputs';
        // alert.subHeader = 'Important message';
        alert.message = 'Please enter valid expense and amount !';
        alert.buttons = ['OK'];
    
        document.body.appendChild(alert);
        alert.present();
      
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = exp + ': $' + amt;

    expList.appendChild(newItem);

    totalExpenses += +amt;
    totalExp.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);