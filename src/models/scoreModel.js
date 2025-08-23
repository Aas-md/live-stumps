import {getRunRate,getRequiredRate,getTarget} from "../utils/runRateUtils.js";
import { formatDate } from "../utils/dateUtil.js";

const score = {

    id: "7929f530-9f6c-4e8d-9c15-08e772e1f1e0",
    api_status: "success",
    hitsToday: 33,
    name: "West Indies vs Pakistan, 3rd ODI",
    matchType: "odi",
    status: "West Indies won by 202 runs",
    venue: "Brian Lara Stadium, Tarouba, Trinidad",
    date: "2025-08-12T13:30:00",
    date : formatDate( "2025-08-12T13:30:00"),
    tossWinner: "Pakistan",
    tossChoice: "bowl",
    matchWinner: "West Indies",
    matchStarted: true,
    matchEnded: true,
    teams: [
        "West Indies",
        "Pakistan"
    ],

    team1: {
        name: "West Indies",
        shortname: "WI",
        img: "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48",
        score: "294/6 (50.0)",
        runRate : getRunRate("294/6 (50)"),
        inning: "West Indies Inning 1",
        batting: [
            {
                batsman: {
                    id: "444e0a55-ec85-4ee1-9557-f1a51a96a7d5",
                    name: "Brandon King"
                },
                dismissal: "catch",


                dismissalText: "c salman agha b naseem shah",
                r: 5,
                b: 8,
                "4s": 1,
                "6s": 0,
                sr: 62.5,

            },
            {
                batsman: {
                    id: "eccad6b2-7fb5-4be4-a6a1-aeaadbd9f85b",
                    name: "Evin Lewis"
                },
                dismissal: "catch",

                dismissalText: "c mohammad haris b abrar ahmed",
                r: 37,
                b: 54,
                "4s": 1,
                "6s": 3,
                sr: 68.52,

            },
            {
                batsman: {
                    id: "8c3270be-9b18-4fa6-b13e-3e37a06a08d7",
                    name: "Keacy Carty"
                },
                dismissal: "lbw",

                dismissalText: "lbw b abrar ahmed",
                r: 17,
                b: 45,
                "4s": 1,
                "6s": 0,
                sr: 37.78,

            },
            {
                batsman: {
                    id: "e5790c27-c428-4de8-82f7-d69a5452923e",
                    name: "Shai Hope"
                },
                dismissalText: "not out",
                r: 120,
                b: 94,
                "4s": 10,
                "6s": 5,
                sr: 127.66,

            },
            {
                batsman: {
                    id: "c978ce48-495b-4773-89c9-8a64d0257896",
                    name: "Sherfane Rutherford"
                },
                dismissal: "catch",

                dismissalText: "c talat b saim ayub",
                r: 15,
                b: 40,
                "4s": 1,
                "6s": 0,
                sr: 37.5,

            },
            {
                batsman: {
                    id: "90173068-f2ad-4278-b10c-dc5749bca0d3",
                    name: "Roston Chase"
                },
                dismissal: "bowled",

                dismissalText: "b naseem shah",
                r: 36,
                b: 29,
                "4s": 3,
                "6s": 2,
                sr: 124.14,

            },
            {
                batsman: {
                    id: "3b1ea632-ef6d-40f0-9402-e690b28907ca",
                    name: "Gudakesh Motie"
                },
                dismissal: "cb",

                dismissalText: "c and b mohammad nawaz",
                r: 5,
                b: 7,
                "4s": 1,
                "6s": 0,
                sr: 71.43,

            },
            {
                batsman: {
                    id: "f540dcd8-bbfc-4c3a-a0c4-1c14c2f51132",
                    name: "Justin Greaves"
                },
                dismissalText: "not out",
                r: 43,
                b: 24,
                "4s": 4,
                "6s": 2,
                sr: 179.17,

            }
        ],
        bowling: [
            {
                bowler: {
                    id: "47ef7e3e-5808-49a8-934d-8d98b7889d28",
                    name: "Jayden Seales"
                },
                o: 7.2,
                m: 0,
                r: 18,
                w: 6,
                nb: 0,
                wd: 1,
                eco: 2.5
            },
            {
                bowler: {
                    id: "7fd4fa20-bc49-4337-ae8a-540b67cb011d",
                    name: "Romario Shepherd",
                    altnames: [
                        "romario shepherd"
                    ]
                },
                o: 5,
                m: 2,
                r: 10,
                w: 0,
                nb: 0,
                wd: 0,
                eco: 2
            },
            {
                bowler: {
                    id: "2a90b6a9-ac87-49d2-947a-db688f5fcb4c",
                    name: "Shamar Joseph"
                },
                o: 4,
                m: 0,
                r: 7,
                w: 0,
                nb: 0,
                wd: 0,
                eco: 1.8
            },
            {
                bowler: {
                    id: "3b1ea632-ef6d-40f0-9402-e690b28907ca",
                    name: "Gudakesh Motie"
                },
                o: 7,
                m: 0,
                r: 37,
                w: 2,
                nb: 0,
                wd: 5,
                eco: 5.3
            },
            {
                bowler: {
                    id: "90173068-f2ad-4278-b10c-dc5749bca0d3",
                    name: "Roston Chase"
                },
                o: 6,
                m: 1,
                r: 16,
                w: 1,
                nb: 0,
                wd: 0,
                eco: 2.7
            }
        ],
        extras: {
            r: 16,
            b: 0
        },
    },
    team2: {
        name: "Pakistan",
        shortname: "PAK",
        img: "https://g.cricapi.com/iapi/66-637877075103236690.webp?w=48",
        score: "92/10 (29.2)",
         runRate : getRunRate("92/10 (29.2)"),
         requiredRate : getRequiredRate("92/10 (29.2)",getTarget("294/6 (50)")),
        target : getTarget("294/6 (50)"),
        inning: "Pakistan Inning 2",

        batting: [
            {
                batsman: {
                    id: "4ac9f0d8-47db-4b6a-94b5-3f1e8aa31857",
                    name: "Saim Ayub"
                },
                dismissal: "catch",

                dismissalText: "c shai hope b jayden seales",
                r: 0,
                b: 3,
                "4s": 0,
                "6s": 0,
                sr: 0,

            },
            {
                batsman: {
                    id: "aca1a8ce-a3d2-41da-88fc-7b9e4a43ab9d",
                    name: "Abdullah Shafique"
                },
                dismissal: "catch",

                dismissalText: "c motie b jayden seales",
                r: 0,
                b: 8,
                "4s": 0,
                "6s": 0,
                sr: 0,

            },
            {
                batsman: {
                    id: "4ffc5d94-5a5f-4489-a09f-60e22090c810",
                    name: "Babar Azam"
                },
                dismissal: "lbw",

                dismissalText: "lbw b jayden seales",
                r: 9,
                b: 23,
                "4s": 1,
                "6s": 0,
                sr: 39.13,

            },
            {
                batsman: {
                    id: "78b310fd-7403-4abf-83e4-8ac8357be790",
                    name: "Mohammad Rizwan"
                },
                dismissal: "bowled",

                dismissalText: "b jayden seales",
                r: 0,
                b: 1,
                "4s": 0,
                "6s": 0,
                sr: 0,

            },
            {
                batsman: {
                    id: "e3ad4212-a06b-4d0d-9537-c8bc285d3ed2",
                    name: "Salman Agha"
                },
                dismissal: "cb",

                dismissalText: "c and b motie",
                r: 30,
                b: 49,
                "4s": 3,
                "6s": 0,
                sr: 61.22,

            },
            {
                batsman: {
                    id: "5e757ebf-be71-4652-a663-b59633e90f67",
                    name: "Hasan Nawaz"
                },
                dismissal: "stumped",

                dismissalText: "st shai hope b motie",
                r: 13,
                b: 40,
                "4s": 0,
                "6s": 0,
                sr: 32.5,

            },
            {
                batsman: {
                    id: "ec016985-24b2-480e-8301-293200fdda51",
                    name: "Hussain Talat"
                },
                dismissal: "bowled",

                dismissalText: "b roston chase",
                r: 1,
                b: 4,
                "4s": 0,
                "6s": 0,
                sr: 25,

            },
            {
                batsman: {
                    id: "85c76b18-b9c7-48cb-b378-17edb2274e96",
                    name: "Mohammad Nawaz"
                },
                dismissalText: "not out",
                r: 23,
                b: 28,
                "4s": 2,
                "6s": 1,
                sr: 82.14,

            },
            {
                batsman: {
                    id: "a93dcc2b-b51a-47d1-85fc-e29d331d029d",
                    name: "Naseem Shah"
                },
                dismissal: "cb",

                dismissalText: "c and b jayden seales",
                r: 6,
                b: 16,
                "4s": 0,
                "6s": 0,
                sr: 37.5,

            },
            {
                batsman: {
                    id: "b8cf6e54-ed6e-4756-8f0c-e06871356b9f",
                    name: "Hasan Ali"
                },
                dismissal: "bowled",

                dismissalText: "b jayden seales",
                r: 0,
                b: 3,
                "4s": 0,
                "6s": 0,
                sr: 0,

            },
            {
                batsman: {
                    id: "0b2537e2-1819-42ea-8e45-f8691fd47cc6",
                    name: "Abrar Ahmed"
                },
                dismissal: "runout",


                dismissalText: "run out",
                r: 0,
                b: 1,
                "4s": 0,
                "6s": 0,
                sr: 0,

            }
        ],
        bowling: [
            {
                bowler: {
                    id: "a93dcc2b-b51a-47d1-85fc-e29d331d029d",
                    name: "Naseem Shah"
                },
                o: 10,
                m: 0,
                r: 72,
                w: 2,
                nb: 1,
                wd: 0,
                eco: 7.2
            },
            {
                bowler: {
                    id: "b8cf6e54-ed6e-4756-8f0c-e06871356b9f",
                    name: "Hasan Ali"
                },
                o: 10,
                m: 1,
                r: 60,
                w: 0,
                nb: 0,
                wd: 6,
                eco: 6
            },
            {
                bowler: {
                    id: "ec016985-24b2-480e-8301-293200fdda51",
                    name: "Hussain Talat"
                },
                o: 4,
                m: 0,
                r: 26,
                w: 0,
                nb: 0,
                wd: 1,
                eco: 6.5
            },
            {
                bowler: {
                    id: "0b2537e2-1819-42ea-8e45-f8691fd47cc6",
                    name: "Abrar Ahmed"
                },
                o: 9,
                m: 1,
                r: 34,
                w: 2,
                nb: 0,
                wd: 0,
                eco: 3.8
            },
            {
                bowler: {
                    id: "4ac9f0d8-47db-4b6a-94b5-3f1e8aa31857",
                    name: "Saim Ayub"
                },
                o: 8,
                m: 0,
                r: 36,
                w: 1,
                nb: 0,
                wd: 0,
                eco: 4.5
            },
            {
                bowler: {
                    id: "85c76b18-b9c7-48cb-b378-17edb2274e96",
                    name: "Mohammad Nawaz"
                },
                o: 9,
                m: 0,
                r: 60,
                w: 1,
                nb: 0,
                wd: 2,
                eco: 6.7
            }
        ],

        extras: {
            r: 10,
            b: 4
        },


    },

}

export default score;