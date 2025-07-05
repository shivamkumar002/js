// stack (primitive) , heap(non-primitive)

//  NOTE:- In stack we give the copy of the value 
// (means a copy of the original value) if any changes made in copy then it doesn't affect the original value.

let my_mail= "kumarshivam49060"

let anothermail= my_mail

anothermail="shivambabu465"

// console.log(my_mail);
// console.log(anothermail);


// NOTE 2:- In heap we take the reference of the original value 
// (it means if we make any changes in reference value then it refelect in the original value)

let userOne ={
    email:"user@gmial.com",
    upi:"user@ybl"

}

let userTwo= userOne

    userTwo.email="kumarshivam49060@gmail.com",
    userTwo.upi="9335157751@ybl"

    // console.log(userOne.email);
    console.log(userTwo.upi);

    





