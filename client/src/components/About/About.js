import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="container">
                <h1>RABBI RAEL & ALIZA BLUMENTHAL</h1>
                <div className="row">
                    <div className="col-md-12" id="rabbi">
                        <img src="./blumenthals.jpg" className="rabbi" alt="rabbi"></img>
                        <p>
                            Rabbi and Rebbetzin Blumenthal began serving as our Rav and Rebbetzin since 2015. Under their leadership our community has grown by leaps and bounds; welcoming over 60 new families and creating a range of programming that caters to all ages, levels of Jewish education and social engagement.
                        </p>
                        <p>
                            Rabbi Blumenthal came to BRS West from Congregation Keter Torah in Teaneck, NJ where he served as Rabbinic Intern and from Yavneh Academy in Paramus, NJ where he served as a Rebbe. Previously he served as the director of Teaneck NCSY and as a director of NCSY's TJJ program in Israel.
                        ​</p>
                        <p>
                            Rabbi Blumenthal was born and raised in Johannesburg, South Africa and studied for three years in Yeshivat Kerem B'Yavneh. He holds a Bachelors Degree in Computer Science from Yeshiva University. He completed his Rabbinic studies at RIETS while studying in The Katz Kollel at RIETS. In addition to serving as our Rabbi, Rabbi Blumenthal is a Rebbe at the Katz Yeshiva High School. Rabbi Blumenthal is a recent half marathon runner and can often been seen playing the ukulele.
                        </p>
                        <p>
                            Rebbetzin Aliza Blumenthal, completed her BA in psychology at Stern College for Women, and then went on to receive her Masters in Social Work from Hunter College in NYC. She previously served as a therapist at Jewish Family Services in Clifton/Passaic as well as the outreach coordinator for Project S.A.R.A.H., which serves the needs of Orthodox Jews affected by domestic violence and sexual abuse.
                        </p>
                        <p>
                            In addition to serving as our Rebbetzin, Aliza is clinical social worker at Mind and Mobility, serving the senior population of Palm Beach County.
                        </p>
                        <p>
                            The Blumenthal’s are blessed with three children: Ayelet, Dovi & Temima.
                        </p>
                        <p>
                            To get in touch with Rabbi Blumenthal he can be reached via email: <a href="mailto:rrb@brsonline.org">rrb@brsonline.org</a>, and at (561) 909-0234.
                        </p>
                    </div>

                </div >
            </div>
        );
    }
}

export default About;