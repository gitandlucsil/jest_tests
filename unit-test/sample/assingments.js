class Assingments{

    constructor(){
        this.value1 = null;
        this.value2 = undefined;
        this.value3 = 3;
        this.value4 = false;
        this.value5 = true;
        this.value6 = 4.56;
        this.list = [
            "item1",
            "item2",
            "item3",
            "item4"
        ]
    }

    numbersToJson(num1, num2){
        let data = {};
        data.num1 = num1;
        data.num2 = num2;
        return data;
    }

    verifyValue(value){
        if(value == 1){
            return true;
        }else{
            throw new Error('invalid value');
        }
    }
}

Object.freeze(Assingments);
export default Assingments;