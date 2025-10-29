function getAverage(arr) {
    let total = 0
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total / arr.length 
}

const teams = {
    smash: {
        name: 'Super Smash Bros. Ultimate',
        desc: 'Super Smash Bros. Ultimate (SSBU) is a crossover fighting game made by Nintendo in 2018.',
    },
    marioKart: {
        name: 'Mario Kart 8 Deluxe',
        desc: 'Mario Kart 8 Deluxe is one of Nintendo\'s many racing games, Mario Kart 8 Deluxe being the 9th game in the series',
    },
    rivals: {
        name: 'Marvel Rivals',
        desc: 'Marvel Rivals is a hero shooter developed and published by NetEase Games in collaboration with Marvel.',
    },
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

for(const key in teams) {
    const team = teams[key]
    const teamCard = document.createElement('div')
    teamCard.classList.add('teamCard')

    let teamLeader
    let teamMembers = 1
    for(const pkey in players) {
        const player = players[pkey]
        if(player.teams && player.teams.includes(key)) {
            teamMembers++
        }
        if(player.teamCaptains && player.teamCaptains.includes(key)) {
            teamLeader = player.name
        }
    }

    teamCard.innerHTML = `
        <img src="media/games/${key}Icon.png">
        <div class="teamText">
            <span>${team.name}</span><br>
            <em>${teamMembers} members, Lead by ${teamLeader}</em>
        </div>
    `
    teamCard.onclick = () => {
        openTeam(key)
        setTimeout(() => {            
            doge('teamHeaderTitle').innerText = team.name
            doge('teamHeaderCount').innerText = `${teamMembers} members`
            doge('teamHeaderImg').src = `media/games/${key}.png`
        }, 250);
    }

    teamCard.id = key + 'Card'

    doge('teamCardContainer').append(teamCard)
}

function openTeam(team) {
    document.querySelectorAll('.teamCard').forEach(elem => {
        elem.style.boxShadow = '0px 0px var(--accent)'
    })
    doge(`${team}Card`).style.boxShadow = '-4px 0px var(--accent)'

    doge('teamMainSection').style.opacity = 0
    setTimeout(() => {   
        doge('teamMainSection').style.opacity = 1
        
        let pi = 0
    
        doge('teamMembers').innerHTML = ''
        doge('teamLeaders').innerHTML = ''
    
        for(const key in players) {
            const player = players[key]
            if(player.teams && player.teams.includes(team)) {
                const playerCard = document.createElement('div')
                playerCard.classList.add('playerCard')
                playerCard.style.animation = `playerCardIn 500ms ease-out ${pi*100}ms 1 forwards`
                playerCard.innerHTML = `
                    <img src="media/pfp/${key}.webp">
                    <div class="playerCardText">
                        <strong>${player.name}</strong>
                        <div class="playerSubtext">
                            <em class="playerCardHandle">${player.username}</em>
                            <em class="playerCardQuote">${player.quote ?? ""}</em>
                        </div>
                    </div>
                    <div class="playerCardMedals"></div>
                `
                playerCard.onclick = () => {
                    openProfile(key)
                }
    
                for(const mkey in player.medals) {
                    const medal = player.medals[mkey]
                    const img = document.createElement('img')
                    img.src = `media/medals/${medal}.png`
    
                    playerCard.querySelector('.playerCardMedals').append(img)
    
                    img.onmouseenter = () => {
                        const imgRect = img.getBoundingClientRect()
                        createTooltip([imgRect.right + 10,imgRect.top], `${medals[medal].name}<br><em>${medal.desc ?? ''}</em>`)
                    }
            
                    img.onmouseleave = () => {
                        doge('tooltip').style.opacity = 0
                    }
                }
    
                doge('teamMembers').append(playerCard)
                pi++
            }
    
            let ci = 0
            if(player.teamCaptains && player.teamCaptains.includes(team)) {
                const playerCard = document.createElement('div')
                playerCard.classList.add('playerCard')
                playerCard.style.animation = `playerCardIn 500ms ease-out ${ci*100}ms 1 forwards`
                playerCard.innerHTML = `
                    <img src="media/pfp/${key}.webp">
                    <div class="playerCardText">
                        <strong>${player.name}</strong>
                        <div class="playerSubtext">
                            <em class="playerCardHandle">${player.username}</em>
                            <em class="playerCardQuote">${player.quote ?? ""}</em>
                        </div>
                    </div>
                    <div class="playerCardMedals">
        
                    </div>
                `
                playerCard.onclick = () => {
                    openProfile(key)
                }
    
                for(const mkey in player.medals) {
                    const medal = player.medals[mkey]
                    const img = document.createElement('img')
                    img.src = `media/medals/${medal}.png`
    
                    playerCard.querySelector('.playerCardMedals').append(img)
    
                    img.onmouseenter = () => {
                        const imgRect = img.getBoundingClientRect()
                        createTooltip([imgRect.right + 10,imgRect.top], `${medals[medal].name}<br><em>${medal.desc ?? ''}</em>`)
                    }
            
                    img.onmouseleave = () => {
                        doge('tooltip').style.opacity = 0
                    }
                }
    
                doge('teamLeaders').append(playerCard)
                ci++
            }

        }
        renderMatchHistory(team)
    }, 250);
}

for(const key in players) {
    const player = players[key]
    if(player.manager) {
        const playerCard = document.createElement('div')
        playerCard.classList.add('playerCard')
        addStyles(playerCard, {
            opacity: '1',
            translate: '0 0'
        })
        playerCard.innerHTML = `
            <img src="media/pfp/${key}.webp">
            <div class="playerCardText">
                <strong>${player.name}</strong>
                <div class="playerSubtext">
                    <em class="playerCardHandle">${player.username}</em>
                    <em class="playerCardQuote">${player.quote ?? ""}</em>
                </div>
            </div>
            <div class="playerCardMedals">
    
            </div>
        `
        playerCard.onclick = () => {
            openProfile(key)
        }
    
        for(const mkey in player.medals) {
            const medal = player.medals[mkey]
            const img = document.createElement('img')
            img.src = `media/medals/${medal}.png`
    
            playerCard.querySelector('.playerCardMedals').append(img)
    
            img.onmouseenter = () => {
                const imgRect = img.getBoundingClientRect()
                createTooltip([imgRect.right + 10,imgRect.top], `${medals[medal].name}<br><em>${medal.desc ?? ''}</em>`)
            }
    
            img.onmouseleave = () => {
                doge('tooltip').style.opacity = 0
            }
        }
        if(player.name === 'Dr. M') {
            doge('coachContainer').append(playerCard)
        } else {
            doge('managerContainer').append(playerCard)
        }
    }
}

function openProfile(player) {
    doge('profile').style.scale = '1'
    doge('profile').style.opacity = '1'
    doge('profilePopupContainer').style.opacity = '1'
    doge('profilePopupContainer').style.pointerEvents = 'all'

    doge('profilePicture').src = `media/pfp/${player}.webp`
    doge('profileBanner').style.backgroundImage = `url(media/pfp/${player}Banner.webp)`
    doge('profileName').innerText = players[player].name
    doge('profileUsername').innerText = players[player].username

    document.body.style.setProperty('--profileColor',players[player].profileColor ?? '#272d45')

    if(players[player].bio) {
        doge('profileBioContainer').style.display = ''
        doge('profileBio').innerHTML = players[player].bio

        if(players[player].bioHeight) {
            doge('profileBio').style.height = players[player].bioHeight + 'px'
        } else {
            doge('profileBio').style.height = 'fit-content'
        }
    } else {
        doge('profileBioContainer').style.display = 'none'
    }

    if(players[player].socials) {
        doge('profileSocialsContainer').style.display = ''
        doge('profileConnections').innerHTML = ''
        for(const key in players[player].socials) {
            const socialButton = document.createElement('a')
            socialButton.href = players[player].socials[key].link
            socialButton.target = '_blank'
    
            socialButton.classList.add('profileConnection')
            socialButton.innerHTML = `<img src="media/socials/${players[player].socials[key].name}.png"><span>${players[player].socials[key].name}</span>`
    
            doge('profileConnections').append(socialButton)
        }
    } else {
        doge('profileSocialsContainer').style.display = 'none'
    }

    doge('profileMedals').innerHTML = ''
    if(players[player].medals) {
        doge('profileMedals').style.display = 'flex'
        for(const key in players[player].medals) {
            const medal = players[player].medals[key]
            const img = document.createElement('img')
            img.src = `media/medals/${medal}.png`
            img.style.cursor = 'pointer'
    
            
            doge('profileMedals').append(img)
            img.onmouseenter = () => {
                const imgRect = img.getBoundingClientRect()
                createTooltip([imgRect.right + 10,imgRect.top], `${medals[medal].name}<br><em>${medals[medal].desc ?? ''}</em>`)
            }
    
            img.onmouseleave = () => {
                doge('tooltip').style.opacity = 0
            }

            img.onclick = () => {
                openMedal(medal)
            }
        }
    } else {doge('profileMedals').style.display = 'none'}

    doge('profileSmash').innerHTML = ''
    if(players[player].smashFighters) {
        doge('profileSmashContainer').style.display = ''
        for(const key in players[player].smashFighters) {
            const fighter = players[player].smashFighters[key]
            const div = document.createElement('div')
            div.classList.add('profileSmash')
            div.innerHTML = `
            <div class="profileSmashInfo">
                <span>${fighter.name}</span>
                <br><em>#${fighter.num}</em>
            </div>
            <img src="media/smashFighters/${fighter.name.replaceAll(' ','_').replaceAll('/','slash').toLowerCase()}.png">
            `
    
            doge('profileSmash').append(div)
        }
    } else {
        doge('profileSmashContainer').style.display = 'none'
    }

    doge('profileMKParts').innerHTML = ''
    doge('profileMKStats').innerHTML = ''
    if(players[player].mkKart) {
        doge('profileMKContainer').style.display = ''
        for(const key in players[player].mkKart.parts) {
            const part = players[player].mkKart.parts[key]
            const div = document.createElement('div')
            div.classList.add('profileMKPart')
            div.innerHTML = `
                <div class="mkPartImg" style="background-image: url(media/mk/${part.replaceAll(' ', '\\ ')}.png);"></div>
                <span>${part}</span>
            `
    
            doge('profileMKParts').append(div)
        }

        let mkStats = 0
        for(const key in players[player].mkKart.stats) {
            const stat = players[player].mkKart.stats[key]
            const div = document.createElement('div')
            div.classList.add('profileMKStat')
            div.innerHTML = `
            <div class="profileMKStatName">
                <span>${key.replaceAll('_',' ')}:</span>
                <div class="coolLine"></div>
                <span>${DeBread.round(getAverage(stat),2)}</span>
            </div>
            <div class="profileMKStatBar">
                <div class="innerProfileMKStatBar" style="width: ${(getAverage(stat)/6)*100}%;"></div>
            </div>
            `
    
            doge('profileMKStats').append(div)
    
            mkStats++
        }
    } else {
        doge('profileMKContainer').style.display = 'none'
    }

    doge('profileCloseButtonContainer').style.opacity = '1'
    doge('profileCloseButtonContainer').style.scale = '1'
    doge('profileClose').onclick = closeProfile
}

let isHoveringOnProfile = false
doge('profile').onmouseenter = () => {isHoveringOnProfile = true}
doge('profile').onmouseleave = () => {isHoveringOnProfile = false}

function closeProfile() {
    doge('profile').style.scale = '0.9'
    doge('profile').style.opacity = '0'
    doge('profilePopupContainer').style.opacity = '0'
    doge('profilePopupContainer').style.pointerEvents = 'none'

    doge('profileCloseButtonContainer').style.opacity = '0'
    doge('profileCloseButtonContainer').style.scale = '0.9'
} doge('profilePopupContainer').onclick = () => {if(!isHoveringOnProfile) closeProfile()}

function openMedal(medal) {
    doge('medalPopup').style.scale = '1'
    doge('medalPopup').style.opacity = '1'
    doge('medalPopupContainer').style.opacity = '1'
    doge('medalPopupContainer').style.pointerEvents = 'all'
    doge('medalPopupImg').src = `media/medals/${medal}.png`
    doge('medalPopupName').innerText = medals[medal].name
    doge('medalPopupDesc').innerText = medals[medal].desc ?? ''

    doge('profileClose').onclick = closeMedalPopup
}

let isHoveringOnMedalPopup = false
doge('medalPopup').onmouseenter = () => {isHoveringOnMedalPopup = true}
doge('medalPopup').onmouseleave = () => {isHoveringOnMedalPopup = false}

function closeMedalPopup() {
    doge('medalPopup').style.scale = '0.9'
    doge('medalPopup').style.opacity = '0'
    doge('medalPopupContainer').style.opacity = '0'
    doge('medalPopupContainer').style.pointerEvents = 'none'

    doge('profileClose').onclick = closeProfile
} doge('medalPopupContainer').onclick = () => {if(!isHoveringOnMedalPopup) closeMedalPopup()}


const tooltip = doge('tooltip')
function createTooltip(pos, html) {
    if(window.innerWidth >= 750) {
        doge('tooltip').style.opacity = 1
        tooltip.style.left = pos[0]+'px'
        tooltip.style.top = pos[1]+'px'
        tooltip.innerHTML = html
    
        tooltip.style.opacity = 1
    }
}

doge('totalMemberCount').innerText = Object.keys(players).length

document.body.querySelectorAll('question').forEach(elem => {
    elem.onmouseenter = () => {
        const rect = elem.getBoundingClientRect()
        createTooltip([rect.right + 10,rect.top], elem.getAttribute('text'))
    }
    elem.onmouseleave = () => {
        doge('tooltip').style.opacity = 0
    }
})

function renderMatchHistory(team) {
    doge('matchHistory').innerHTML = ''
    let ratio = [0,0]
    if(matchHistory[team].length > 0) {        
        let i = 0
        for(const key in matchHistory[team]) {
            const match = matchHistory[team][key]
            const div = document.createElement('div')
            div.classList.add('match')
    
            let isWon = match.score[0] > match.score[1]
    
            div.style.animation = `matchCardIn 500ms ease-out ${i*100}ms 1 forwards`
            div.innerHTML = `
                <div class="matchInfo">
                    <span>${match.home} <em>vs.</em> ${match.opponent}</span><br>
                    <em>${match.date}</em>
                </div>
                <div class="matchScore">
                    <img class="matchPFP" src="media/teams/chs.png">
                    <img src="media/arrow0.svg" class="matchArrow winArrow">
                    <span>${match.score[0]} - ${match.score[1]}</span>
                    <img src="media/arrow1.svg" class="matchArrow lossArrow">
                    <img class="matchPFP" src="media/teams/${match.opponent}.png" alt="❔">
                </div>
            `
    
            if(isWon) {
                div.querySelector('.lossArrow').style.opacity = 0
            } else {
                div.querySelector('.winArrow').style.opacity = 0
            }
    
            doge('matchHistory').append(div)
            i++
    
            if(isWon) {
                ratio[0]++
            } else {
                ratio[1]++
            }
        }
    
        const wlratio = DeBread.round(ratio[0]/ratio[1],1)
    
        doge('wlRatio').innerText = wlratio
        if(wlratio > 1) {
            doge('wlRatio').style.color = 'rgb(100, 255, 150)'
        } else if(wlratio < 1) {
            doge('wlRatio').style.color = 'rgb(255, 100, 100)'
        } else {
            doge('wlRatio').style.color = 'white'
        }
    
        const latestMatch = matchHistory[team][matchHistory[team].length-1]
        if(latestMatch.score[0] > latestMatch.score[1]) {
            doge('wlRatioArrow').src = 'media/anglearrow0.svg'
        } else {
            doge('wlRatioArrow').src = 'media/anglearrow1.svg'
        }

        doge('matchesPlayed').innerText = i

        doge('matchHistory').scrollTop = -10e6
    } else {
        doge('wlRatioArrow').src = 'media/anglearrow2.svg'
        doge('wlRatio').style.color = 'white'
        doge('wlRatio').innerText = '0'
        doge('matchesPlayed').innerText = '0'
        doge('matchHistory').innerHTML = '<p style="text-align:center;">No matches played!</p>'
    }

    doge('wins').innerText = ratio[0]
    doge('losses').innerText = ratio[1]
}

const currentDate = new Date()

if(currentDate.getMonth() === 9 && currentDate.getDate() >= 30) {
    doge('holidayText').innerText = '🎃 HAPPY HALLOWEEN 🎃'
    doge('holidayText').style.color = 'orange'

    document.documentElement.style.setProperty('--bgColor0','#281c10')
    document.documentElement.style.setProperty('--bgColor1','#39311e')
    document.documentElement.style.setProperty('--bgColor2','#534b36')
    document.documentElement.style.setProperty('--darkBG','#1d120c')

    document.documentElement.style.setProperty('--accent','orange')

    document.querySelectorAll('.decor').forEach(elem => {
        elem.style.opacity = 1
    })
}