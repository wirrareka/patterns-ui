import React from 'react'
import { Button, Classes, Dialog, NonIdealState, IconName } from '@blueprintjs/core'
import { FlexRow } from '../../components'
import PatternApp from '../../pattern_app'
import { t } from '../../locale_manager'

interface Props {
}

interface State {
  isOpen: boolean
  title?: string,
  description?: string,
  action?: React.ReactElement,
  icon: IconName
}

export default class Confirm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
      icon: 'help'
    }
    this.onConfirm = this.onConfirm.bind(this)
  }

  componentDidMount() {
    PatternApp.observe(this.onConfirm)
  }

  componentWillUnmount() {
    PatternApp.cancel(this.onConfirm)
  }

  onConfirm(event?: string, data?: any) {
    if (event !== PatternApp.Events.Confirm) return

    if (!data) {
      console.info('cannot notify, data object not present')
      return
    }

    this.setState({
      isOpen: true,
      title: data.title,
      description: data.description,
      action: data.action,
      icon: data.icon || 'help'
    })
  }

  render() {
    return <Dialog
      isOpen={this.state.isOpen}
      onClose={() => this.setState({ isOpen: false })}>
      <div className={Classes.DIALOG_BODY}>
        <NonIdealState
          icon={this.state.icon}
          title={this.state.title}
          description={this.state.description}
          action={
            <FlexRow>
              <Button
                icon="cross"
                text={t('cancel')}
                minimal
                style={{ marginRight: 12 }}
                onClick={() => this.setState({ isOpen: false })}
              />
              <div onClick={evt => this.setState({ isOpen: false })}>
                { this.state.action }
              </div>
            </FlexRow>
          }
        />
      </div>
    </Dialog>
  }
}

