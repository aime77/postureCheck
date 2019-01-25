import React from 'react'
import { Button } from 'semantic-ui-react'

const StartButton = ({onClick, children}) => <Button onClick={onClick} fluid >{children} Start</Button>

export default StartButton;