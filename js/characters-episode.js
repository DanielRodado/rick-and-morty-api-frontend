"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            idEpisode: null,
            episodeName: "",
            characters: [],
            page: 1,
            urlNext: null,
            urlPrev: null,
            loader: true,
        };
    },

    created() {
        this.getURLParams();
        this.getEpisodes();
    },

    methods: {
        getEpisodes() {
            axios(`https://rickandmortyapi.com/api/episode/${this.idEpisode}`)
                .then(({ data }) => {
                    for (const URLcharacter of data.characters) {
                        this.getCharacters(URLcharacter);
                    }
                    setTimeout(() => {
                        this.episodeName = `| ${data.name}`;
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
    },
}).mount("#app");
