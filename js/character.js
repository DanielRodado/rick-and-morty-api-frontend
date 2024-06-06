"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            character: {},
            idCharacter: null,
            loader: true,
        };
    },

    created() {
        this.getURLParams();
        this.getCharacter();
    },

    methods: {
        getCharacter() {
            axios(`https://rickandmortyapi.com/api/character/${this.idCharacter}`)
                .then(({ data }) => {
                    this.character = data;
                    this.getNameOfEpisode(this.character);
                    setTimeout(() => {
                        this.loader = false;
                    }, 1500);
                })
                .catch((err) => console.log(err));
        },
        getNameOfEpisode(character) {
            axios(character.episode[0])
                .then(({ data }) => (character.nameOfEpisode = data.name))
                .catch(() => (character.nameOfEpisode = "undefined"));
        },
        getURLParams() {
            this.idCharacter = parseInt(
                new URLSearchParams(document.location.search).get("character")
            );
        },
    },
}).mount("#app");
