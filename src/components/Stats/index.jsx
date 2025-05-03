import Experience from '../../assets/Experience.png';
import Assurance from '../../assets/Assurance.png';
import Satisfied from '../../assets/Satisfied.png';
import Completed from '../../assets/Completed.png';

const statsData = [
  {
    img: Experience,
    alt: '+ YEARS',
    value: "100",
    label: 'Authenticity',
    suffix: '% Transparent',
  },
  {
    img: Assurance,
    alt: '% QUALITY',
    value: 100,
    label: 'Assurance',
    suffix: '% QUALITY',
  },
  {
    img: Satisfied,
    alt: '% CLIENT',
    value: 100,
    label: 'Satisfaction',
    suffix: '% CLIENT',
  },
  {
    img: Completed,
    alt: 'Innovation',
    value: 100,
    label: 'Unique Solutions',
    suffix: '% Innovative',
  },
];

const StatsSection = () => {
  return (
    <div className="bg-white py-0 py-sm-5">
      <div className="container-fluid px-5">
        <div className="row align-items-center justify-content-around pt-4 pb-0 py-0 pb-sm-0">
          {statsData.map((item, index) => (
            <div key={index} className="col-sm-6 col-lg-6 col-xl-3 mb-4 col-12">
              <div className="row mb-5 mb-sm-0 mx-auto">
                <div className="col-3">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width="70"
                    height="70"
                    className="img-fluid"
                  />
                </div>
                <div className="col">
                  <h2 className="fs-4 fw-semibold text-primary p-0 m-0 pb-1 text-start">
                    <span className="counter">{item.value}</span> {item.suffix}
                  </h2>
                  <span className="fs-5">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
