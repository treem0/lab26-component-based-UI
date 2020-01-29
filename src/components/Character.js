import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

export default class Character extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      lastLocation: PropTypes.string.isRequired
    }
    render() {
      const { image, name, status, species, gender, origin, lastLocation } = this.props;
      return (
        <article className={styles.CharacterCard}>
          <div className="card-image"><img src={image}></img></div>
          <div className="characterCard_Title">
            <h2 className={styles.characterCard_Name}>{name}</h2>
          </div>
          <div className="characterCard_Info">
            <div className={styles.CharacterCard_Status}>
              <span>STATUS</span>
              <p>{status}</p>
            </div>
            <div className={styles.CharacterCard_Species}>
              <span>SPECIES</span>
              <p>{species}</p>
            </div>
            <div className={styles.CharacterCard_Gender}>
              <span>GENDER</span>
              <p>{gender}</p>
            </div>
            <div className={styles.CharacterCard_Origin}>
              <span>ORIGIN</span>
              <p>{origin}</p>
            </div>
            <div className={styles.CharacterCard_LastLocation}>
              <span>LAST LOCATION</span>
              <p>{lastLocation}</p>
            </div>
          </div>
        </article>
      );
    }
}
