"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            locations: [],
            page: 1,
            urlNext: null,
            urlPrev: null,
            loader: true,
        };
    },

    created() {
        this.page = JSON.parse(localStorage.getItem("pageLocation")) || 1;
        this.getLocations(this.page);
    },

    methods: {
        getLocations(page) {
            axios(`https://rickandmortyapi.com/api/location?page=${page}`)
                .then(({ data }) => {
                    this.locations = [...data.results];
                    this.urlNext = data.info.next;
                    this.urlPrev = data.info.prev;
                    setTimeout(() => {
                        this.loader = false;
                    }, 1500);
                })
                .catch((err) => console.log(err));
        },
        prevPage() {
            this.loader = true;
            this.page--;
            this.getLocations(this.page);
            this.windowsTop();
            this.savePageInLocalStorage();
        },
        nextPage() {
            this.loader = true;
            this.page++;
            this.getLocations(this.page);
            this.windowsTop();
            this.savePageInLocalStorage();
        },
        savePageInLocalStorage() {
            localStorage.setItem("pageLocation", JSON.stringify(this.page));
        },
        windowsTop() {
            scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
}).mount("#app");
