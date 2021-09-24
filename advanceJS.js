class bankAccount{
    accNumber;
    custId;
    accType;
    accBalance;

    // constructor(){
    //     console.log("Default constructor");
    // }
    constructor(accNum,cid,accTyp,accBal){
        console.log("Parameterizedd constructor");
        this.accNumber = accNum;
        this.custId = cid;
        this.accType = accTyp;
        this.accBalance = accBal;
    }
    showDetais(){
        console.log(this.accNumber);
        console.log(this.accType);
        console.log(this.accBalance);
        console.log(this.custId);
    }
    showDetails3(){
        return 'number:${this.accNumber} id:number${this.cistId} balance:${this.accTypee}';
        // can return number
    }
}

let account1 = new bankAccount();
let account2 = new bankAccount(1234,1111,"saving",6789);
console.log(account1);
console.log(account2.accBalance);
console.log(account1.accBalance);

account1.showDetais();
account2.showDetais();
