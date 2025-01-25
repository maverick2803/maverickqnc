import React, { useState, useEffect } from 'react';

const SocialMediaPortfolio = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 1000) + 1);
  }, []);

  const socialLinks = {
    instagram: 'https://instagram.com/maverick.qnc',
    youtube: 'https://youtube.com/@https://youtu.be/rkDGlZZ35kk?si=E6_KeLViHI0tDq0U',
    facebook: 'https://facebook.com/https://www.facebook.com/share/1XwAihEjXm/',
    tiktok: 'https://tiktok.https://www.tiktok.com/@seraphim_angelss?_t=ZS-8tMzF1yzFK6&_r=1/@maverick',
    spotify: 'https://open.spotify.com/user/maverick'
  };

  const handleClick = (platform) => {
    setActiveIcon(platform);
    window.open(socialLinks[platform], '_blank');
    
    setTimeout(() => {
      setActiveIcon(null);
    }, 1000);
  };

  // Restored Icon Definitions
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );

  const SpotifyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 167.5 167.5" fill="black">
      <path d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.1c-1.6 2.6-5.1 3.4-7.7 1.7-21.1-13-47.6-16-78.8-8.7-3 .9-6-.8-6.9-3.8-.9-3 .8-6 3.8-6.9 33.6-7.6 63.6-4.6 87.2 10 2.7 1.6 3.4 5.1 1.7 7.7zm10.7-24.5c-2 3.2-6.2 4.2-9.3 2.1-23.4-14.4-59.1-18.5-86.8-10.1-3.6 1.1-7.4-1-8.5-4.6-1.1-3.6 1-7.4 4.6-8.5 32.4-9.8 71.4-5 98.8 11.5 3.1 2 4.2 6.2 2.1 9.3zm.9-25.5c-28-16.6-74.1-18.1-100.8-10-4.3 1.3-8.9-1.1-10.2-5.4-1.3-4.3 1.1-8.9 5.4-10.2 31.7-9.6 83.4-7.7 116.5 11.8 3.9 2.3 5.2 7.2 2.9 11.1-2.3 3.9-7.2 5.2-11.1 2.9z"/>
    </svg>
  );

  const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="black">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01 2.51.01 4.53.41 6.35 1.46 1.65.96 2.86 2.26 3.66 3.93.63 1.32 1 2.76 1.14 4.26.06.82.06 1.64.06 2.46v5.03c0 .85-.04 1.69-.15 2.53-.17 1.2-.51 2.35-1.02 3.43-.76 1.65-1.86 3-3.28 4.12-1.64 1.29-3.51 2.09-5.61 2.4-1.24.18-2.49.2-3.74.16-2.53-.09-4.87-.79-6.89-2.2-1.7-1.2-3-2.75-3.91-4.57-.62-1.23-1.04-2.54-1.24-3.91-.11-.82-.16-1.64-.16-2.46v-5.04c0-.82.04-1.64.16-2.46.17-1.24.51-2.44 1.05-3.56.76-1.58 1.83-2.93 3.23-4.02 1.55-1.19 3.33-1.96 5.31-2.23 1.13-.15 2.27-.13 3.41-.12h5.03zm3.43 7.11c-1.12-1.11-2.49-1.72-4-1.76-1.51-.04-2.91.54-4.03 1.62-1.08 1.04-1.67 2.33-1.7 3.79-.03 1.65.59 3.05 1.74 4.2 1.12 1.12 2.53 1.73 4.08 1.76 1.51.03 2.91-.54 4.03-1.62 1.08-1.04 1.67-2.33 1.7-3.79.03-1.65-.59-3.05-1.74-4.2h-.08z"/>
    </svg>
  );

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-bg-shift">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/20 to-black opacity-50 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-purple-900/30 to-black/30 animate-bg-shift-reverse"></div>
      </div>

      {/* Responsive Container */}
      <div className="relative z-10 w-full max-w-md bg-black/50 rounded-2xl shadow-2xl backdrop-blur-sm p-6 text-center">
        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-500">
          <img 
            src="/api/https://pin.it/RGMsU602o/200/200" 
            alt="Maverick Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">MAVERICK</h1>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 md:space-x-8 mb-6 flex-wrap">
          {['instagram', 'youtube', 'facebook', 'tiktok', 'spotify'].map((platform) => (
            <button
              key={platform}
              onClick={() => handleClick(platform)}
              className={`
                m-2 transform transition-all duration-300 
                ${activeIcon && activeIcon !== platform ? 'blur-sm scale-90' : ''}
                ${activeIcon === platform ? 'animate-ping scale-110' : ''}
                hover:scale-110
              `}
            >
              {platform === 'instagram' && <InstagramIcon />}
              {platform === 'youtube' && <YouTubeIcon />}
              {platform === 'facebook' && <FacebookIcon />}
              {platform === 'tiktok' && <TikTokIcon />}
              {platform === 'spotify' && <SpotifyIcon />}
            </button>
          ))}
        </div>

        {/* Visitor Counter & Emoji */}
        <div className="text-white text-sm opacity-75 mt-4">
          Thank you for visiting me! 😊
          <div className="mt-2">
            Visitors: {visitorCount}
          </div>
        </div>

        {/* Minimalist Design Element */}
        <div className="flex justify-center space-x-4 opacity-50 mt-4">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPortfolio;