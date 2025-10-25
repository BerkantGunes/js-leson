import { Form, Modal, Input, Select, Card, Button, message } from "antd";


const CreateInvoice = ({isModalOpen, setIsModalOpen}) => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

  return (
    <Modal
        title="Create Invoice" 
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        
      >
        <Form layout={"vertical"} onFinish={onFinish}>
            <Form.Item label="Customer Name" name={"customerName"} rules={[{
                required: true,
                message: "Customer Name is required"
            }]}>
                <Input placeholder="Customer Name" />
            </Form.Item>
            <Form.Item label="Phone Number" name={"phoneNumber"} rules={[{
                required: true,
                message: "Phone Number is required"
            }]}>
                <Input placeholder="Phone Number" maxLength={11} />
            </Form.Item>
            <Form.Item label="Payment Method" name={"paymentMethod"} rules={[{
                required: true,
                message: "Choosing Payment Method is required"
            }]}>
                <Select placeholder="Choose a payment method">
                    <Select.Option value="Cash">Cash</Select.Option>
                    <Select.Option value="Credit Cart">Credit Cart</Select.Option>
                </Select>
            </Form.Item>
            <Card>
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>288.00$</span>
              </div>
              <div className="flex justify-between my-2">
                <span>VAT %8</span>
                <span className="text-red-600">+23.04$</span>
              </div>
              <div className="flex justify-between">
                <b>Total</b>
                <b>311.04$</b>
              </div>
              <div className="flex justify-end">
                <Button 
                className="mt-4" 
                type="primary" 
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
                >
                    Create Order</Button>
              </div>
              
            </Card>

        </Form>
      </Modal>
  )
}

export default CreateInvoice