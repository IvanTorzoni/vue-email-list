const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayMail: [],
        };
    },
    created() {
        this.createdEmails();
    },
    methods: {
        createdEmails: function () {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((newMail) => {
                        this.arrayMail.push(newMail.data.response);
                    });
            }
        },
    },
}).mount("#app");