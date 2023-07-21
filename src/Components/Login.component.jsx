import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, {useState} from "react";
import {loginUser} from "../Services/userServices.js";
import data from "bootstrap/js/src/dom/data.js";

const Login = () => {
    //getting login information
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    //setting fields value
    const setValue = (event,fieldName) =>{
        setLoginData({...loginData, [fieldName]: event.target.value});
    }

    //resetting the values
    const reset= () => {
        setLoginData({
            username: '',
            password: '',

        })
    }
    //submitting the form
    const  loginFormSubmit = (event) => {
        event.preventDefault();
        console.log("Logging values submitted");

        loginUser(loginData).then(data => {
            alert("login Done");
            console.log(data);
        }).catch(error => {
            alert("Error");
            console.log(error);
        })
    }

    return (
        <Container>
            <Row>
                <Col md={{size: 6, offset: 3}}>
                    <Card className={'shadow-lg m-3'} color={'light'}>
                        {JSON.stringify(loginData)}
                        <CardBody>
                            <CardHeader>
                                <h3 className={'text-center'}>Login</h3>
                            </CardHeader>
                            {/*<h3 className={'text-center'}>login here</h3>*/}
                            <Form onSubmit={loginFormSubmit}>
                                <div className={'m-4'}>
                                    <FormGroup floating className={'my-4'}>
                                        <Input onChange={(event)=> setValue(event,'username') }
                                               value={loginData.username}
                                               required={true} type={'text'} id={'username'} name={'username'}
                                               placeholder={'enter your username'}/>
                                        <Label for={'username'}>Enter your username</Label>
                                    </FormGroup>
                                    <FormGroup floating className={'my-4'}>
                                        <Input onChange={(event) => setValue(event,'password')}
                                               value={loginData.password}
                                            required={true} type={'password'} id={'password'} name={'password'}
                                               placeholder={'enter your password'}/>
                                        <Label for={'password'}>Enter your password</Label>
                                    </FormGroup>
                                    <div className={'text-center'}>
                                        <Button className={'m-5'} size={'md'} color={'success'}>Login</Button>
                                        <Button onClick={reset} className={'m-5'} size={'md'} color={'warning'}>Reset</Button>
                                    </div>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Login;