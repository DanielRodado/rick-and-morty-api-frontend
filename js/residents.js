"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            idLocation: null,
            locationName: "",
            characters: [],
            page: 1,
            urlNext: null,
            urlPrev: null,
            loader: true,
        };
    },

    created() {
        this.getURLParams();
        this.getLocation();
    },

    methods: {
        getLocation() {
            axios(`https://rickandmortyapi.com/api/location/${this.idLocation}`)
                .then(({ data }) => {
                    for (const URLcharacter of data.residents) {
                        this.getCharacters(URLcharacter);
                    }
                    setTimeout(() => {
                        this.locationName = `| ${data.name}`;
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
            this.idLocation = parseInt(
                new URLSearchParams(document.location.search).get("location")
            );
        },
    },
}).mount("#app");
