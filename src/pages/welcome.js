import '../css/welcome.css';

const welcome = (()=>{
    const body = document.querySelector("body");
    body.innerHTML += `
    <main>
        <div id="main_image">
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
                <h1>
                    Youth @ Light of Love Mission Church
                </h1>
                <p>
                    We are a group of High School and Middle School students who are dedicated to developing a relationship with Jesus Christ and establishing a Christian world view that is founded solely on the Bible. We strive to be a diverse community of students who come together to shine God's Light of Love to one another, as well as to the world.
                </p>
            </span>
        </div>
        <div class="parallax_1">
            <span>
                Serving To Cultivate A Scripture Based Ministry
            </span>
        </div>
       <div class="section">
           <span>
                <h2>
                    We Believe We Are Called To...
                </h2>
               <div>
                    <div>
                        <img src="" alt="">
                    </div>
                    <p>
                        <strong>Inreach</strong>
                        <br>


                    </p>
               </div>
               <div>
                        <img src="" alt="">
                    </div>
                    <p>
                        <strong>Outreach</strong>
                        <br>


                    </p>
               </div>
           </span>
        </div>
        <div class="parallax_2">
            <span>
                Living Out The Lifestyle Of Worship
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
        </div>
    </main>
    `;
})();

export {welcome};