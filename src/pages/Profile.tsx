import React from 'react';
import '../CSSfiles/Profile.css';

interface User {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  joinDate: string;
  website?: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const Profile: React.FC = () => {
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate blogger and web developer with over 5 years of experience in creating engaging content and building modern web applications.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    joinDate: 'January 2023',
    website: 'https://johndoe.com',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    }
  };

  const stats = [
    { label: 'Posts', value: 24 },
    { label: 'Followers', value: 1245 },
    { label: 'Following', value: 89 }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-email">{user.email}</p>
          <p className="profile-join-date">Member since {user.joinDate}</p>
        </div>
      </div>

      <div className="profile-bio">
        <h2>About Me</h2>
        <p>{user.bio}</p>
      </div>

      <div className="profile-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="profile-links">
        {user.website && (
          <a href={user.website} className="website-link" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        )}
        <div className="social-links">
          {user.socialMedia.twitter && (
            <a href={user.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
          {user.socialMedia.linkedin && (
            <a href={user.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {user.socialMedia.github && (
            <a href={user.socialMedia.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;