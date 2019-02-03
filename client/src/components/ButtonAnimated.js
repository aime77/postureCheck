import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonAnimated = ({buttonVisible, buttonHiddenIconName}) => (
  <div>
    <Button animated='fade'>
      <Button.Content visible>{buttonVisible}</Button.Content>
      <Button.Content hidden><Icon name={buttonHiddenIconName} size='large'/></Button.Content>
    </Button>
  </div>
)

export default ButtonAnimated