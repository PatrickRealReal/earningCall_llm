import meter1 from "../assets/img/meter1.svg";
import Dataset from "../assets/img/Datasets_statistics.png";
import distribution from "../assets/img/Distribution_events.png";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Bar } from '@ant-design/charts';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const distributionData = [
    { action: 'Acquisition', type: 'Yes', value: 22 },
    { action: 'Acquisition', type: 'No', value: 78 },
    { action: 'SEO', type: 'Yes', value: 15 },
    { action: 'SEO', type: 'No', value: 85 },
    { action: 'CBI', type: 'Yes', value: 28 },
    { action: 'CBI', type: 'No', value: 72 }
  ];

  const distributionConfig = {
    data: distributionData,
    xField: 'action',
    yField: 'value',
    seriesField: 'type',
    legend: { position: 'top-left' }
  };

  return (
    <section className="skill" id="data">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Label Distribution</h2>
                        <p>Dataset statistics (left) and label distribution for each event (right).</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img className="zoomable-image" src={Dataset} alt="Image" />
                            <h5>Dataset</h5>
                        </div>
                        <div className="item">
                            <Bar {...distributionConfig} />
                            <h5>Distribution</h5>
                        </div>
                      </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
