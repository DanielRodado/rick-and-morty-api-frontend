"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            characters: [],
            page: 1,
            urlNext: null,
            urlPrev: null,
            loader: true,
        };
    },

    created() {
        this.page = JSON.parse(localStorage.getItem("pageCharacters")) || 1;
        this.getCharacter(this.page);
    },

    methods: {
        getCharacter(page) {
            axios(`https://rickandmortyapi.com/api/character?page=${page}`)
                .then(({ data }) => {
                    this.characters = [...data.results];
                    this.urlNext = data.info.next;
                    this.urlPrev = data.info.prev;
                    this.asingNameOfEpisode(this.characters);
                    setTimeout(() => {
                        this.loader = false;
                    }, 1500);
                })
                .catch((err) => console.log(err));
        },
        getNameOfEpisode(URLOfEpisode, character) {
            axios(URLOfEpisode)
                .then(({ data }) => (character.nameOfEpisode = data.name))
                .catch(() => (character.nameOfEpisode = "undefined"));
        },
        asingNameOfEpisode(listOfCharacters) {
            for (const character of listOfCharacters) {
                this.getNameOfEpisode(character.episode[0], character);
            }
        },
        prevPage() {
            this.loader = true;
            this.page--;
            this.getCharacter(this.page);
            this.windowsTop();
            this.savePageInLocalStorage();
        },
        nextPage() {
            this.loader = true;
            this.page++;
            this.getCharacter(this.page);
            this.windowsTop();
            this.savePageInLocalStorage();
        },
        savePageInLocalStorage() {
            localStorage.setItem("pageCharacters", JSON.stringify(this.page));
        },
        windowsTop() {
            scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
}).mount("#app");
