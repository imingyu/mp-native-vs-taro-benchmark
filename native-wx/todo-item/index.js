Component({
    properties: {
        value: Object,
    },
    methods: {
        delete() {
            this.triggerEvent("delete");
        },
        done() {
            this.triggerEvent("done");
        },
    },
});
