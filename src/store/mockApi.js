const mockData = [
  {
    id: 1,
    name: "name 1",
    description: "description 1",
    status: "new",
    priority: "low",
    deadline: "2024-15-09",
    done: false,
    time: "2024-12-09 10:15",
  },
  {
    id: 2,
    name: "name 2",
    description: "description 2",
    status: "new",
    priority: "low",
    deadline: "2024-15-09",
    done: false,
    time: "2024-12-09 10:15",
  },
  {
    id: 3,
    name: "name 3",
    description: "description 3",
    status: "new",
    priority: "low",
    deadline: "2024-15-09",
    done: false,
    time: "2024-12-09 10:15",
  },
  {
    id: 4,
    name: "name 4",
    description: "description 4",
    status: "new",
    priority: "low",
    deadline: "2024-15-09",
    done: false,
    time: "2024-12-09 10:15",
  },
  {
    id: 5,
    name: "name 5",
    description: "description 5",
    status: "new",
    priority: "low",
    deadline: "2024-15-09",
    done: false,
    time: "2024-12-09 10:15",
  },
];
export const fetchTasks = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });

export const saveTask = (task) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...task, id: Date.now() });
    }, 500);
  });
