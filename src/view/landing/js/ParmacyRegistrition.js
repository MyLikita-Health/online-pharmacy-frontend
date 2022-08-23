import React, { useState } from 'react'
// import { Input } from 'react-bootstrap-typeahead'
import { Card, CardBody, Col, Container, Label, Row, Input } from 'reactstrap'

export default function ParmacyRegistrition() {

    const _form = {
        business_Name: "",
        user_Name: "",
        location: "",
        address: "",
        countact: "",
        email: "",
        registere: "",
        pscnvo: "",
        country: "",
        state: "",
        password: "",
        corred_password: "",


    }

    const handleChange = ({ target: { name, value } }) =>
        setForm((p) => ({ ...p, [name]: value }));

    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])
    return (
        <div>
            <Container className='mt-3' style={{marginTop: 117}}>
                {/* <Card> */}
                    <Row>
                        <CardBody>
                            <Row>
                                <Col md={4}>
                                    <Label>business Name</Label>
                                    <Input type="text" name='business_Name'value={form.business_Name}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>User Name</Label>
                                    <Input type="text" name='user_Name'
                                        value={form.user_Name}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>Location</Label>
                                    <Input type="text" name='location'
                                        value={form.location}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>Address</Label>
                                    <Input type="text" name='address'
                                        value={form.address}
                                        onChange={handleChange} />
                                </Col>

                                <Col md={4}>
                                    <Label>Countact</Label>
                                    <Input type="text" name='countact'
                                        value={form.countact}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>Email</Label>
                                    <Input type="text" name='email'
                                        value={form.email}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>Registere</Label>
                                    <Input type="text" name='registere'
                                        value={form.registere}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>Pscnvo</Label>
                                    <Input type="text" name='pscnvo'
                                        value={form.pscnvo}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>Country</Label>
                                    <Input type="text" name='country'
                                        value={form.country}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>State</Label>
                                    <Input type="text" name='state'
                                        value={form.state}
                                        onChange={handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label>Password</Label>
                                    <Input type="text" name='password'
                                        value={form.password}
                                        onChange={handleChange} />
                                </Col>
                               <Col md={4}>
                                    <Label>Corred_password</Label>
                                    <Input type="text" name='corred_password'
                                        value={form.corred_password}
                                        onChange={handleChange} />
                                </Col>
                            </Row>
                        </CardBody>
                    </Row>
                {/* </Card> */}
            </Container>
        </div>
    )
}
