class TaskList {
  #tasks

  constructor() {
    this.#tasks = []
  }

  get tasks() {
    return this.#tasks
  }

  addTask(task) {
    this.#tasks.push(task)
  }

  isIncomplete(task) {
    return task.status === "incomplete"
  }

  hasDueDate(task) {
    return task.dateDue !== null
  }

  isOverdue(today, task) {
    return task.dateDue < today
  }

  getOverdueTasks() {
    const today = new Date()
    const overdueTasks = []

    for (const task of this.#tasks) {
      if (
        this.isIncomplete(task) &&
        this.hasDueDate(task) &&
        this.isOverdue(today, task)
      ) {
        overdueTasks.push(task)
      }
    }
    return overdueTasks
  }
}

module.exports = TaskList
