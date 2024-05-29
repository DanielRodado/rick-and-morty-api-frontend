"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            idEpisode: null,
            episode: [],
            characters: [],
            checkVisibilityCards: false,
            loader: true,
        };
    },

    created() {
        this.getURLParams();
        this.getEpisode();
    },

    methods: {
        getEpisode() {
            axios(`https://rickandmortyapi.com/api/episode/${this.idEpisode}`)
                .then(({ data }) => {
                    this.episode = data;
                    for (const URLcharacter of data.characters) {
                        this.getCharacters(URLcharacter);
                    }
                    setTimeout(() => {
                        this.loader = false;
                    }, 1500);
                })
                .catch((err) => console.log(err));
        },
        getCharacters(URLOfCharacter) {
            axios(URLOfCharacter)
                .then(({ data }) => {
                    this.getNameOfEpisode(data.episode[0], data);
                })
                .catch((err) => console.log(err));
        },
        getNameOfEpisode(URLOfEpisode, character) {
            axios(URLOfEpisode)
                .then(({ data }) => {
                    character.nameOfEpisode = data.name;
                    this.characters.push(character);
                })
                .catch(() => (character.nameOfEpisode = "undefined"));
        },
        getURLParams() {
            this.idEpisode = parseInt(
                new URLSearchParams(document.location.search).get("episode")
            );
        },
        windowsTopFirst() {
            this.checkVisibilityCards ? this.windowsTop() : null;
        },
        windowsTop() {
            scrollTo({
                top: 50,
                behavior: "smooth",
            });
        },
    },
}).mount("#app");
