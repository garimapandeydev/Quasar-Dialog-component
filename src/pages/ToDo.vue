<template>
  <div class="todo-container">
    <h4 style="color:Violet" gray>To-Do List</h4>

    <!-- Input and Add Button -->
    <div class="input-container">
      <q-input
        filled
        v-model="newTask"
        label="Add a new task"
        @keyup.enter="addTask"
        placeholder="Enter task here"
      />
      <q-btn
        label="Add"
        color="primary"
        @click="addTask"
        class="q-ml-sm"
      />
    </div>

    <!-- Task List -->
    <q-list>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        class="q-mb-xs"
      >
        <q-item-section>
          <q-checkbox
            v-model="task.completed"
            :label="task.text"
            @change="updateTaskStatus(task)"
          />
        </q-item-section>
        <q-item-section side>
          <q-btn
            flat
            color="negative"
            @click="removeTask(task.id)"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;

      this.tasks.push({
        id: Date.now(),
        text: this.newTask,
        completed: false
      });

      this.newTask = '';
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    updateTaskStatus(task) {
      // This method is automatically called when checkbox state changes
      console.log(`Task "${task.text}" status: ${task.completed}`);
    }
  }
};
</script>

<style>
.todo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.q-mb-xs {
  margin-bottom: 10px;
}
</style>
