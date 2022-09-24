import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    social: [
        {
            id: 1,
            name: "phone",
            text: "0347 4703 96",
            type: "text",
            url: null,
        },
        {
            id: 2,
            name: "github",
            text: "Github",
            type: "link",
            url: "https://github.com/hieungochoangit",
        },
        {
            id: 3,
            name: "zalo",
            text: "Zalo",
            type: "link",
            url: "https://zalo.me/0347470396",
        },
        {
            id: 4,
            name: "mail",
            text: "hieungochoangit@gmail.com",
            type: "link",
            url: "mailto:hieungochoangit@gmail.com",
        },
        {
            id: 5,
            name: "facebook",
            text: "Facebook",
            type: "link",
            url: "https://www.facebook.com/hoangngochieu97/",
        },
        {
            id: 6,
            name: "linkedin",
            text: "LinkedIn",
            type: "link",
            url: "https://www.linkedin.com/in/hieungochoang/",
        },
    ],
    overview: {
        overviewText: "I have 2 years programming experience in developing websites or web base applications.",
        languageAndscripting: ["Javascript", "PHP", "HMTL5 CSS3"],
        framework: ["ReactJS", "Angular", "ExpressJs"],
        database: ["MySQL", "NoSQL"],
        other: ["GIT", "Jira", "Notion", "Slack", "Discord", "Vs Code"],
    },
    skills: {
        main: ["HTML CSS Javascript (ReactJs)", "ExpressJs", "RESFul API", "MySQL"],
        other: ["VueJS", "Angular", "PHP (Laravel Framework)"],
    },
};

export const cardSlide = createSlice({
    name: "card",
    initialState,
    reducers: {},
});

export const { getAllSocial } = cardSlide.actions;

export default cardSlide.reducer;
