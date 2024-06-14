import { useEffect, useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksContext, TasksDispatchContext } from './TasksContext';

export default function TaskApp() {
  useEffect(() => {
    console.log('页面加载');

    return () => {
      console.log('页面卸载？');
    };
  }, []);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(task, action) {
  switch (action.type) {
    case 'added': {
      if (!action.text) {
        return task;
      }
      return [
        ...task,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return task.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return task.filter((t) => t.id !== action.id);
    }
    default: {
      return [];
      // throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];
