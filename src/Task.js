class Task {
  #dateDue
  #description
  #status

  constructor(dateDue, description) {
    this.#dateDue = dateDue
    this.#description = description
    this.#status = "incomplete"
  }

  get dateDue() {
    return this.#dateDue
  }

  get description() {
    return this.#description
  }

  get status() {
    return this.#status
  }

  set status(newStatus) {
    this.#status = newStatus
  }
}

module.exports = Task
