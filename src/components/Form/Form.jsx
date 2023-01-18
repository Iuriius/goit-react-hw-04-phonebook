import React, { Component } from 'react';
import { Label, Input, Button, FormContainer } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { addNewContact } = this.props;
    addNewContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit} autoComplete="off">
        <div>
          <Label>
            Name
            <Input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={number}
              placeholder="Enter number 000-00-00"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </div>
        <Button disabled={!name || !number}>Add new contact</Button>
      </FormContainer>
    );
  }
}

export default Form;
