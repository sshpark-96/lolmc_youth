import '../css/footer.css';

const footer_section = (()=>{
    const footer = document.createElement("footer");
    const body = document.querySelector("body");
    let footer_inner = `LOLMC Youth @ 2022`;
    footer.innerHTML = footer_inner;
    body.appendChild(footer);
})();

export {footer_section};