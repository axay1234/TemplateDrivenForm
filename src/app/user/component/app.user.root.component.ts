import { Component, OnInit} from '@angular/core';
  import { UserService } from '../services/app.user.service';
  import{ User} from '../model/app.user.model'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

  @Component({
    selector: 'user-root',
    templateUrl: '../templates/app.root.user.html',
    styleUrls: ['../styles/app.user.scss']
  })
  export class UserRootComponent implements OnInit{
   
  users : User[] = [];
  enableAddUserForm :boolean= false;
  newUser: User ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    role:'',
    dateOfBirth: null
  }

    constructor(private userService : UserService){

    }

    ngOnInit(){
      this.getAllUsers()
    }

  
   
      getAllUsers(){
      this.userService.getAllUsers().subscribe(
        (returnedUsers: User[]) => this.users = returnedUsers,
      
      );
    }
     deleteUser(userId:number){
      this.userService.deleteUser(userId).subscribe((user:User)=> {
      this.getAllUsers();
      })
    }
    

    enableorDisableNewUserForm(){
      this.enableAddUserForm =!this.enableAddUserForm;
    }
    

    addNewUser(newUserForm: NgForm){
       console.log(newUserForm.value);
        console.log(this.newUser);  
  
        // let newUser: User = {
        //   username: 'Dharak',
        //   password: 'dafs',
        //   firstName: 'Akki',
        //   lastName: 'patel',
        //   phone: '999-999-9999',
        //   email: 'axay1234@gmail.com',
        //   role:' Student',
        //   dateOfBirth : new Date('16-08-1994'),
    
        // }
      this.userService.addNewUser(this.newUser).subscribe((user:User) => {
       this.getAllUsers();
      })
   
    

  } 
  // updateUser(userId:number){
  //   this.userService.getUserById(userId).subscribe((userByCalling:User) => {
  //     userByCalling.firstName = userByCalling.firstName + '.';
  //     this.userService.updateUser(userByCalling).subscribe((userUpdated:User)=>{
  //      this.getAllUsers();
  //     })
  //   })


  // }

  
}