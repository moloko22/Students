class Student{
    constructor(poss, name, lastname, year, ocenki) {
        this.poss = poss;
        this.name = name;
        this.lastname = lastname;
        this.year = year;
        this.ocenki = ocenki;
    }

    present(){
        if(this.poss.length < 25){
            return this.poss.push(true)
        }else {
            return "error"
        }
    }

    absent(){
        if(this.poss.length < 25){
            return this.poss.push(false)
        }else{
            return "error"
        }
    }

    getYear(){
    return this.year
    }

    Bal(){
    let result = this.ocenki.reduce(function(prev, curr){
        return prev + curr;
    })
    return result / this.ocenki.length
    }
}
let ololo = new Student([true] ,"Ilya", "Tsapu", 1998, [90]);
console.log(ololo);

