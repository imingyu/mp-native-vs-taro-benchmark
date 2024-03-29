let globalId = 0;
Component({
    data: {
        text: "",
        list: [
            {
                id: ++globalId,
                text: "wxml",
            },
            {
                id: ++globalId,
                text: "wxss",
            },
        ],
    },
    methods: {
        input(e) {
            this.setData({
                text: e.detail.value || "",
            });
        },
        add() {
            if (!this.data.text) {
                return;
            }
            this.setData({
                [`list[${this.data.list.length}]`]: {
                    id: ++globalId,
                    text: this.data.text,
                },
                text: "",
            });
        },
        delete(e) {
            const newList = this.data.list.slice();
            newList.splice(e.currentTarget.dataset.index, 1);
            this.setData({
                list: newList,
            });
        },
        done(e) {
            const index = e.currentTarget.dataset.index;
            this.setData({
                [`list[${index}].done`]: !this.data.list[index].done,
            });
        },
    },
});
