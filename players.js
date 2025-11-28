const teams = {
    smash: {
        name: 'Super Smash Bros. Ultimate',
        desc: 'Super Smash Bros. Ultimate (SSBU) is a crossover fighting game made by Nintendo in 2018.',
        standing: '28th',
    },
    marioKart: {
        name: 'Mario Kart 8 Deluxe',
        desc: 'Mario Kart 8 Deluxe is one of Nintendo\'s many racing games, Mario Kart 8 Deluxe being the 9th game in the series',
        standing: '10th',
    },
    rivals: {
        name: 'Marvel Rivals',
        desc: 'Marvel Rivals is a hero shooter developed and published by NetEase Games in collaboration with Marvel.',
        standing: '-'
    },
}

const matchHistory = {
    smash: [
        {
            score: [0,1],
            home: 'CHS Ultimate',
            opponent: 'Forfeit',
            date: 'Sep 24th, 2025'
        },
        {
            score: [3,0],
            home: 'CHS Ultimate',
            opponent: 'Oso Plateado JV',
            date: 'Oct 1st, 2025'
        },
        {
            score: [3,0],
            home: 'CHS Ultimate',
            opponent: 'CCA',
            date: 'Oct 8th, 2025'
        },
        {
            score: [1,0],
            home: 'CHS Ultimate',
            opponent: 'BYE',
            date: 'Oct 15th, 2025'
        },
        {
            score: [2,3],
            home: 'CHS Ultimate',
            opponent: 'Apollo smashers',
            date: 'Oct 22nd, 2025'
        },
        {
            score: [3,1],
            home: 'CHS Ultimate',
            opponent: 'PCS Bobcat Prowlers',
            date: 'Oct 29th, 2025'
        },
        {
            score: [1,3],
            home: 'CHS Ultimate',
            opponent: 'Central Lee',
            date: 'Nov 5th, 2025'
        },
        {
            score: [3,2],
            home: 'CHS Ultimate',
            opponent: 'Victory Vortex',
            date: 'Nov 12th, 2025'
        },
    ],
    marioKart: [
        {
            score: [1,2],
            home: 'CHS Mario Kart',
            opponent: 'THS_MarioKartGreen',
            date: 'Sep 25th, 2025'
        },
        {
            score: [2,0],
            home: 'CHS Mario Kart',
            opponent: 'Byers Lions',
            date: 'Oct 2nd, 2025'
        },
        {
            score: [2,0],
            home: 'CHS Mario Kart',
            opponent: 'Boosted Hounds',
            date: 'Oct 9th, 2025'
        },
        {
            score: [1,0],
            home: 'CHS Mario Kart',
            opponent: 'BYE',
            date: 'Oct 16th, 2025'
        },
        {
            score: [1,2],
            home: 'CHS Mario Kart',
            opponent: 'Legends',
            date: 'Oct 23rd, 2025'
        },
        {
            score: [0,2],
            home: 'CHS Mario Kart',
            opponent: 'CRKC Pumas',
            date: 'Oct 30th, 2025'
        },
        {
            score: [2,0],
            home: 'CHS Mario Kart',
            opponent: 'The Rocky Wrench Wranglers',
            date: 'Nov 6th, 2025'
        },
        {
            score: [0,2],
            home: 'CHS Mario Kart',
            opponent: 'GHS Mario Kart Blue Squad',
            date: 'Nov 13th, 2025'
        },
    ],
    rivals: [

    ]
}

const medals = {
    generalManager: {
        name: 'General Manager'
    },
    teamCaptain: {
        name: 'Team Captian'
    },
    websiteDeveloper: {
        name: 'Website Developer',
        desc: 'It\'s me!'
    },
    mexican: {
        name: 'Mexican',
        desc: '🌮'
    },
    queen: {
        name: 'Queen'
    },
    raccoon: {
        name: 'Raccoon'
    },
    teacher: {
        name: 'Teacher'
    },
    omni: {
        name: 'The being in literally everything award',
        desc: 'Included in every team, and is a general manager.'
    },
    smashmvp: {
        name: 'SSBU MVP',
        desc: 'Considered the most valuable player on the SSBU team.'
    },
    mkmvp: {
        name: 'Mario Kart MVP',
        desc: 'Considered the most valuable player on the MK8D team.'
    },
}

const players = {
    ayden: {
        name: 'Ayden F.',
        username: 'DeBread',
        quote: '"You smell bad"',
        bio: 'Hello i am the bread I made this website <br> I like raccoons 🦝 <img src="media/clueless.png" style="position: absolute; left: -5px; bottom: -5px;">',
        bioHeight: 175,
        profileColor: '#211d32',
        medals: ['websiteDeveloper','raccoon','mkmvp'],
        teams: ['marioKart'],

        smashFighters: [
            {
                name: 'Ridley',
                num: "65"
            },
            {
                name: 'Yoshi',
                num: "05"
            }
        ],
        mkKart: {
            parts: [
                'Dry Bones',
                'Biddybuggy',
                'Azure Roller',
                'Gold Glider'
            ],
            stats: {
                Speed: [1.5,2.25,2.75,2],
                Acceleration: [5.5],
                Weight: [1.5],
                Handling: [5.25,5,5,5],
                Traction: [3.75],
                Mini_Turbro: [5.5],
                Invincibility: [2.25]
            }
        },
        socials: [
            {
                name: 'Website',
                link: 'https://debread.space'
            },
            {
                name: 'Twitter',
                link: 'https://twitter.com/notdebread'         
            },
            {
                name: 'Discord Server',
                link: 'https://discord.gg/ENH9NZb6ZC'
            }
        ]
    },
    remus: {
        name: 'Remus O.',
        username: 'TheRemusEemus',
        quote: '"LEGENDARY!"',
        medals: ['teamCaptain'],
        teamCaptains: ['rivals'],
    },
    zev: {
        name: 'Zev M.',
        username: 'Axolotlsquad132',
        quote: '"Subscribe or else"',
        profileColor: '#272d45',
        teams: ['smash'],
        socials: [
            {
                name: 'YouTube',
                link: 'https://www.youtube.com/@Axolotlsquad132'
            },
            {
                name: 'YouTube',
                link: 'https://www.youtube.com/@AxoIRL-132'         
            }
        ],

        smashFighters: [
            {
                name: 'Steve',
                num: "77"
            },
            {
                name: 'Greninja',
                num: "50"
            },
            {
                name: 'Ness',
                num: "10"
            }
        ],
    },
    murawski: {
        name: 'Dr. M',
        username: "",
        medals: ['teacher'],
        manager: true,
        socials: [
            {
                name: 'Email',
                link: 'mailto:ashleym@sjsd.k12.mo.us'
            }
        ]
    },
    logan: {
        name: 'Logan B.',
        username: 'TheGothicChef',
        quote: '"I am the one who deals."',
        profileColor: '#211d32',
        medals: ['generalManager','teamCaptain','omni'],
        teams: ['smash','marioKart','rivals'],
        manager: true,

        socials: [
            {
                name: 'YouTube',
                link: 'https://youtube.com/@thegothicchef'
            },
            {
                name: 'Discord',
                link: 'https://discord.com/users/1074557039486959677'         
            }
        ],

        smashFighters: [
            {
                name: 'Ridley',
                num: "65"
            },
            {
                name: 'Wario',
                num: "30"
            },
            {
                name: 'Pyra/Mythra',
                num: '79/#80'
            }
        ],

        mkKart: {
            parts: [
                'Diddy Kong',
                'Comet',
                'Off-Road',
                'Gold Glider'
            ],
            stats: {
                Speed: [3.5,3.5,3.75,3.5],
                Acceleration: [4],
                Weight: [3.25],
                Handling: [3.75,3.25,4,3.5],
                Traction: [3.75],
                Mini_Turbro: [4.25],
                Invincibility: [4]
            }
        },
    },
    // zeke: {
    //     name: 'Zeke S.',
    //     username: 'mrass',
    //     quote: '"The grabbening."',
    //     profileColor: '#594327',
    //     teams: ['smash'],

    //     smashFighters: [
    //         {
    //             name: 'Mario',
    //             num: "01"
    //         },
    //         {
    //             name: 'Donkey Kong',
    //             num: "02"
    //         },
    //         {
    //             name: 'Mii Brawler',
    //             num: "51"
    //         }
    //     ],
    // },
    heather: {
        name: 'Heather C.',
        username: 'Demon',
        profileColor: '#1e2d33',
        teams: ['smash','marioKart'],
        medals: ['smashmvp'],

        smashFighters: [
            {
                name: 'Sephiroth',
                num: '78'
            },
            {
                name: 'Kazuya',
                num: '81'
            },
            {
                name: 'Cloud',
                num: '61'
            }
        ],

        mkKart: {
            parts: [
                'Pink Gold Peach',
                'Jet Bike',
                'Azure Roller',
                'Paper Glider'
            ],
            stats: {
                Speed: [3.75,4.5,4.5,3.75],
                Acceleration: [3.5],
                Weight: [3.5],
                Handling: [3.5,3.25,3.75,3.25],
                Traction: [2.75],
                Mini_Turbro: [4],
                Invincibility: [2.25]
            }
        },
    },
    darren: {
        name: 'Darren H.',
        username: 'Mr_Trey06',
        bio: ':(',
        quote: '"Like a good neighbor State Farm is there! :D"',
        profileColor: 'rgb(10,10,10)',
        medals: ["teamCaptain","queen"],
        teamCaptains: ['smash'],
        teams: ['marioKart'],
        smashFighters: [
            {
                name: 'Meta Knight',
                num: '27'
            },
            {
                name: 'Jigglypuff',
                num: '12'
            },
            {
                name: 'Pit',
                num: '28'
            }
        ],
        mkKart: {
            parts: [
                'Birdo',
                'Cat Cruiser',
                'Azure Roller',
                'Cloud Glider'
            ],
            stats: {
                Speed: [2.55,3.75,4.25,3.25],
                Acceleration: [4.75],
                Weight: [2.25],
                Handling: [4.25,3.5,4.5,4],
                Traction: [3.5],
                Mini_Turbro: [5.25],
                Invincibility: [1.75]
            }
        },
    },
    naomi: {
        name: 'Naomi N.',
        username: 'NerdBird13',
        bio: 'It’s punishment time!',
        quote: '"I have to tell you something."',
        profileColor: '#211d32',
        medals: ["teamCaptain"],
        teamCaptains: ['marioKart'],
    },
    fernando: {
        name: 'Fernando M.',
        username: 'Mexican5',
        teams: ['smash'],

        smashFighters: [
            {
                name: 'Ike',
                num: "32"
            },
            {
                name: 'Corrin',
                num: "62"
            }
        ],
    },
    tristan: {
        name: 'Tristan M.',
        username: 'Lunarverse',
        quote: '"Can\'t Beat me in Strongest Battlegrounds tho"',
        profileColor: '#702327',
        teams: ['rivals','smash'],

        socials: [
            {
                name: 'Roblox',
                link: 'https://www.roblox.com/users/448062754/profile?friendshipSourceType=PlayerSearch'
            },
        ],

        smashFighters: [
            {
                name: 'Little Mac',
                num: "82"
            },
            {
                name: 'Sora',
                num: "32"
            },
            {
                name: 'Kirby',
                num: "6"
            }
        ],
    },
    alex: {
        name: 'Alex A.',
        username: 'yousonaggy',
        quote: '',
        profileColor: '#3f2866',
        teams: ['rivals'],
    },
    clayton: {
        name: 'Clayton T.',
        username: 'Lost',
        bio: 'I love frogs and I write horror',
        quote: '"Potat frogs are cute"',
        teams: ['rivals'],
    },
}