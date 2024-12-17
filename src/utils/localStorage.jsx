const employees= [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Complete the project report.",
          "date": "2024-12-20",
          "category": "Work",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Attend team meeting.",
          "date": "2024-12-18",
          "category": "Meeting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Review codebase for bugs.",
          "date": "2024-12-19",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Update documentation.",
          "date": "2024-12-20",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Prepare presentation.",
          "date": "2024-12-21",
          "category": "Presentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Organize team event.",
          "date": "2024-12-22",
          "category": "Team Building",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Fix server issues.",
          "date": "2024-12-23",
          "category": "Maintenance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Optimize database queries.",
          "date": "2024-12-24",
          "category": "Optimization",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 4",
          "description": "Schedule client meeting.",
          "date": "2024-12-25",
          "category": "Client Interaction",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Test new software release.",
          "date": "2024-12-26",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Debug application errors.",
          "date": "2024-12-27",
          "category": "Debugging",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        },
        {
          "title": "Task 3",
          "description": "Prepare training session.",
          "date": "2024-12-28",
          "category": "Training",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 4",
          "description": "Write blog post for website.",
          "date": "2024-12-29",
          "category": "Content Creation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 5",
          "description": "Conduct user interviews.",
          "date": "2024-12-30",
          "category": "User Research",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Analyze competitor products.",
          "date": "2024-12-31",
          "category": "Market Analysis",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Draft financial report.",
          "date": "2025-01-01",
          "category": "Finance",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Coordinate with marketing team.",
          "date": "2025-01-02",
          "category": "Marketing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        }
      ]
    }
  ]

  const admin=[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage = ()=>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
    const employeesData= JSON.parse(localStorage.getItem('employees'))
    const adminData= JSON.parse(localStorage.getItem('admin'))
    return{employeesData,adminData}
  }