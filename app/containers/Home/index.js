/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import NavBarHome from 'components/NavBarHome';
import NavBarMain from 'components/NavBarMain';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state= {
      image:""
    }
  }

  renderNav = () =>
  {
      if(sessionStorage.getItem('token') !== null || sessionStorage.getItem('token') !== '')
      {
        return (
          <NavBarHome/>
        )
      }
      else return (
        <NavBarMain/>
      )
  }

  render() {
    return (
      <div className="homeContainer">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
          {this.renderNav()}
          <div className="homeTitle">Savannah River Watch Program
          <p className="subTitle">"Ensuring a Swimable, Fishable Savannah River"</p>
          </div>
          <div className="birdWrapDiv">
            <img className="logoSRKbird" src={require("../../images/SRK-Bird-Only-Logo.jpg")}/>
          </div>
          <div className="subHeader">
          <h1>Our Mission & Background</h1>
          Savannah Riverkeeper serves as the primary guardian of the Savannah River striving to respect, protect, and improve the entire river basin through education, advocacy, and action. We are a 501c(3) non-profit organization funded by individuals and foundations that share our commitment to creating a clean and healthy river that sustains life and is cherished by its people. We strive to be an effective and sustainable organization solely focused on making the Savannah River a healthy and productive watershed ensuring the natural, economic, and recreational viability of the basin as a whole now and for generations to come. We accomplish these goals by working under the pillars of restoration, protection and education.
          </div>
          <div className="firstScrollPic">
          </div>
          <div className="bodyText">
          <h1>Community Need</h1>
          <p>Every day our local waterways are used for fishing, swimming, drinking and other recreation. But is the water clean and safe? That question may be harder to answer than one would think. Bacterial pollution can cause illness in people, contamination of fish, algal growth and other problems for ecosystems and human use. With inadequate monitoring of our waterways, especially in rural and non-coastal areas, citizens are often in the dark about water quality. Even data and fish advisories that already exist can be hard to find for the average citizen. Spurring governments to develop stronger monitoring programs is often challenging, with environmental agencies at all levels facing tight budgets.
          </p>
          <p>Meanwhile, there is an estimated population of more than 60,000 veterans in the CSRA in need of assistance. Savannah Riverkeeper’s (SRK) Veterans for Clean Water initiative will address the need within our community for opportunities for veterans transitioning back into the workforce after service or deployment, as well as developing the team structure necessary to test water quality in the Savannah River and communicate results to the population.
          </p>
          <p>SRK is seeking support to establish a veteran outreach program offering participants the opportunity to test water quality in the Savannah River watershed. The program will provide a partnership opportunity between our organization’s mission and veterans with a need or desire for community involvement, field training in water sciences, and other technical skills.
          </p>
          </div>
          <div className="secondScrollPic">
          </div>
          <div className="bodyTextTwo">
          <h1>Program Details & Impact</h1>
          <p>Under the direction of a program coordinator, participants will be assigned to a section of the river where he or she will take samples 4 times a month. They will be provided with the education required to collect, store and process the samples in the Savannah Riverkeeper lab beginning with and beyond Georgia Adopt-A-Stream training. Samples will be collected, tested for bacteria against state and federal standards, and charted for each section of the river. The data will be consolidated and published on SRK’s website, allowing the community to find out which locations in the watershed are safe or unsafe for fishing and recreation. We will use Coosa Riverkeeper’s thorough Swimmable Waters Achievement Guide as an outline for determining objectives. It has been a resource for successful water quality monitoring initiatives by Waterkeepers across the country. Such a program would be an incredible resource and would elevate SRK’s contribution to our vast watershed.
          </p>
          <p>Veterans will be responsible for the entirety of the process from sample collection to dissemination, building skills in field science, information technology, communications and more.
          </p>
          <p>Participants will also have the opportunity to integrate with our K9 Illicit Sewage Detection Program, using canine partners to sniff out leaks and trouble spots.
          </p>
          <p>SRK has a long history of providing capable volunteers, interns, community service workers and other interested partners with opportunities for meaningful work that improves our waterways and communities. This program will help give veterans a sense of pride, belonging, competence and direction. We believe connecting with the river also builds character, respect for nature and facilitates healing. While we recognize the tremendous impact of many organizations offering resources to wounded and PTSD veterans, our program will offer an opportunity for the rest of the veteran population seeking to re-enter the workforce.
          </p>
          <p>Former servicemen and women are equipped with amazing assets that make them perfectly cut out for the “boots-on-the-ground” citizen monitoring approach that Waterkeepers like SRK take to protect our rivers. They are often service-oriented, driven by missions with a clear goal, able to work independently or as team leaders, emphasize safety and other guidelines like those necessary in field science. Allowing veterans to further connect and develop these skills outside of the military will open the door to new paths whether they be in government, nonprofits or critical STEM careers. SRK has seen participants of our community service, volunteer and intern programs go on to secure gainful employment in all of these areas. We believe that veterans will also benefit; that they are among our community’s greatest assets and that the mission to make our river safer for all citizens is a natural fit for collaboration.
          </p>
          <p>SRK will coordinate with local veteran groups from Fort Gordon, Georgia Military College and University of South Carolina Aiken to place up to 40 veterans in our program in both the Augusta and Savannah areas. SRK will also utilize a consulting relationship with an Army psychologist for referrals of non-PTSD veterans who are a strong potential match for our program, ensuring that we provide the greatest opportunity for successful reintegration into the workforce and civilian life. Beyond the positive impact to veterans, our water quality test results will be used to educate 1.5 million people who rely on the Savannah River for fishing, swimming, drinking and recreation.
          </p>
          </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
