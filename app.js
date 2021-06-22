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