const Modal = {
    open(){
        //Abrir o modal
        //Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .close('active')
    }
}



const Transaction = {
    incomes() {
        //Somar as Entradas
    },
    expenses() {
        //Somar as Saidas
    },
}