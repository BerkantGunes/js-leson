import React, { useState } from 'react'
import "./style.css";
import {PlusOutlined} from "@ant-design/icons";
import {Button, Form, Input, Modal} from 'antd';

const categories = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // client tarafindan veritabanina ekleme icin fetch ozelligini kullaniriz
    

  return (
    <ul className='flex gap-4 md:flex-col text-lg'>
        <li className='category-item'>
            <span>All</span>
        </li>
        <li className='category-item'>
            <span>Seasional Drinks</span>
        </li>
        <li className='category-item'>
            <span>Espresso Drinks</span>
        </li>
        <li className='category-item'>
            <span>Refresha Drinks</span>
        </li>
        <li className='category-item'>
            <span>Tea & Other Beverages</span>
        </li>
        <li className='category-item'>
            <span>Cakes & Cookies</span>
        </li>
        <li className='category-item'>
            <span>Sandwiches</span>
        </li>
        <li className='category-item'>
            <span>Sandwiches</span>
        </li>
        <li className='category-item'>
            <span>Sandwiches</span>
        </li>
        <li className='category-item !bg-purple-800 hover:opacity-90' onClick={()=> setIsAddModalOpen(true)}>
            <PlusOutlined className='md:text-2xl' />
        </li>
        <Modal title="Add New Category" open={isAddModalOpen} onCancel={()=> setIsAddModalOpen(false)} footer={false}>
            <Form layout='vertical'>
                <Form.Item name="title" label="Add Category" rules={[{required: true, message: "Category field can not be null!"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item className='flex justify-end mb-0'>
                    <Button type='primary' htmlType='submit'>Add</Button>
                </Form.Item>
            </Form>
        </Modal>
    </ul>
  )
}

export default categories