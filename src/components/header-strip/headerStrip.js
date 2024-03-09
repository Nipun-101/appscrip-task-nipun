
const dummyArray = new Array(3).fill(0);
const HeaderStrip = () => {
    return(
        <div className="header-strip">  
            <div className="header-strip-wrapper">
                {dummyArray.map((_, index) => (
                <div key={index} className="header-strip__content">
                    <img src="header-images/top-strip.png" alt="header-strip" />
                    <h1 className="header-strip__content__title">Lorem ipsum dolor</h1>
                </div>
                ))} 
                <div className="header-strip__content-mobile">
                <img src="header-images\top-strip.png" alt="header-strip" />
                <h1 className="header-strip__content__title">Lorem ipsum dolor</h1>
                </div> 
            </div>
        </div>
    )
    
};

export default HeaderStrip;
