class bankAccount1{
    accNumber:any;
    custId:number;
    accType:string;
    accBalance:number;

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

    showDetails(){
        // 
        return 0;
    }
    
    showDetails1():void{
        // cant return number
    }
    
    showDetails2():number{
        return 0;
        // can return number
    }
    showDetails3():string{
        return 'number:${this.accNumber} id:number${this.cistId} balance:${this.accTypee}'
        // can return number
    }
}

// let acc1 = new bankAccount();
let acc2 = new bankAccount(1234,1111,"saving",6789);

let details = acc2.showDetails3();
console.log(details);