import React from 'react';

const Sabina = () => {



    const [mas, setMas] = React.useState([
        {
            text : '“Buyer buzz partner network disruptive non-disclosure agreement business”',
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQitYJte_ScFjvgWruTNQHOQhYrHXvVsSIRw&usqp=CAU',
            name : 'Albus Dumbledore',
            kasbi : 'Manager @ Howarts',
        },
        {
            text : '“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”',
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CvJ5j1FadQHqRV2FGZ6K1CcXC5z2WxmAnQ&usqp=CAU',
            name : 'Severus Snape',
            kasbi : 'Manager @ Howarts',
        },
        {
            text : '“Release facebook responsive web design business model canvas seed money monetization.”',
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbzqKhRBrdthSGJd8hYQXekwHewbi9Hw5xg&usqp=CAU',
            name : 'Albus Dumbledore',
            kasbi : 'Manager @ Howarts',
        }
    ]);


    return (
        <div className='container'>
            <div className='box'>
                <h1>An enterprise template to ramp <br /> up your company website</h1>
                <div className='d-flex quti'>
                {
                    mas.map((item,index)=>{
                        return(
                            <div className='card'>
                                 <h2>{item.text}</h2>
                                 <div className='d-flex boxcha'>
                                    <img src={item.img} alt="" />
                                    <div><h3>{item.name}</h3>
                                    <h4>{item.kasbi}</h4></div>
                                 </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
 

 <div className='rasm'>
    <img src="https://static01.nyt.com/images/2021/05/02/business/00google-office1/00google-office1-videoSixteenByNineJumbo1600.jpg" alt="" />
    <div className='d-flex'>
        <div><h1>We connect our customers with the best, and help them keep up-and stay open.</h1></div>
        <div>
            <h2>We connect our customers with the best?</h2>
            <hr />
            <h2>Android research & development rockstar? </h2>
            <hr />
        </div>
    </div>
 </div>


        </div>
    );
}

export default Sabina;
