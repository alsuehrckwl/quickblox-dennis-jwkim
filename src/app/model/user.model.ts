export class User {

    id:    number;
    name:  string;
    login: string;
    pass:  string;

    constructor(id: number, name: string, login: string, pass: string) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.pass = pass;
    }

    // get userId(): number {
    //     return this.id;
    // }
    // get userName(): string {
    //     return this.name;
    // }
    // get userLogin(): string {
    //     return this.login;
    // }
    // get userPass(): string {
    //     return this.pass;
    // }
    // set userId(newId: number) {
    //     this.id = newId;
    // }
    // set userName(newName: string) {
    //     this.name = newName;
    // }
    // set userLogin(newLogin: string) {
    //     this.login = newLogin;
    // }
    // set userPass(newPass: string) {
    //     this.pass = newPass;
    // }

}

// user template
// users = [
//     { id: 30566376, name: 'Tester', login: 'atlastester', pass: 'test1234' },
//     { id: 30789373, name: 'SecondTester', login: 'atlastester2', pass: 'test1234' }
// ];
