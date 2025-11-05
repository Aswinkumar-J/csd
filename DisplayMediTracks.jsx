// DisplayMediTracks.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayMediTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Example API call
    // axios.get('/api/meditracks').then(res => setTracks(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Medicine Tracker Catalog</h2>

      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Start Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tracks.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No medicine tracks found</td>
            </tr>
          ) : (
            tracks.map((track, index) => (
              <tr key={index}>
                <td>{track.medicineName}</td>
                <td>{track.dosage}</td>
                <td>{track.frequency}</td>
                <td>{new Date(track.startDate).toLocaleDateString()}</td>
                <td><button>Delete</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayMediTracks;
