export class CurrentUser {
    public id: number;
    public username: string;
    public fname: string;
    public lname: string;

    constructor(userJson: any) {
        this.id = parseInt(userJson['userid']);
        this.username = userJson['username'];
        this.fname = userJson['fname'];
        this.lname = userJson['lname'];
    }
}
