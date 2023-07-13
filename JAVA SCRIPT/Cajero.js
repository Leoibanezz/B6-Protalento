const input = document.querySelector(`cantidad_a_depositar`)
const buttonDeposito = document.querySelector(`#boton_deposito`)
const tagDineroEnCuenta = document.querySelector(`#tag_cuenta`)

const cuentaPersonal = {
    saldo : 0,
    nombre: "leo",
    cuenta: "1212312"
    contraseña :'12393'

}

buttonDeposito.addEventListener(`click`,function(e){

    console.log(e)

    const deposito = input.value
    
    const numeroDeposito = +deposito
    console.log(typeof num)
})