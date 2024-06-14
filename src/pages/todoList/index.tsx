import addICon from '@/assets/add.svg';
import AddModal from '@/components/addModal';
import TodoBlock from '@/components/todoBlock/index';
import { updateStatusAsync } from '@/store/todo/todoSlice';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './index.less';
const tagLists = [
  {
    id: uuidv4(),
    title: '吃饭',
    content: '今天要吃饭',
    createTime: '2021-08-01 12:00:00',
    time: '2021-08-01 12:00:00',
    isDone: true,
    Tag: ['home'],
  },
  {
    id: uuidv4(),
    title: '睡觉',
    content: '今天要睡觉',
    createTime: '2021-08-01 12:00:00',
    time: '2021-08-01 12:00:00',
    isDone: false,
    Tag: ['home', 'work'],
  },
];

/**
 * 获取唯一标签及其出现次数
 *
 * @param tagLists 标签列表数组
 * @returns 包含唯一标签及其出现次数的数组，数组中的每个对象包含 `tag`（标签名称）和 `count`（出现次数）两个属性
 */
function getUniqueTagsAndCounts(
  tagLists: Array<any>,
): Array<{ tag: string; count: number }> {
  // 使用 reduce 函数整合 Tag 列表，key 为 Tag 名称，value 为出现次数
  const tagCounts = tagLists.reduce((accumulator, currentItem) => {
    currentItem.Tag.forEach((tag) => {
      accumulator[tag] = (accumulator[tag] || 0) + 1;
    });
    return accumulator;
  }, {});

  // 将对象转换为数组格式，便于后续处理或展示
  const uniqueTagsWithCounts = Object.entries(tagCounts).map(
    ([tag, count]) => ({
      tag,
      count,
    }),
  );

  return uniqueTagsWithCounts;
}

const Todo = () => {
  const AllList = useSelector((state) => state.todo.value);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tagList, setTagList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const arr = getUniqueTagsAndCounts(AllList);
    setTagList(arr);
  }, [AllList]);

  const searchTodo = (e) => {
    console.log(e.target.value);
  };

  /**
   * 处理状态变更的函数
   *
   * @param data 变更状态所需的数据
   * @returns 无返回值
   */
  const handleChangeStatus = (data) => {
    dispatch(updateStatusAsync({ id: data }));
    // const item = AllList.find((item) => {
    //   return item.id === data.id;
    // });
    // item.isDone = !item.isDone;
    // console.log(AllList);

    // setAllList([...AllList]);
  };

  const AllListDom = () => {
    return (
      <>
        {AllList?.map((item) => {
          return (
            <TodoBlock key={item.id} data={item} change={handleChangeStatus} />
          );
        })}
      </>
    );
  };

  return (
    <div className="content">
      <div className="title">Todo</div>
      <div className="search">
        <Input
          size="large"
          prefix={<SearchOutlined />}
          placeholder="Search for task..."
          allowClear
          onInput={searchTodo}
        />
      </div>
      <div className="tagList">
        {tagList.map((item, index) => {
          return (
            <div key={index} className="tagItem">
              {item.tag} ({item.count})
            </div>
          );
        })}
      </div>
      <div className="todoList">
        <AllListDom></AllListDom>
      </div>
      <div className="addCon" onClick={() => setIsOpen(true)}>
        <img src={addICon} alt="" />
      </div>
      <AddModal
        isOpen={isOpen}
        isEdit={isEdit}
        closeModal={() => setIsOpen(false)}
      ></AddModal>
    </div>
  );
};
export default Todo;
