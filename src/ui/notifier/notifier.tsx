import React from 'react'
import { IconName, Toaster, Position, ProgressBar } from '@blueprintjs/core'

import './notifier.scss'
import { FlexColumn } from '../../components';
import { t } from '../../locale_manager';

export const PatternAppToaster = Toaster.create({
  className: "patterns-notifier",
  position: Position.TOP,
});

export default class Notifier {
  static success(message: string, icon: IconName = 'tick') {
    PatternAppToaster.show({ message, intent: 'success', icon })
  }

  static failure(message: string, icon: IconName = 'disable') {
    PatternAppToaster.show({ message, intent: 'danger', icon })
  }

  static loader(icon: IconName) {
    return PatternAppToaster.show({
      message: <FlexColumn style={{ alignItems: 'center' }}>
        <ProgressBar intent="primary"/>
        <div className="patterns-notifier-message">{t('pleaseWait')}</div>
      </FlexColumn>,
      icon,
      intent: 'none',
      timeout: 0
    })
  }

  static upload() {
    return this.loader('upload')
  }

  static download() {
    return this.loader('download')
  }

  static stopLoading(key: string) {
    PatternAppToaster.dismiss(key)
  }

  static clear() {
    PatternAppToaster.clear()
  }

}

