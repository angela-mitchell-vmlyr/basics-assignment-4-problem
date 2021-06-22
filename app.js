const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            user1Entered: false,
            user2Entered: false
        }
    },
    methods: {
        addStyle() {
            if (this.userInput.toLowerCase() === 'user1') {
                this.user1Entered = true;
                this.user2Entered = false;
            } else if (this.userInput.toLowerCase() === 'user2') {
                this.user2Entered = true;
                this.user1Entered = false;
            }
        }
    }
});

app.mount('#assignment');