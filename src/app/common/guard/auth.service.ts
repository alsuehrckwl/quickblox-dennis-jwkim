import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    // auth service
    isLogin: boolean;
    redirectUrl: string;
    userId: string;
    userPass: string;
    id: number;
    userObj = {
        id:   0,
        name: '',
        pass: '',
        login: ''
    };

    users = [
        { id: 30566376, name: 'Tester', login: 'atlastester', pass: 'test1234' },
        { id: 30789373, name: 'SecondTester', login: 'atlastester2', pass: 'test1234' }
    ];

    // userPromise = Promise.resolve(this.users);

    // checkId(userId: string): Promise<User> {
    //     console.log(this.userPromise.then(children => children.find(children => children.name = userId)));

    //     return;
    //     // return this.userPromise
    //     // .then(children => children.find(children => children.name = userId));
    // ;
    // }

    login(userId: string, userPass: string): any {
        console.log('login process..');

        this.users.forEach(obj => {
            if ( userId === obj.name && userPass === obj.pass ) {
                this.isLogin = true;
                this.userObj.id    = obj.id;
                this.userObj.name  = obj.name;
                this.userObj.pass  = obj.pass;
                this.userObj.login = obj.login
            }
        });

        console.log(this.userObj);

        return this.isLogin;

    }

    logout(): void {
        this.isLogin = false;
    }

}
