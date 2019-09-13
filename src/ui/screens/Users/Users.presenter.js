import { i18n } from 'infrastructure/Locale/i18n'
import { UserService } from 'services/User'

export class UsersPresenter {
  initialize = view => (this.view = view)

  onLifecycleStart = async () => {
    try {
      this.view.showUsers(await UserService.all())
    } catch (error) {
      this.view.showError(i18n.translate('error'))
    }
  }
}
