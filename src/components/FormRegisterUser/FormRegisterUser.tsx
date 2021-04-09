import react from 'react'
import '../FormRegisterUser/styles.scss'
import {Form, Input, Button} from 'antd'
import {Link} from 'react-router-dom'

export const FormRegisterUser : React.FC = () => {

  const onFinish = (values : any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo : any) => {
    console.log('Failed:', errorInfo);
  };


  return (

    <>
      <div id="divMain">
      <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Enter your username" className="inputForm" type="text" />
      </Form.Item>

      <Form.Item
        label="Telephone"
        name="tel"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please enter with your telphone!',
        //   },
        // ]}
      >
        <Input maxLength={11} placeholder="(DDD) Number" className="inputForm" type="tel" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            max: 20,
            min: 8,
            message: 'The email must contain a minimum of 8 characters and a maximum of 20',
          },
        ]}
      >
        <Input placeholder="Enter your email" className="inputForm" type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            max: 12,
            min: 8,
            message: 'The password must contain a minimum of 8 characters and a maximum of 12',
          },
        ]}
      >
        <Input placeholder="Enter your password" className="inputForm" type="password" />
      </Form.Item>

      <Form.Item
        label="Repeat Password"
        name="repeat-password"
        rules={[
          {
            required: true,
            max: 12,
            min: 8,
            message: 'The password must contain a minimum of 8 characters and a maximum of 12',
          },
        ]}
      >
        <Input placeholder="Enter your repeat password" className="inputForm" type="password" />
      </Form.Item>

      <div id="divBtn">
        <Link to="/"><Button> Sign Up </Button></Link>
        <Link to="/"><Button> Return to back </Button></Link>
      </div>

      </Form>
      </div>
    </>

  )

}