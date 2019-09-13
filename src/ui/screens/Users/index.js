import { ConnectComponent } from 'screens/_components/ConnectComponent'
import { UsersReactView } from './Users.view'
import { UsersPresenter } from './Users.presenter'

export const Users = ConnectComponent(UsersReactView, UsersPresenter)
