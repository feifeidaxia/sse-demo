"use client";

import React, { useEffect, useState } from 'react';

const SseComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const eventSource = new EventSource('https://sse-demo-fmhypq480-asdfs-projects-22a69c19.vercel.app/sse');

    eventSource.onmessage = function(event) {
      const data = JSON.parse(event.data);
      setMessage(data.message);
    };

    eventSource.onerror = function() {
      console.error('EventSource failed.');
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Server-Sent Events</h1>
      <p>{message}</p>
    </div>
  );
};

export default SseComponent;
