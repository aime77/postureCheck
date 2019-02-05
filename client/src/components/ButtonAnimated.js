import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonAnimated = ({buttonVisible, buttonHiddenIconName, href}) => (
  <div>
    <Button animated>
      <Button.Content visible>{buttonVisible}</Button.Content>
      <Button.Content hidden href={href}><Icon name={buttonHiddenIconName} size='large'/></Button.Content>
    </Button>
  </div>
)

export default ButtonAnimated