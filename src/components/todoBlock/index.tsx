import done from '@/assets/done.svg';
import tool from '@/assets/more.svg';
import lock from '@/assets/timeOut.svg';
import { Dropdown, Space } from 'antd';
import './index.less';
const TodoBlock = ({ data, change }) => {
  const items = [
    {
      label: `Mark as ${data.isDone ? 'not done' : 'done'}`,
      key: '1',
      onClick: () => {
        console.log(data);
        change(data.id);
      },
    },
  ];

  return (
    <div className={`case ${data.isDone ? 'done' : ''}`}>
      <div className="leftBox">
        <img src={done} alt="" />
      </div>
      <div className="rightBox">
        <div className="top">
          <div className="title">{data.title}</div>
          <div className="createTime">{data.createTime.substring(0, 10)}</div>
        </div>
        <div className="middle">
          <div className="left">
            <div className="con">{data.content}</div>
            <div className="otherCon">
              <img src={lock} alt="" />
              <span className="time">{data.time}</span>
            </div>
          </div>
          <div className="tool">
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src={tool} alt="" />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="bottom">
          {data.Tag?.map((item: any) => {
            return (
              <div className="tag" key={item}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TodoBlock;
