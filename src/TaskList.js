class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  incompletedTasks(){
    const incompletedTasks = this.tasks.filter((task) => {
      task.status === 'incomplete'
    })
    return incompletedTasks
  }

  hasDateDue(){
    const dateDueTasks = this.tasks.filter((task) => {
      task.dateDue !== null
    })
    return dateDueTasks
  }

  overdueTasks(){
    const today = new Date()
    const overdueTasks = []
    this.tasks.filter((task) => {
      if(today > task.dateDue && task.status === "incomplete" && task.dateDue !== null){
        overdueTasks.push(task)
      }
    })
    return overdueTasks
  }
}

module.exports = TaskList