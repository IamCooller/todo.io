var app = new Vue({
  el: "#app",
  data: {
    NewTasks: [
      {
        title: "New Task list",
        items: [{ text: "First" }, { text: "Fifgdfrst" }, { text: "Fdfdirst" }],
      },
    ],

    tasks: [
      {
        title: "Mysd",
        items: [{ text: "foo" }, { text: "foo" }, { text: "foo" }],
      },
      {
        title: "Mffysd",
        items: [{ text: "fdasdoo" }, { text: "fasdoo" }, { text: "fsadoo" }],
      },
    ],
    visible: true,
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
      console.log(index);
    },

    addItemName() {
      var name = document.getElementById("itemFormNew");
      this.NewTasks.title = name.value;
    },

    addItem() {
      var input = document.getElementById("itemForm");
      if (input.value !== "") {
        (this.NewTasks.tasks).push({
          text: input.value,
        });
      }
      input.value = "";
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    addNewTask() {
      /* title,items */
      this.tasks.push(this.title, this.items);
    },
  },
});
