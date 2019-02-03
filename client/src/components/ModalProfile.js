import React from "react"
import { Button, Modal } from 'semantic-ui-react'
import FormNew from "./FormNew";

const ModalProfile = () => (
  <Modal className="modalSyle" trigger={<Button>Contribute to Research</Button>}>
    <Modal.Header>Profile Info</Modal.Header>
    {/* <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content> */}

    <FormNew/>
  </Modal>
)

export default ModalProfile