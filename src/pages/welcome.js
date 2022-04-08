import '../css/welcome.css';

import pic_one from '../img/love_god.jpg';
import pic_two from '../img/love_neighbor.jpg';

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
                     <div class="calling_img img_1">
                     </div>
                     <p>
                         <strong>Love God</strong>
                         <br>
                         Jesus taught us that to love God with the entirety of our being is the first and the greatest commandment. Through understanding the Gospel, we are able to live our lives out in gratitude and reverence of God. We believe that all followers of Christ are called to an intimate, personal relationship with God that comes from truly understanding "Who He Is" and "What He Has Done" and living a life that reflects the transformation of the heart.
                     </p>
                </div>
                <div class="calling">
                     <div class="calling_img img_2">
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
                <h2>
                <strong>Follow my example, as I follow the example of Christ.<br> - 1 Corinthians 11:1</strong>
                </h2>
                <p>
                    We believe that the greatest form of outreach is to live out the lifestyle of worship, so that we can be an example for others to follow. Through living a holy lifestyle, we believe that we will be able to lead those around us to also see the light of Christ.
                </p>
            </span>
        </div>
        <div class="parallax_3">
            <span>
                Join Us This Sunday
            </span>
        </div>
    </main>
    `;

    const first_pic = new Image();
    first_pic.src = pic_one;
    const img_1 = document.querySelector(".img_1");
    img_1.appendChild(first_pic);

    const second_pic = new Image();
    second_pic.src = pic_two;
    const img_2 = document.querySelector(".img_2");
    img_2.appendChild(second_pic);

})();

export {welcome};