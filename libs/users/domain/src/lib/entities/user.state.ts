import { Interest } from "./interest.model";
import { User } from "./user.model";
import { UserClientSideFilters, UserSearchCriteria } from "./userSearchCriteria.model"

export interface UserState
{
  serverSideCriteria:UserSearchCriteria;
  clientSideFilters:UserClientSideFilters;
  selectedUser:User;
  usersFromServer:User[];
  users:User[];
  loading:boolean;
}
