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
                <div class="calling">
                     <div class="calling_img">
                         <img src="./src/img/love_god.jpg" alt="">
                     </div>
                     <p>
                         <strong>Love God</strong>
                         <br>
                         Jesus taught us that to love God with the entirety of our being is the first and the greatest commandment. Through understanding the Gospel, we are able to live our lives out in gratitude and reverence of God. We believe that all followers of Christ are called to an intimate, personal relationship with God that comes from truly understanding "Who He Is" and "What He Has Done" and living a life that reflects the transformation of the heart.
                     </p>
                </div>
                <div class="calling">
                     <div class="calling_img">
                      <img src="./src/img/love_neighbor.jpg" alt="">
                     </div>
                     </div>
                     <p>
                         <strong>Love Our Neighbors</strong>
                         <br>
                         Jesus told us that the second greatest commandment is to love our neighbors as ourselves. We do not take His words lightly when he says that the world will know us by the way that we love one another. We always strive to be a community that loves everyone around us, to extend the grace and love that we have been given while we were still sinners.
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