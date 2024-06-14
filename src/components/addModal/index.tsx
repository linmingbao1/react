import { addTodo } from '@/store/todo/todoSlice';
import { DatePicker, Form, Input, Modal, Select } from 'antd';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './index.less';

interface AddModalProps {
  isOpen: boolean;
  isEdit: boolean;
  closeModal: () => void;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const addModal: React.FC<AddModalProps> = ({ isOpen, isEdit, closeModal }) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const options = [
    { value: 'home', label: 'home' },
    { value: 'work', label: 'work' },
  ];
  const handleOk = async () => {
    const values = await form.validateFields();
    values.id = uuidv4();
    values.time = dayjs(values.time).format('YYYY-MM-DD HH:mm:ss');
    values.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    values.isDone = false;
    dispatch(addTodo(values));
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal
      title={isEdit ? '编辑' : '新增'}
      open={isOpen} // 使用visible替代open，因为open是ModalProps中的属性
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form {...layout} form={form} name="addModal" style={{ maxWidth: 600 }}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="content" label="Content" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="Tag" label="Tag" rules={[{ required: true }]}>
          <Select mode="multiple" options={options}></Select>
        </Form.Item>
        <Form.Item name="time" label="Time" rules={[{ required: true }]}>
          <DatePicker
            showTime
            className="datePicker"
            format="YYYY-MM-DD HH:mm:ss"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default addModal;
