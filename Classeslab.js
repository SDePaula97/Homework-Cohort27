class person{
        constructor(name, height, hair, eyes){
            this.name = name
            this.height = height
            this.hair = hair
            this.eyes = eyes
        }
        walk(){
    
        }
        think(other){
            
    
        }
        speak(){
    
        }
    }
    class PostalWorkers extends person{
        walkAcrossRoad(){
            console.log(`${this.name} crossed the road.`)
    
        }
        thinksLogically(){
            console.log(`${this.name} thinks very logically.`)
    
        }
        speaksMultipleLanguages(){
            console.log(`${this.name} is fluent in many languages.`)
    
        }
    }
    const Sam = new PostalWorkers ("Sam", '1/22/87', "black")
    Sam.walksAcrossRoad()
    Sam.thinksLogically()
    Sam.speaksMultiplelanguages()
    
    const Sara = new PostalWorkers ("Sara", '4/02/96', "blonde")
    Sara.walksAcrossRoad()
    Sara.thinksLogically()
    Sara.wspeaksMultipleLanguages()
    
    class Chef extends person{
        cookFood(){
            console.log(`${this.name} cooks amazing italian food.`)
    
        }
        makeDessert(){
            console.log(`${this.name} needs to up their dessert game!`)
    
        }
        getsAngry(){
            console.log(`${this.name} yells at the sous chef.`)
    
        }
    }
    const Anzivino = new Chef('Anzivino', 'Italian', '40')
    Anzivino.cooksFood()
    Anzivino.makesDessert()
    Anzivino.getsAngry()
    const Miyoko = new Chef('petite', 'Japanese', '60')
    Miyoko.cooksFood()
    Miyoko.makesDessert()
    Miyoko.getsAngry()
     





//////////////////   Hungry for more     //////////




class BankAccount {
    constructor(ownerName, balance, accountNumber) {
        this.ownerName = ownerName
        this.balance = balance
        this.accountNumber = accountNumber
    }
    deposit(depositAmount){
        this.deposit += depositAmount
        console.log(`Your new balance is ${this.balance}`)
    
    }  
      withdraw(withdrawalAmount){
        this.withdraw -= withdrawalAmount
        console.log(`Your new balance is ${this.balance}`)
    }
}
let chase = new BankAccount("Svetly", 1500, '3681012')
chase.withdraw(100)

console.log(BankAccount(100))

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, accountNumber, overdraftEnabled = true) {

        super(ownerName, balance, accountNumber)
    }
    withdraw(withdrawalAmount){
        if (this.overdraftEnabled)
           super.withdraw(withdrawalAmount)
    } 
    else {
        console.log('Sorry')
    }
}
    let Svetly = new CheckingAccount ("Svetly", 1200, "3681012", true)
    Svetly.withdraw(100)