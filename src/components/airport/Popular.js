import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default class AirportPagePopularLots extends Component {
    render() {

        const airport = this.props.airport;
        const airport_seo = this.props.airport_seo;
        const articleContent = "<p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p>";

        return (
            <div className="airport__popular section-pad">

                <div className="container airport__popular__container">

                    <div className="row airport__popular__row">

                        {/*RIGHT COLUMN*/}

                        <div className="col-lg-12 airport__popular__column airport__popular__column--right">
                            <h4 className="title-normal-bold-upper">
                                {airport_seo && airport_seo.header2}
                            </h4>
                            <div className="text-big">
                                {airport_seo &&
                                    <div dangerouslySetInnerHTML={{__html: airport_seo.text1}}></div>
                                }
                                <br/>
                                <br/>
                                {airport_seo &&
                                    <div dangerouslySetInnerHTML={{__html: airport_seo.text2}}></div>
                                }
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

AirportPagePopularLots.propTypes = {
    airport: PropTypes.object.isRequired,
    airport_seo: PropTypes.object
};