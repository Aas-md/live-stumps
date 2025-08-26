export function getRandomImage() {
    let randomImageAndName = [
        { action: 'Left Arm fast', img: 'https://listwr.com/5dSCCc' },
        { action: 'Right Arm fast', img: 'https://listwr.com/Cy6IBT' },
        { action: 'Left arm medium', img: 'https://listwr.com/0rgNzU' },
        { action: 'Right arm medium', img: 'https://listwr.com/ydCoib' },
        { action: 'Right arm off spin', img: 'https://shorturl.at/vI9Uh' },
        { action: 'Left arm off spin', img: 'https://shorturl.at/OEPBZ' },
        { action: 'Leg break', img: 'https://shorturl.at/ohMpy' },
        { action: 'Left arm leg break', img: 'https://shorturl.at/fYGdE' }
    ];

    let randomNum = Math.floor(Math.random() * 8);
    return randomImageAndName[randomNum];
}

export function getRandomTeamImage(teamName) {
    if (!teamName) return "";

    // Normalize input
    const normalized = teamName.toLowerCase().trim();

    // Prefix mapping (first 2–3 chars)
    const prefixMap = {
        in: "India",
        pa: "Pakistan",
        au: "Australia",
        en: "England",
        rs: "South Africa",
        nz: "New Zealand",
        sl: "Sri Lanka",
        ba: "Bangladesh",
        af: "Afghanistan",
        wi: "West Indies",
        ir: "Ireland",
        zi: "Zimbabwe",
        ne: "Netherlands",
        sc: "Scotland",
        ne: "Nepal",
        ua: "United Arab Emirates"
    };

    const teamImages = [
        { name: "India", img: "https://flagcdn.com/w320/in.png" },
        { name: "Pakistan", img: "https://flagcdn.com/w320/pk.png" },
        { name: "Australia", img: "https://flagcdn.com/w320/au.png" },
        { name: "England", img: "https://flagcdn.com/w320/gb.png" },
        { name: "South Africa", img: "https://flagcdn.com/w320/za.png" },
        { name: "New Zealand", img: "https://flagcdn.com/w320/nz.png" },
        { name: "Sri Lanka", img: "https://flagcdn.com/w320/lk.png" },
        { name: "Bangladesh", img: "https://flagcdn.com/w320/bd.png" },
        { name: "Afghanistan", img: "https://flagcdn.com/w320/af.png" },
        { name: "West Indies", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Cricket_West_Indies_Logo_2017.png" },
        { name: "Ireland", img: "https://flagcdn.com/w320/ie.png" },
        { name: "Zimbabwe", img: "https://flagcdn.com/w320/zw.png" },
        { name: "Netherlands", img: "https://flagcdn.com/w320/nl.png" },
        { name: "Scotland", img: "https://flagcdn.com/w320/gb-sct.png" },
        { name: "Nepal", img: "https://flagcdn.com/w320/np.png" },
        { name: "United Arab Emirates", img: "https://flagcdn.com/w320/ae.png" }
    ];

    // Extract first 3 letters
    const prefix = normalized.slice(0, 2);

    // Find match from prefixMap
    let mainName = prefixMap[prefix];


        // Agar "ne" aya hai to 3-char se differentiate karo
        if (normalized.startsWith("nep")) {
            mainName = "Nepal";
        } else if (normalized.startsWith("ned")) {
            mainName = "Netherlands";
        }
    

    // Special case: SA / RSA for South Africa
    if (!mainName && normalized.startsWith("sa") || normalized.startsWith('so')) {
        mainName = "South Africa";
    }

    //for wi
     if (!mainName && normalized.startsWith("we") ) {
        mainName = "Sri Lanka";
    }

     //for sl
     if (!mainName && normalized.startsWith("sr") ) {
        mainName = "West Indies";
    }

      //for ua
     if (!mainName && normalized.startsWith("un") ) {
        mainName = "United Arab Emirates";
    }


    if (!mainName) return "";

    // Find image
    const team = teamImages.find(t => t.name === mainName);
    return team ? team.img : "";
}



// const teamImages = [
//     { name: "India", img: "https://flagcdn.com/w320/in.png" },
//     { name: "Pakistan", img: "https://flagcdn.com/w320/pk.png" },
//     { name: "Australia", img: "https://flagcdn.com/w320/au.png" },
//     { name: "England", img: "https://flagcdn.com/w320/gb.png" },
//     { name: "South Africa", img: "https://flagcdn.com/w320/za.png" },
//     { name: "New Zealand", img: "https://flagcdn.com/w320/nz.png" },
//     { name: "Sri Lanka", img: "https://flagcdn.com/w320/lk.png" },
//     { name: "Bangladesh", img: "https://flagcdn.com/w320/bd.png" },
//     { name: "Afghanistan", img: "https://flagcdn.com/w320/af.png" },
//     { name: "West Indies", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Cricket_West_Indies_Logo_2017.png" },
//     { name: "Ireland", img: "https://flagcdn.com/w320/ie.png" },
//     { name: "Zimbabwe", img: "https://flagcdn.com/w320/zw.png" },
//     { name: "Netherlands", img: "https://flagcdn.com/w320/nl.png" },
//     { name: "Scotland", img: "https://flagcdn.com/w320/gb-sct.png" },
//     { name: "Nepal", img: "https://flagcdn.com/w320/np.png" },
//     { name: "United Arab Emirates", img: "https://flagcdn.com/w320/ae.png" }
// ];
