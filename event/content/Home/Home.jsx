import React, {Component,Fragment} from 'react';

class Home extends Component{
    render(){
        return(
            <Fragment className="contenthome">
                <div className="slider">
                    <div className="slidercontent">
                            <img className="imageslider" src={require('../../images/banner-desktop.jpg')} />
                    </div>
                </div>
                <h2 className="dataprestasi">Prestasi Murid babastudio</h2>
                <div className="content">
                   
                    <div className="content-gambar">
                        <div className="image">
                            <img className="imagesliderr" src={require('../../images/21cineplex.jpg')} />
                            <div className="contentimage">
                                <h2 className="fontimage">www.21cineplex</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderr" src={require('../../images/bpn.jpg')} />
                            <div className="contentimage">
                                <h2 className="fontimage">www.bpn.go.id</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderr" src={require('../../images/republika.jpg')} />
                            <div className="contentimage">
                                <h2 className="fontimage">www.republika.co.id</h2>
                            </div>
                        </div>

                    </div>
                    {/* end cgambar */}
                    <div className="content-gambar">
                        <h2 className="dataprestasi">Tempat Kursus Babastudio</h2>
                        <div className="content-yutube">
                             <iframe width="560" height="315" src="https://www.youtube.com/embed/k1OWLK0Yhc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="content-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.195410128611!2d106.62761531431039!3d-6.237955662820547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf617855555%3A0x499c259b6b3d813a!2sKampus%20Babastudio%20-%20Tangerang.%20Kursus%20web%2C%20SEO%2C%20Internet%20marketing!5e0!3m2!1sid!2sid!4v1571069969653!5m2!1sid!2sid" width="550" height="300" frameborder="0"  allowfullscreen=""></iframe>
                        </div>

                    </div>
                    
                </div>

              
            </Fragment>
        )
    }
}


export default Home;
