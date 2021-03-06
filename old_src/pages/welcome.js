import '../css/welcome.css';

const welcome_page = (() => {
    let welcome_content = `<div id="main_image">
    <div class="welcome">
    </div>
    <div class="welcome_text">
        <span>
            "How can a young person stay on the path of purity? By living according to your word."
            <br> <br>
            Psalm 119:9
        </span>
    </div>
</div>
<div class="section">
    <span>
        What the heck do I put in this section down here?
        OMG
    </span>
</div>
<div class="parallax_1">
    <span>
        Striving To Cultivate A Scripture Based Ministry
    </span>
</div>
<div class="section">
   <span>
        What the heck do I put in this section down here?
        OMG
   </span>
</div>
<div class="parallax_2">
    <span>
        Some Other Holy Sounding Heading For Picture
    </span>
</div>
<div class="section">
    <span>
        What the heck do I put in this section down here?
        OMG
    </span>
</div>
<div class="parallax_3">
    <span>
        Join Us This Sunday
    </span>
</div>`;
    const main = document.createElement("main");
    const body = document.querySelector("body");
    main.innerHTML = welcome_content;
    body.appendChild(main);
})();

export {welcome_page};