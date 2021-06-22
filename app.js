const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            inputColor: '',
            paragraphIsVisible: true,
            colorEntered: false,
        }
    },
    methods: {
        toggleVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        },
        isColorEntered(event) {
            if (event.key === 'Enter') {
                this.colorEntered = true;
            }
        }
    },
    computed: {
        paragraphClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            }
        },
    },
});

app.mount('#assignment');