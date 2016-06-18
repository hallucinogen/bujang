import React from 'react';
import styles from 'src/components/Admin/Admin.scss';
import { post } from 'src/lib/AJAX';

export default class Admin extends React.Component {
  render() {
    return (
      <div className={styles.wrap} onChange={this._onStatusChange}>
        <select>
          <option value='on'>On</option>
          <option value='off'>Off</option>
        </select>
      </div>
    );
  }

  _onStatusChange(event) {
    const status = event.target.value;
    post('/admin', { status });
  }
}
