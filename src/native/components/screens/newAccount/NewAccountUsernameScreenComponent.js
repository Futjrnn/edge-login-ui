import React, { Component } from 'react'
import { Text, View } from 'react-native'

import HeaderConnector from '../../../connectors/componentConnectors/HeaderConnector'
import UsernameConnector from '../../../connectors/componentConnectors/UsernameConnector'
import { Button } from '../../common'

// import * as Constants from '../../../common/constants'

export default class LandingScreenComponent extends Component {
  componentWillMount () {
    this.setState({
      isProcessing: false
    })
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({
        isProcessing: false
      })
    }
  }

  render () {
    const { NewAccountUsernameScreenStyle } = this.props.styles
    return (
      <View style={NewAccountUsernameScreenStyle.screen}>
        <HeaderConnector style={NewAccountUsernameScreenStyle.header} />
        <View style={NewAccountUsernameScreenStyle.pageContainer}>
          <View style={NewAccountUsernameScreenStyle.instructions}>
            <Text style={NewAccountUsernameScreenStyle.instructionsText}>
              Your username will be required to sign in to your Edge account on
              this and other devices.
            </Text>
          </View>
          <UsernameConnector
            style={NewAccountUsernameScreenStyle.inputBox}
            onFinish={this.onNextPress.bind(this)}
          />
          <View style={NewAccountUsernameScreenStyle.shim} />
          <Button
            onPress={this.onNextPress.bind(this)}
            downStyle={NewAccountUsernameScreenStyle.nextButton.downStyle}
            downTextStyle={
              NewAccountUsernameScreenStyle.nextButton.downTextStyle
            }
            upStyle={NewAccountUsernameScreenStyle.nextButton.upStyle}
            upTextStyle={NewAccountUsernameScreenStyle.nextButton.upTextStyle}
            label={'NEXT'}
            isThinking={this.state.isProcessing}
            doesThink
          />
        </View>
      </View>
    )
  }
  onNextPress () {
    if (this.props.usernameErrorMessage) {
      return
    }
    this.setState({
      isProcessing: true
    })
    this.props.checkUsernameForAvailabilty(this.props.username)
  }
}
