class Task {
  constructor(dateDue, description) {
    //Task due date - not all tasks have a due date. If a task has no
    //due date, dueDate will be null
    this.dateDue = dateDue
    this.description = description
    this.status = "incomplete"
  }

  iscompleted(){
    return this.status === 'incomplete'
  }

  hasDateDue(){
    return this.dateDue !== null
  }
}

module.exports = Task