import encodeFormData from 'src/lib/encodeFormData';
import Promise from 'promise';

export function request(method, url, body) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open(method, url, true);

    xhr.onerror = (e) => {
      reject({
        success: false,
        message: 'Network Error',
        error: 'Network Error',
        errors: ['Network Error'],
        notice: 'Network Error',
      });
    };

    xhr.onload = (e) => {
      if (this.status === 200) {
        console.log('success');
        let json = {};
        try {
          json = JSON.parse(this.responseText);
        } catch(ex) {
          reject(this.responseText);
          return;
        }
        if (json.hasOwnProperty('success') && json.success === false) {
          reject(json);
        } else {
          resolve(json);
        }
      } else if (this.status === 403) {
        reject({
          success: false,
          message: "Permission Denied",
          error: "Permission Denied",
          errors: ["Permission Denied"],
          notice: "Permission Denied",
        });
      } else if (this.status >= 400 && this.status < 500) {
        let json = {};
        try {
          json = JSON.parse(this.responseText);
        } catch(ex) {
          reject(this.responseText)
          return;
        }
        let message = json.message || json.error || json.notice || 'Request Error';
        reject({
          success: false,
          message: message,
          error: message,
          errors: json.errors || [message],
          notice: message,
        });
      } else if (this.status >= 500) {
        reject({
          success: false,
          message: 'Server Error',
          error: 'Server Error',
          errors: ['Server Error'],
          notice: 'Server Error',
        });
      }
    };

    if (typeof body === 'object') {
      if (body instanceof FormData) {
        xhr.send(body);
      } else {
        xhr.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded; charset=UTF-8'
        );
        // Encode it as a url parameter string
        let formData = [];
        for (let k in body) {
          formData.push(encodeFormData(k, body[k]));
        }
        console.log(formData);
        xhr.send(formData.join('&'));
      }
    } else {
      xhr.send(body);
    }
  });
}

export function get(url) {
  return request('GET', url);
}

export function post(url, body) {
  return request('POST', url, body);
}

export function put(url, body) {
  return request('PUT', url, body);
}

// `delete` is a keyword
export function del(url) {
  return request('DELETE', url);
}
