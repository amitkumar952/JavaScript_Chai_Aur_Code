class User{
  constructor(email, password){
    this.email = email;
    this.password = password
  }

  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value
  }

  get password(){
    return `${this._password}Amit`
  }
  set password(value){
    this._password = value.toUpperCase()
  }
}

const Amit = new User("amit@123.ai", "abc")
console.log(Amit.email );