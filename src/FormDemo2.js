import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from 'alertifyjs'

export default class App extends Component {
    state = { email: "", password: "", city: "", description: "" }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " Added to DB!");
        alertify.success(this.state.city + " Added to DB!");
        alertify.success(this.state.password + " Added to DB!");
        alertify.success(this.state.description + " Added to DB!");
    }
    render() {
        return (
            <div>

                <Form onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type='email'
                            name='emai' id='email'
                            placeholder='Enter email'
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type='password'
                            name='password' id='password'
                            placeholder='Enter password'
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type='textarea'
                            name='description' id='description'
                            placeholder='Enter description'
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type='select' name='city' id='city' onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Antalya</option>
                            <option>Bursa</option>
                        </Input>

                    </FormGroup>
                    <Button type='submit'>Save</Button>

                </Form>

            </div>
        )
    }
}
