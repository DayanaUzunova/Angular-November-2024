//1
let a: number = 7;
let b: number = 6;

let myName: string = "Dayana";

console.log(a + b + ' ' + myName);


//2
type User = {
    name: string;
    age: number;
}

const users: User[] = [
    {
        name: 'Dayana',
        age:21,
    },
    {
        name: 'Milena',
        age: 25,
    },
];

users.forEach(user => {
    console.log(user.name);
});

//3
interface Human {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  class Person implements Human {
    firstName: string;
    lastName: string;
    age: number = 10;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getAgeMsg(): string {
      return `This human is ${this.age} y/o!`;
    }
  
    getDetails(): void {
      console.log(`Person details: ${this.firstName} ${this.lastName}`);
    }
  }
  
  const ivanPerson = new Person("Ivan", "Ivanov");
  ivanPerson.getDetails();
  
  class Student extends Person {
    grades: number[] = [6, 5, 6, 5, 4];
  
    constructor(fName: string, lName: string) {
      super(fName, lName);
    }
  }
  
  const dayanaStudent = new Student("Dayana", "Uzunova");
  dayanaStudent.getDetails();
  
  enum PaymentStatus {
    Failed = 100,
    Successful,
    Pending,
  }
  
  console.log("------------------------");
  
  //4
  function checkPaymentStatus(paymentStatusCode: number): void {
    if (paymentStatusCode === PaymentStatus.Failed) {
      console.log("Ne e minalo plashtaneto");
    } else if (paymentStatusCode === PaymentStatus.Successful) {
      console.log("Uspeshno plashtane!");
    }
  }
  
  checkPaymentStatus(101);
  

  //5
  function getIdentity<T>(id: T) {
    console.log("The type of the id is: " + typeof id);
  }
  
  getIdentity<number>(123);
  getIdentity<string>("akjsdhkasjhdkjsa");
  getIdentity<string[]>(["a", "b", "c"]);