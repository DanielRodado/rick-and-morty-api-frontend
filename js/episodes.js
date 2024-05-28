"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            episodes: [],
            page: 1,
            urlNext: null,
            urlPrev: null,
            loader: true,
        };
    },

    created() {
        this.page = JSON.parse(localStorage.getItem("pageEpisodes")) || 1;
        this.getEpisodes(this.page);
    },

    methods: {
        getEpisodes(page) {
            axios(`https://rickandmortyapi.com/api/episode?page=${page}`)
                .then(({ data }) => {
                    this.episodes = [...data.results];
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
            this.getEpisodes(this.page);
            this.windowsTop();
            this.savePageInLocalStorage();
        },
        nextPage() {
            this.loader = true;
            this.page++;
            this.getEpisodes(this.page);
            this.windowsTop();
            this.savePageInLocalStorage();
        },
        savePageInLocalStorage() {
            localStorage.setItem("pageEpisodes", JSON.stringify(this.page));
        },
        windowsTop() {
            scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
}).mount("#app");
