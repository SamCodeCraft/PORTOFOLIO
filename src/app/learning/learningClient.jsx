import React from 'react';

const LearningClient = () => {
  return (
    <section id="learning" style={{ padding: '20px', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ marginBottom: '20px', fontSize: '28px', color: '#333' }}>LEARNING</h2>
        <p>
          A curated collection of videos that I find interesting and informative in the world of modern frontend and backend web development.
        </p>
        <div
          className="video-grid"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            overflowX: 'auto',
            gap: '20px',
          }}
        >
          {/* Video 1 */}
          <div
            className="video-card"
            style={{
              flex: '0 0 auto',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              width: '200px',
              height: '200px',
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <iframe
                width="100%"
                height="150"
                src="https://www.youtube.com/embed/w7ejDZ8SWv8"
                title="React JS Crash Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h3 style={{ margin: '5px', fontSize: '16px' }}>React JS Crash Course</h3>
            </a>
          </div>

          {/* Video 2 */}
          <div
            className="video-card"
            style={{
              flex: '0 0 auto',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              width: '200px',
              height: '200px',
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=wjZofJX0v4M"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <iframe
                width="100%"
                height="150"
                src="https://www.youtube.com/embed/wjZofJX0v4M"
                title="Deep Learning"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h3 style={{ margin: '5px', fontSize: '16px' }}>Deep Learning</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningClient;
