const app = Vue.createApp({
    data() {
        return {
            userInput1: '',
            userInput2: '',
            user1Entered: false,
            user2Entered: false,
            isVisible: true,
            colorEntered: false,
        }
    },
    methods: {
        userInput1Entered() {
            if (this.userInput1.toLowerCase() === 'user1') {
                this.user1Entered = true;
                this.user2Entered = false;
            } else if (this.userInput1.toLowerCase() === 'user2') {
                this.user1Entered = false;
                this.user2Entered = true;
            }
        },
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
            if (this.user1Entered) {
                return { user1: this.user1Entered };
            } else if (this.user2Entered) {
                return { user2: this.user2Entered };
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