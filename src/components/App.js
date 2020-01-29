import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import styles from '../../src/components/app.css';

import colossus from '../../assets/colossus.jpeg';
import cornveliousDaniel from '../../assets/cornveliousDaniel.jpeg';
import LighthouseKeeper from '../../assets/LighthouseKeeper.jpeg';
import RicktiminusSancheziminius from '../../assets/RicktiminusSancheziminius.jpeg';
import RisottoGroupon from '../../assets/RisottoGroupon.jpeg';
import TuskedAssasin from '../../assets/TuskedAssasin.jpeg';
import UncleSteve from '../../assets/UncleSteve.jpeg';
import ChairPerson from '../../assets/Chair-person.jpeg';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.App}>
          <Character image={colossus} name="Colossus" status="Dead" species="Human" gender="Male" origin="Post-Apocalyptic Earth" lastLocation="Post-Apocalyptic Earth"/>
          <Character image={cornveliousDaniel} name="Cornvelious Daniel" status="Dead" species="Alien, Gromflomite" gender="Male" origin="unknown" lastLocation="Galactic Federation Prison"/>
          <Character image={LighthouseKeeper} name="Lighthouse Keeper" status="Dead" species="Alien, Cat-Person" gender="Male" origin="Purge Planet" lastLocation="Purge Planet"/>
          <Character image={RicktiminusSancheziminius} name="Ricktiminus Sancheziminius" status="Dead" species="Human" gender="Male" origin="unknown" lastLocation="Citadel of Ricks"/>
          <Character image={RisottoGroupon} name="Risotto Groupon" status="Dead" species="Alien, Blue ape alien" gender="Male" origin="Resort Planet" lastLocation="Resort Planet"/>
          <Character image={TuskedAssasin} name="Tusked Assassin" status="unknown" species="Alien, Tuskfish" gender="Male" origin="Resort Planet" lastLocation="Resort Planet"/>
          <Character image={UncleSteve} name="Uncle Steve" status="Dead" species="Alien, Parasite" gender="Male" origin="unknown" lastLocation="Earth (Replacement Dimension)"/>
          <Character image={ChairPerson} name="Chair-person" status="Alive" species="Humanoid, Chair" gender="Male" origin="Earth (Chair Dimension)" lastLocation="Earth (Chair Dimension)"/>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
 

export default App;
