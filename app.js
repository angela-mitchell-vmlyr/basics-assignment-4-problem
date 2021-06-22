const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            user1Entered: false,
            user2Entered: false,
            isVisible: true,
        }
    },
    methods: {
        userInputEntered() {
            if (this.userInput.toLowerCase() === 'user1') {
                this.user1Entered = true;
                this.user2Entered = false;
            } else if (this.userInput.toLowerCase() === 'user2') {
                this.user1Entered = false;
                this.user2Entered = true;
            }
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        colors() {
            if (this.userInput.toLowerCase() === 'user1') {
                return { user1: this.user1Entered };
            } else if (this.userInput.toLowerCase() === 'user2') {
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