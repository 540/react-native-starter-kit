import React from 'react'
import { Users } from './Users'

export class UsersReactView extends React.Component {
  constructor(props) {
    super(props)

    this.presenter = props.presenter
    this.presenter.initialize(this)

    this.state = {
      users: [],
      error: undefined
    }
  }

  showError = error => {
    this.setState({ error })
  }

  showUsers = users => {
    this.setState({ users })
  }

  render() {
    const { error, users } = this.state
    return <Users users={users} error={error} />
  }
}
