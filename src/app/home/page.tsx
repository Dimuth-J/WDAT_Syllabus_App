"use client"

import Header from '../navbar/page';
import Slider from '../slideshow/page'

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Slider/>
            <main>
                <div className="text-justify mt-4">
                    <p>HTTP GET requests are used to retrieve information from a server. They are commonly used in web
                        browsing and API interactions to request data without affecting the state of the
                        server. GET requests can include query parameters to specify the data requested.</p>
                </div>
            </main>
        </div>
    );
};

export default Home;
