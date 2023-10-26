import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './SchoolGallery.css';
import Footer from '../../Com/Footer/Footer';

const images = [

    { id: 1, src: 'https://scontent.fcmn3-1.fna.fbcdn.net/v/t31.18172-8/28947342_687624508293856_3894300678838516582_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=qg-89-2JtNkAX_PcagW&_nc_ht=scontent.fcmn3-1.fna&oh=00_AfBsx4fy1TDw58ynmcxJARHeu0UBlObPjf7puDMrDGB3Bg&oe=654E67D7', alt: 'Image.1' },
    { id: 2, src: 'https://scontent.fcmn3-2.fna.fbcdn.net/v/t31.18172-8/28828128_687624551627185_5945440808765145227_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=GS3BATGXLrcAX8b3Dmv&_nc_ht=scontent.fcmn3-2.fna&oh=00_AfCCWI-EOY_lWxvTrkmvr7EpPYV6_XAp57LYh6yFQ_W-Tg&oe=654E758C', alt: 'Image.2' },
    { id: 3, src: 'https://scontent.fcmn3-2.fna.fbcdn.net/v/t31.18172-8/28701003_687623841627256_487439742887223117_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=aIhenEDwBcIAX8xYy2h&_nc_ht=scontent.fcmn3-2.fna&oh=00_AfAVC85ntI3mxeYWgiaEuzimD0eiAwRkvf2EpxW7SU-C7A&oe=654E7CAF', alt: 'Image.3' },
    { id: 4, src: 'https://scontent.fcmn3-1.fna.fbcdn.net/v/t31.18172-8/28515105_678976282492012_2600623751820869176_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=aKaG_wLL4OIAX_GysO2&_nc_ht=scontent.fcmn3-1.fna&oh=00_AfCX6tv6h2wQLBi2-lTAEoJR8r8caZ6RZNufZVGMXYUQtg&oe=654E6BA0', alt: 'Image.4' },
    { id: 5, src: 'https://scontent.fcmn3-1.fna.fbcdn.net/v/t31.18172-8/28060967_667309606992013_892860586605771811_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=rkCx1k-POD4AX_Xto5r&_nc_ht=scontent.fcmn3-1.fna&oh=00_AfAYfJBkY5o0x7Q-2QYFWNmvtCVBWUCSa8G5avXe67KSOQ&oe=654E8614', alt: 'Image.5' },
    { id: 6, src: 'https://scontent.fcmn3-1.fna.fbcdn.net/v/t31.18172-8/25542399_634444146945226_5249905394660851542_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0bb214&_nc_ohc=CZaNzXuo1cIAX-teEZR&_nc_ht=scontent.fcmn3-1.fna&oh=00_AfA_j_RUxUsvYIBvd8XfgrqBFykbUmo4bvJ8m_0TaUmDLg&oe=654E8019', alt: 'Image.6' },
    { id: 7, src: 'https://scontent.fcmn3-2.fna.fbcdn.net/v/t31.18172-8/25487270_632903770432597_8758829175783487677_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=td9sX_lEE-IAX_mGS8Y&_nc_ht=scontent.fcmn3-2.fna&oh=00_AfAMpGMILcd4yTsEVjUBoCx4iUTTKq_D_f9PCC666uvknA&oe=654E67D9', alt: 'Image.7' },
    { id: 8, src: 'https://scontent.fcmn3-1.fna.fbcdn.net/v/t1.18169-9/25446024_632889013767406_822656215830359992_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=mCaqY0MHraYAX-UJOBs&_nc_ht=scontent.fcmn3-1.fna&oh=00_AfBvKuToEhY-EJc7uGF5hlMAov4ECwbTAd1BDt6Vv5KFzg&oe=654E829D', alt: 'Image .8' },
    { id: 9, src: 'https://scontent.fcmn2-2.fna.fbcdn.net/v/t31.18172-8/28516515_678976065825367_96263765278519764_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=aWPHWYLOffYAX8qFz77&_nc_ht=scontent.fcmn2-2.fna&oh=00_AfCPLIE0ETjlFoGHcTqqCXEN7CDbVcewhW0yo77OtB2t5g&oe=65619FC8', alt: 'Image .9' },
    { id: 10, src: 'https://scontent.fcmn3-2.fna.fbcdn.net/v/t31.18172-8/25438760_632796713776636_1719877131232138795_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0bb214&_nc_ohc=jPVPrZovUYUAX8fVS5n&_nc_ht=scontent.fcmn3-2.fna&oh=00_AfCkKhN6-TyTaGt30ijw4u4LoUlaxx6KdZJVDGQtpcuWbg&oe=654E9156', alt: 'Image.10.' },
    { id: 11, src: 'https://scontent.fcmn3-2.fna.fbcdn.net/v/t1.6435-9/73179872_1131075970615372_8648677250549415936_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=kfXTdgFPiB4AX_Vo1CF&_nc_ht=scontent.fcmn3-2.fna&oh=00_AfA0bXU0KVY7-V2NuJa58Yqunp9fvtPKF9buSQR3tVc13w&oe=654E81B7', alt: 'Image.11' },
    { id: 12, src: 'https://scontent.fcmn2-2.fna.fbcdn.net/v/t31.18172-8/30073350_701176853605288_8222420497550005919_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=HqjiabQGip4AX96zvu4&_nc_ht=scontent.fcmn2-2.fna&oh=00_AfByoShzXBeouyiW8My1X4nqL7VSTJfWVRBVJz8hFgeNbw&oe=656188E1', alt: 'Image.12' },
    { id: 13, src: 'https://scontent.fcmn2-2.fna.fbcdn.net/v/t31.18172-8/30051582_701176873605286_1717481657599056180_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=JkA-Q1nVINsAX-no-hR&_nc_ht=scontent.fcmn2-2.fna&oh=00_AfCcUVaDMjTbsM8rLMrOzCopOlXUHK-l3AGpN52yg8-yEQ&oe=6561ABE7', alt: 'Image.13' },
    { id: 14, src: 'https://scontent.fcmn2-2.fna.fbcdn.net/v/t31.18172-8/29983648_701176883605285_6805809093323720104_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_ohc=lU64VpWvLssAX89HORo&_nc_ht=scontent.fcmn2-2.fna&oh=00_AfDA7HCMvPtjLHG1X03r1-T2l5n2d5etLqgfRSRozyDu8Q&oe=6561BF03', alt: 'Image.14' },
    { id: 15, src: 'https://scontent.fcmn2-2.fna.fbcdn.net/v/t31.18172-8/31043342_711966615859645_8826146070551284883_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=1YsoBacLgwMAX8cqFkP&_nc_ht=scontent.fcmn2-2.fna&oh=00_AfDAtXDNIRbDuc20JjKp4eh8iukaRegxF3FmhVG3I3B4EA&oe=6561AAEF', alt: 'Image.15' },
    { id: 16, src: 'https://scontent.fcmn2-1.fna.fbcdn.net/v/t1.6435-9/54409152_952313538491617_6141809924839047168_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=4p0iDAAxMN0AX8w7S7c&_nc_ht=scontent.fcmn2-1.fna&oh=00_AfB2hLoz2p4a6obM9g7q48DhIO4IkT-ygqHlGqJkS9aG8A&oe=6561B051', alt: 'Image.16' },

];

function SchoolGallery() {
    const [scrolling, setScrolling] = useState(false);
    const [zoomed, setZoomed] = useState(null);

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: 'ease',
        });

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleImageClick = (image) => {
        setZoomed(image);
    };

    const closeZoom = () => {
        setZoomed(null);
    };

    return (
        <>
            <div className={`SchoolGallery ${scrolling ? 'scrolling' : ''}`}>
                <h1>School Gallery</h1>
                <h2>ABDELMOUEN CAPTURED MOMENTS: MEMORIES ON DISPLAY</h2>
                <div className="gallery">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="image"
                            data-aos="fade-up"
                            onClick={() => handleImageClick(image)}
                        >
                            <img src={image.src} alt={image.alt} />
                            <p>{image.alt}</p>
                        </div>
                    ))}
                </div>
                {zoomed && (
                    <div className="lightbox" onClick={closeZoom}>
                        <img src={zoomed.src} alt={zoomed.alt} />
                    </div>
                )}
            </div>
            <div className='gallery-footer'>
                <Footer />
            </div>
        </>
    );
}

export default SchoolGallery;