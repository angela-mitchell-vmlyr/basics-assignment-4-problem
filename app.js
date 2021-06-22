const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            userInput2: '',
            isVisible: true,
            colorEntered: false,
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        isColorEntered(event) {
            if (event.key === 'Enter') {
                this.colorEntered = true;
            }
        }
    },
    computed: {
        colors() {
            if (this.inputClass === 'user1') {
                return { user1: true };
            } else if (this.inputClass === 'user2') {
                return { user2: true };
            }
        },
        visibility() {
            if (this.isVisible) {
                return { visible: this.isVisible };
            } else {
                return { hidden: !this.isVisible };
            }
        }
    },
});

app.mount('#assignment');