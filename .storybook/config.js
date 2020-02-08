import { configure } from '@storybook/react';
import 'normalize.css/normalize.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /(\.stories\.js$|.stories.tsx$)/),
  ],
  module
)

