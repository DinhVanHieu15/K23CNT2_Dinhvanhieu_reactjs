import React, { useState } from 'react';

export default function DvhFormUser({ onDvhAddNew }) {
  const [id, setDvhId] = useState('');
  const [dvhFullName, setDvhFullName] = useState('');
  const [dvhUserName, setDvhUserName] = useState('');
  const [dvhPassWord, setDvhPassWord] = useState('');

  const dvhHandlSubmit = (event) => {
    event.preventDefault();
    console.log(id, dvhFullName, dvhUserName, dvhPassWord);
    onDvhAddNew({ id, dvhFullName, dvhUserName, dvhPassWord });
  };

  return (
    <div>
      <form onSubmit={dvhHandlSubmit}>
        <p>Mã sinh viên:
          <input type='text' name='id' value={id} onChange={(ev) => setDvhId(ev.target.value)} />
        </p>
        <p>Họ và tên:
          <input type='text' name='dvhFullName' value={dvhFullName} onChange={(ev) => setDvhFullName(ev.target.value)} />
        </p>
        <p>Tài Khoản:
          <input type='text' name='dvhUserName' value={dvhUserName} onChange={(ev) => setDvhUserName(ev.target.value)} />
        </p>
        <p>Mật Khẩu:
          <input type='password' name='dvhPassWord' value={dvhPassWord} onChange={(ev) => setDvhPassWord(ev.target.value)} />
        </p>
        <p>
          <button type='submit'>Save</button>
        </p>
      </form>
    </div>
  );
}
