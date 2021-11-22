import React, { useState } from 'react'

const Tabs = ({tabs,longDescription,reviews}) => {
    const [selected, setSelected] = useState(0);
    const handleClick = (index) => {
      setSelected(index);
    };
    return (
        <div className=''>
          <div className='d-flex'>
          {tabs.map((tab, index) => {
              return (
                <li key={index} className="nav-item">
                  <button
                    className={
                      selected === index ? "nav-link active" : "nav-link"
                    }
                    onClick={() => handleClick(index)}
                  >
                    {tab}
                  </button>
                </li>
              );
            })}  
          </div>

            <div className="tab-pane fade show active">
              <div className="p-4 p-lg-5 bg-white">
                {selected === 0 ? (
                  <>
                    <h6 className="text-uppercase">Product description </h6>
                    <p className="text-muted text-small mb-0">
                      {longDescription}
                    </p>
                  </>
                ) : (
                  <div className=''>
                   
                    {reviews.map((signleReview,index) => {
                      const { reviewer, review } = signleReview;
                      return (
                        <div key={index}>
                          <h5> {reviewer} </h5>
                          <p> {review} </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
        </div>
    )
}

export default Tabs
