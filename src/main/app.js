const nav = document.getElementById('nav');
nav.innerHTML = `
    <div class="head">
        <div id="threeDotsDiv">
            <div class="threeDots" id="yellow"></div>
            <div class="threeDots" id="purple"></div>
            <div class="threeDots" id="pink"></div>
        </div>
        <div class="linkDiv">
            <ul class="menu">
                <li> <a href="./">Home</a></li>
                <li> <a href="./about.html">About</a></li>
                <li> <a href="./contact.html">Contact</a></li>
                <li> <a href=""></a></li>
            </ul>
        </div>
        <span id="hamburger">&#9776;</span>
    </div>
       
    
`
const footer = document.querySelector('footer');
footer.innerHTML  = `
    <div id="footerDiv">
    <p class="parText fontFamily">&copy Egberanmwen Doris,2022</p>
    </div>
`
const flag = document.getElementById('flag');
const getFlagEmoji=(countryCode) =>{
    const codePoint = countryCode
    .toUpperCase()
    .split('')
    .map(char=> 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoint);
}
//getFlagEmoji('NG');
flag.innerHTML = getFlagEmoji('NG');