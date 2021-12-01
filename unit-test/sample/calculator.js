class Calculator{

    constructor(){
    }
    sum(num1, num2){
        return num1 + num2;
    }
    sub(num1, num2){
        return num1 - num2;
    }
    mul(num1, num2){
        return num1 * num2;
    }
    div(num1, num2){
        if(num2 > 0){
            return num1 / num2;
        }else{
            return 0;
        }
    }
}

Object.freeze(Calculator);
export default Calculator;