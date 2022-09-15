class TodoApp {
  #count = 0;
  #todos = {};
  #errMsg1 = "No tasks available";
  #errMsg2 = "No tasks available, Please add Task first!";

  addTask(task) {
    this.#count++;
    const currTask = {
      id: this.#count,
      task: task,
      isDone: false,
    };
    this.#todos[this.#count] = currTask;
    // console.log(this.#todos);
    console.log(`task${this.#count} added`);
  }

  deleteTask(id) {
    if (!this.#todos[id]) {
      console.log(this.#errMsg2);
      return;
    }
    delete this.#todos[id];
    console.log(`Task${id} deleted`);
  }

  updateTaskText(id, text) {
    if (!this.#todos[id]) {
      console.log(this.#errMsg2);
      return;
    }
    this.#todos[id].task = text;
    console.log(`Task${id} updated`);
  }

  updateTaskAsDone(id) {
    if (!this.#todos[id]) {
      console.log(this.#errMsg2);
      return;
    }
    this.#todos[id].isDone = true;
    console.log(`Task${id} marked as done!`);
  }

  getAllTasks() {
    if (Object.keys(this.#todos).length === 0) {
      console.log(this.#errMsg1);
      return;
    }

    for (let [i, j] of Object.entries(this.#todos)) {
      console.log(`id = ${j.id} 
text = ${j.task} 
isDone = ${j.isDone} 
      `);
    }
  }
}

const todoApp = new TodoApp();

todoApp.getAllTasks();
// -> No tasks added!
todoApp.deleteTask(1);
// -> No tasks available. Please add task first!
todoApp.updateTaskAsDone(1);
// -> No tasks available. Please add task first!
todoApp.updateTaskText(1, "text 1");
// -> No tasks available. Please add task first!​
todoApp.addTask("This is task 1");
// -> Task1 added
todoApp.getAllTasks();
// -> Id: 1 text: This is task 1 isDone: false
todoApp.updateTaskAsDone(1);
// -> Task1  marked as done!
todoApp.getAllTasks();
// -> Id: 1 text: This is task 1 isDone: true
todoApp.updateTaskText(1, "task 1 text updated");
// -> Task1 updated
// -> Id: 1 text: task 1 text updated isDone: true
todoApp.getAllTasks();
// -> Id: 1 text: task 1 text updated isDone: true
todoApp.deleteTask(1);
// -> Task1 deleted
todoApp.getAllTasks();
// -> No tasks added!
