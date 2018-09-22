import { User } from '../../../clyde-common/models/User';

export class UserService {

    public getUser(userId: number): Promise<User> {
        return new Promise<User>((resolve, reject)=> {
            // do something, like query DB
            resolve(this.newUser());
        });
    }

    private newUser(): User {
        const user = new User();
        user.Id = 1;
        user.Email = 'clyde@fatcat.com';
        user.Password = 'shhDontte11';
        user.Company.Name = 'Temptations';
        user.Company.Address.City = 'Berkeley';
        user.Company.Address.State = 'California';
        return user;
    }
}
