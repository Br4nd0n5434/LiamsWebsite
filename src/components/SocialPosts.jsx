import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Card Component
const Card = ({ name, date, profileImage, content, likes, comments }) => {
  const formatDate = (dateString) => {
    const [datePart, timePart] = dateString.split(', ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute] = timePart.split(':');
    const formattedDate = `${day} ${getMonthName(parseInt(month))} at ${hour}:${minute}`;
    return formattedDate;
  };

  const getMonthName = (monthNumber) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNumber - 1];
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 bg-white dark:bg-gray-800 shadow rounded-lg w-full max-w-md">
        <div className="flex mb-3 items-center">
          {profileImage && <img src={profileImage} alt="Profile" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />}
          <div className="ml-3">
            <span className="block font-medium text-base sm:text-lg leading-tight text-black dark:text-gray-100">{name}</span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 font-light">{formatDate(date)}</span>
          </div>
        </div>
        <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{content}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex">
            <svg className="p-0.5 h-6 w-6 sm:h-7 sm:w-7 rounded-full z-20 bg-white dark:bg-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <defs>
                  <linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#18AFFF"/>
                    <stop offset="100%" stopColor="#0062DF"/>
                  </linearGradient>
                  <filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"/>
                    <feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
                    <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"/>
                  </filter>
                  <path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"/>
                </defs>
                <g fill="none">
                  <use fill="url(#a1)" xlinkHref="#b1"/>
                  <use fill="black" filter="url(#c1)" xlinkHref="#b1"/>
                  <path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"/>
                </g>
            </svg>
            <span className="ml-1 text-gray-500 dark:text-gray-400 font-light">{likes}</span>
          </div>
          <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">{comments} comments</div>
        </div>
      </div>
    </div>
  );
};

// SocialPosts Component
const SocialPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfilePicture = async (accessToken) => {
      try {
        const response = await axios.get('https://graph.facebook.com/v12.0/me/picture', {
          params: {
            access_token: accessToken,
            redirect: false, // To prevent auto-redirect which could cause CORS issues
            height: 200, // Adjust the height as needed
            width: 200, // Adjust the width as needed
          },
        });
        return response.data.data.url;
      } catch (error) {
        console.error("Error fetching profile picture:", error);
        throw new Error("Failed to fetch profile picture");
      }
    };

    const getUserPages = async (userAccessToken) => {
      try {
        const response = await axios.get('https://graph.facebook.com/me/accounts', {
          params: {
            access_token: userAccessToken,
          },
        });
        return response.data.data;
      } catch (error) {
        console.error("Error fetching user pages:", error);
        throw new Error("Failed to fetch user pages");
      }
    };

    const fetchPosts = async () => {
      try {
        const userPages = await getUserPages('EAAGtoCEcwNsBO1xuGUyaTBQBrerIUXUvRr8ZAKp4LnOCQvBTGQRjpFfRivBs6RMog2UzMm3GXF2Wh4Yg7RiblEFvLOfSe8io3o43AmJI4FpHsF6vhpGXqrvlsTeJZAOR9hd2cYOWk62ZAqmIwyFxxaLKyynxSoFfZBp0b9hlDfOKEdPePeabNdz93G8D2JspTJWPbclLQ0uJq4R1xOoZD');
        const page = userPages.find(page => page.id === '123188240765700');
        if (!page) {
          throw new Error("Page not found");
        }
        const pageAccessToken = page.access_token;
        const userProfilePicture = await fetchUserProfilePicture(pageAccessToken);
        const response = await axios.get(`https://graph.facebook.com/${page.id}/posts`, {
          params: {
            access_token: pageAccessToken,
            fields: 'id,created_time,message,likes.summary(true),comments.summary(true),from',
          },
        });
        const postsData = response.data.data;
        const postsWithDetails = postsData.map(post => ({
          ...post,
          profileImage: userProfilePicture,
        }));
        // Sort posts by created_time in descending order
        postsWithDetails.sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
        // Take only the first three posts
        const latestPosts = postsWithDetails.slice(0, 3);
        setPosts(latestPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50 dark:bg-gray-900 flex flex-wrap justify-center">
      {posts.map((post, index) => (
        <Card
          key={index}
          name={post.from.name}
          date={new Date(post.created_time).toLocaleString()}
          content={post.message}
          likes={post.likes ? post.likes.summary.total_count : 0}
          comments={post.comments ? post.comments.summary.total_count : 0}
          profileImage={post.profileImage}
        />
      ))}
    </div>
  );
};

export default SocialPosts;
