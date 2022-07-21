import './App.scss';
import Image from 'react-bootstrap/Image';


function ContactInfo(){
    const handleDd = () =>{
        window.location.replace('https://www.doordash.com')
    }
    const handleUber = () =>{
        window.location.replace('https://www.ubereats.com')
    }
    const handleGrub = () =>{
        window.location.replace('https://www.grubhub.com')
    }
    const handleYelp = () =>{
        window.location.replace('https://www.yelp.com')
    }
    return (
        <div>
            <div id='contact-us'>
                <h1 className='headings'>Order Now!</h1>
                <h2>Takeout or Delivery!</h2>
                <p>Call Us: 516-222-2222!</p>
                <p>OR</p>
                <p>Find us on:</p>

                <div id='delivery-apps'>
                    <Image onClick={handleDd} thumbnail='true' width={100} length={100} src='https://cdn.doordash.com/img/dasher/DD_OpenGraph_preview.png'></Image>
                    <Image onClick={handleUber} thumbnail='true' width={100} length={100} src='https://pbs.twimg.com/profile_images/1525826473604567041/fOeuQzCg_400x400.jpg'></Image>
                    <Image onClick={handleGrub} thumbnail='true' width={100} length={100} src='https://mma.prnewswire.com/media/887026/GrubHub4_Logo.jpg?p=facebook'></Image>
                    <Image onClick={handleYelp} thumbnail='true' width={100} length={100} src='https://store-images.s-microsoft.com/image/apps.29817.9007199266243147.a52adf60-7105-4dcf-8722-08b1544c4ebc.d6ead9b4-4cd6-440f-8c44-18cfa043564f?mode=scale&q=90&h=300&w=300'></Image>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;