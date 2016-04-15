import React from 'react';
import styles from 'src/components/App/App.scss';

const STATE = 'busy';
const outStatus = 'interviewing';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      window.location.reload(true)
    }, 5 * 60 * 1000);
  }

  render() {
    let alert = null;
    switch (STATE) {
      case 'around':
        alert = <div className="alert alert-success" role="alert"><b>Gogo is around!</b> Feel free to tap his back or give a hug or whatever!</div>;
        break;
      case 'busy':
        alert = (
          <div className="alert alert-danger" role="alert">
            <b>Gogo is busy!</b> Please send email to listiarso@fb.com or ping him on Messenger only if it's urgent!
          </div>
        );
        break;
      case 'vacation':
        alert = (
          <div className="alert alert-danger" role="alert">
            <b>Gogo is on vacation!</b> Please send email to listiarso@fb.com or ping him on Messenger only if it's urgent!
          </div>
        );
        break;
      case 'out':
        alert = (
          <div>
            <div className="alert alert-warning" role="alert">
              <b>Gogo is {outStatus}!</b> Please wait or you can ping him by clicking the button below:
            </div>
            <a href="#" className="btn btn-primary">Ping!</a>
          </div>
        );
        break;
    }

    return (
      <div className={styles.wrap}>
        <div className={styles.leftSection}>
          <img
            className={styles.profpic}
            src="/images/profpic1.jpg" />
        </div>
        <div className={styles.rightSection}>
          <h3>Listiarso Wastuargo (Gogo)</h3>

          <div>
            <p>
              <b>Heya!</b> Name is Gogo. Love photography, movie, music, video games and corgi. I have a habit to air-(guitar/drum/piano)
              when listening to good music, so please pardon the disruption. Feel free to ask me anything about JavaScript, Android,
              C# or game development - those are my strongest suits :)
            </p>

            <p>
              Now this starts to sound like a Tinder biography, so I'm going to stop.
            </p>
          </div>

          {alert}
        </div>
      </div>
    );
  }
};
