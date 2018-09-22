import { GET, Path, PathParam } from 'typescript-rest';
import { User } from '../../../clyde-common/models/User';
import { Inject } from 'typescript-ioc';
import { UserService } from '../services/UserService';

@Path('/user')
export class UserController {
    @Inject
    private userService: UserService;

    /**
     * Retrieve a User.
     * @param userId: The Id of the User
     */
    @Path(':userId')
    @GET
    get(@PathParam('userId') userId: string): Promise<User> {
        return new Promise<User>((resolve, reject)=> {
            this.userService.getUser(+userId)
                .then(function(user) {
                    resolve(user);
                })
                .catch(function(err) {
                    reject(err);
                });
        });
    }
}
