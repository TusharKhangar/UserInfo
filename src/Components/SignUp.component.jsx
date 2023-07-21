import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {createUser} from "../Services/userServices.js";

const SignUp = () => {
    const [user, setUser] = useState({
        name :'',
        email :'',
        password :'',
        phone :'',
        gender :'',
        address :'',
        about :'',
    });

   const onFieldChange = (event,fieldname) =>{
       console.log(event.target.value);
       setUser({...user,[fieldname]:event.target.value});
    }
    const registerUser = (event) => {
       //for removing default functioning of Form from reactstrap
       event.preventDefault();
        console.log("Submit button clicked");

       createUser(user).then((data) => {
            console.log(data);
            alert("save User");
        }).catch((error) => {
            alert("error");
            console.log(error);
        })
    }

    //for resetting values
    const reset = () =>{
        // event.reset();
        console.log("Reset button clicked")
        setUser({
            name :'',
            email :'',
            password :'',
            phone :'',
            gender :'',
            address :'',
            about :'',
        })
    }
   // const onfieldchangeEmail = (event) =>{
   //     console.log(event.target.value);
   //     setUser({...user,email:event.target.value});
   //  }
    return (
        <Container>
            <Row>
                <Col md={{size: 6, offset: 3}}>
                    <Card className={'shadow-lg mt-5'} color={'light'}>
                        <CardBody>
                            {JSON.stringify(user)}
                            <CardHeader>
                            <h3 className={'text-center'}>SignUp</h3>
                            </CardHeader>
                            <Form onSubmit={registerUser}>
                                <div className={'my-3'}>
                                    <FormGroup floating>
                                        <Input required={true} value={user.name}
                                            onChange={(event) => onFieldChange(event,'name')}
                                               id={"name"} name={'name'} placeholder={"Enter your Name"} type={"text"}/>
                                        <Label for={'name'}>Enter Your Name</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input required={true} value={user.email}
                                            onChange={(event) => onFieldChange(event,'email')}
                                            name={'username'} id={"email"} placeholder={"Enter your Email"} type={"text"}/>
                                        <Label for={'username'}>Enter your Email</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input required={true} value={user.password}
                                            onChange={(event) => onFieldChange(event,'password')}
                                            name={'password'} id={"password"} placeholder={"Enter your password"} type={"password"}/>
                                        <Label for={'password'}>Enter your password</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input required={true} value={user.address}
                                            onChange={(event) => onFieldChange(event,'address')}
                                            name={'address'} id={"address"} placeholder={"Enter your address"}
                                                type={"textarea"}/>
                                        <Label for={'address'}>Enter your Address</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input required={true} value={user.about}
                                            onChange={(event) => onFieldChange(event,'about')}
                                            name={'about'} id={"about"} placeholder={"Enter about yourself"}
                                                type={"text"}/>
                                        <Label for={'address'}>Enter about yourself</Label>
                                    </FormGroup>

                                    <FormGroup floating>
                                        <Input  required={true} value={user.gender}
                                            onChange={(event) => onFieldChange(event,'gender')}
                                            name={'gender'} id={"gender"} placeholder={"Enter about yourself"}
                                                type={"select"}>
                                        <option>select</option>
                                        <option>male</option>
                                        <option>female</option>
                                        <option>other</option>
                                        </Input>
                                        <Label for={'address'}>Select Your Gender</Label>
                                    </FormGroup>
                                    <FormGroup floating>
                                        <Input  required={true} value={user.phone}
                                            onChange={(event) => onFieldChange(event,'phone')}
                                            name={'phone'} id={"phone"} placeholder={"Enter about yourself"}
                                                type={"number"}></Input>
                                        <Label for={'mobile'}>enter your phone no.</Label>
                                    </FormGroup>
                                    <CardFooter className={'text-center'}>
                                        <Button className={'mx-4'}  color={'success'}>Sign Up</Button>
                                        <Button className={'mx-4'} onClick={reset}  color={'warning'}>Reset</Button>
                                        <Button className={'mx-4'}  color={'danger'}>Cancel</Button>
                                    </CardFooter>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default SignUp;