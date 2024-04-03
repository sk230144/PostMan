import React, { useState } from 'react';
import axios from 'axios';
import './RestClient.css';

const RestClient = () => {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const [requestData, setRequestData] = useState('');
    const [response, setResponse] = useState('');
  
    const handleSendRequest = async () => {
        try {
          const res = await axios({
            method,
            url,
            data: requestData && JSON.parse(requestData),
          });
          setResponse(JSON.stringify(res.data, null, 2));
        } catch (error) {
          // Display an alert if an error occurs
          alert('Error: Something went wrong with the API request.');
          // Log the error to console for debugging
          console.error('API Error:', error);
        }
      };

    
  return (
    <div className="rest-client-container">
      <h2>REST Client</h2>
      <div className="input-container">
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          className="url-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="method">Method:</label>
        <select
          id="method"
          className="method-select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="requestData">Request Data (JSON):</label>
        <textarea
          id="requestData"
          className="request-data-textarea"
          value={requestData}
          onChange={(e) => setRequestData(e.target.value)}
        />
      </div>
      <button className="send-request-button" onClick={handleSendRequest}>Send Request</button>
      <div className="response-container">
        <h3>Response:</h3>
        <pre className="response-pre">{response}</pre>
      </div>
    </div>
  );
};

export default RestClient;
