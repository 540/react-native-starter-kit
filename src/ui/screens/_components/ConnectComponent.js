import React from 'react'
import { AppState, BackHandler } from 'components/_base'
import { navigator } from 'infrastructure/navigation'
import defaultTo from 'lodash/defaultTo'
import get from 'lodash/get'

export const ConnectComponent = (View, Presenter) => {
  class ConnectedComponent extends React.Component {
    static displayName = `ConnectComponent(${View.name}, ${Presenter.name})`

    constructor(props) {
      super(props)

      this.presenter = new Presenter()

      this.state = {
        appState: AppState.currentState
      }

      if (props.navigation) {
        navigator.setNavigator(props.navigation)

        this.didFocusSubscription = props.navigation.addListener('didFocus', () =>
          BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        )
      }
    }

    onBackButtonPressAndroid = () => {
      if (this.props.navigation.isFocused() && typeof this.presenter.onHardwareBack === 'function') {
        return this.presenter.onHardwareBack()
      }

      return false
    }

    componentDidMount() {
      AppState.addEventListener('change', this.onAppStateChanged)

      if (typeof this.presenter.onLifecycleStart === 'function') {
        this.presenter.onLifecycleStart(defaultTo(get(this.props.navigation, 'state.params'), {}))
      }

      if (typeof this.presenter.onLifecycleResume === 'function') {
        this.presenter.onLifecycleResume()
      }

      if (this.props.navigation) {
        this.willBlurSubscription = this.props.navigation.addListener('willBlur', () =>
          BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        )
      }
    }

    componentWillUnmount() {
      AppState.removeEventListener('change', this.onAppStateChanged)

      if (typeof this.presenter.onLifecyclePause === 'function') {
        this.presenter.onLifecyclePause()
      }

      if (typeof this.presenter.onLifecycleStop === 'function') {
        this.presenter.onLifecycleStop()
      }

      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
      this.didFocusSubscription && this.didFocusSubscription.remove()
      this.willBlurSubscription && this.willBlurSubscription.remove()
    }

    onAppStateChanged = async nextAppState => {
      if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
        if (typeof this.presenter.onLifecycleResume === 'function') {
          this.presenter.onLifecycleResume()
        }
      }

      if (this.state.appState === 'active' && nextAppState.match(/inactive|background/)) {
        if (typeof this.presenter.onLifecyclePause === 'function') {
          this.presenter.onLifecyclePause()
        }
      }

      this.setState({ appState: nextAppState })
    }

    render() {
      const propsWithPresenter = { ...this.props, presenter: this.presenter }

      return <View {...propsWithPresenter} ref={this.props.forwardedRef} />
    }
  }

  const ForwardedConnectedComponent = React.forwardRef((props, ref) => {
    return <ConnectedComponent {...props} forwardedRef={ref} />
  })

  ForwardedConnectedComponent.navigationOptions = View.navigationOptions

  return ForwardedConnectedComponent
}
