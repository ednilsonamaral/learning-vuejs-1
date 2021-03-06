Vue.filter('upper', (value) => {
	return value.toUpperCase();
});

Vue.filter('limit', (value, limit = 15) => {
	const length = value.length;

	if (length <= limit) {
		return value;
	}

	return `${value.substr(0, limit)}...`;
});

const clone = (obj) => JSON.parse(JSON.stringify(obj));

new Vue({
	el: 'body',

	data: {
		title: 'Diretivas - v-on',
		tasks: [
			{
				value: 'Task 1',
				completed: false
			},
			{
				value: 'Task 2',
				completed: true
			}
		],
		newTask: {}
	},

	computed: {
		// não deixa add novas tasks vazias na lista
		canAddNewTask() {
			return this.newTask.value.length > 0;
		}
	},

	methods: {
		addTask() {
			if (this.canAddNewTask) {
				const task = clone(this.newTask);
				this.tasks.push(task);
				this.newTask = {}; // limpa o campo do formulário
			}
		}
	}
});
