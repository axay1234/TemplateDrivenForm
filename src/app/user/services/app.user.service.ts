import { Injectable } from "@angular/core";
import { User} from "../model/app.user.model";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";


const User_Service = "http://webdev-mintex.herokuapp.com/api/"
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
@Injectable()
 
export class UserService {
    constructor(private http: HttpClient) { 

    }

    getAllUsers() : Observable<User[]> {
        return this.http.get<User[]>(User_Service + 'user', httpOptions)
    }

    getUserById(userId:number) : Observable<User>{
        return this.http.get<User>(User_Service+ 'user/'+ userId, httpOptions);
    }
    
    deleteUser(userId:number) : Observable<User>{
        return this.http.delete<User>(User_Service + 'user/'+ userId, httpOptions);

    }

    addNewUser(user:User) : Observable<User>{
        return this.http.post<User>(User_Service+ 'user',user, httpOptions);
    }

    // updateUser(userToUpdate: User) : Observable<User>{
    //     return this.http.put<User>(User_Service+ 'user/'+ userToUpdate.id, userToUpdate, httpOptions);
    // }
}