import { useState, useEffect } from 'react';

import Banner from '../../components/banner/banner.component';
import FirstSection from '../../components/first-section/first-section.component';
import Slider from '../../components/slider/slider.component';
import ThirdSection from '../../components/third-section/third-section.component';
import Footer from '../../components/footer/footer.component';

function LandingPage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ loadedData, setLoadedData ] = useState({});

    useEffect(() => {
        setIsLoading(true);
        fetch('https://rest-api-mern.herokuapp.com/products/atb')
        .then((response) => {
            return response.json();
        }).then((data) => {
            setLoadedData(data)
            setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
    }

    return (
        <div>
            <Banner data={loadedData} />
            <FirstSection data={loadedData} />
            <Slider data={loadedData} />
            <ThirdSection data={loadedData} />
            <Footer data={loadedData} />
        </div>
    )
}

export default LandingPage;