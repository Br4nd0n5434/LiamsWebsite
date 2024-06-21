import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'; // Ensure the correct path to Card component


const LoadingSkeleton = () => (

  <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-base flex flex-wrap justify-center">
    {[1, 2, 3].map((index) => (
      <div key={index}
className="animate-pulse p-4 sm:p-6 md:p-8 lg:p-10 bg-base flex items-center justify-center ">
        <div className="px-4 py-3 h-[550px] sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 bg-base-100 shadow rounded-lg w-full max-w-md">
          <div className="flex mb-3 items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-base-content"></div>
            <div className="ml-3">
              <div className="w-[195px] h-4 bg-base-content rounded"></div>
              <div className="w-[80px] h-3 bg-base-content rounded mt-1"></div>
            </div>
          </div>
          <div className="h-[300px] w-[350px] bg-base-content rounded mt-2"></div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex">
              <div className="p-0.5 h-6 w-6 sm:h-7 sm:w-7 rounded-full z-20 bg-base-content"></div>
            </div>
            <div className="w-24 h-4 bg-base-content rounded"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

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
            redirect: false,
            height: 200,
            width: 200,
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
            fields: 'id,created_time,message,likes.summary(true),comments.summary(true),from,attachments',
          },
        });
        const postsData = response.data.data;
        const postsWithDetails = postsData.map(post => ({
          ...post,
          profileImage: userProfilePicture,
          images: post.attachments ? post.attachments.data.map(attachment => attachment.media && attachment.media.image ? attachment.media.image.src : null).filter(Boolean) : []
        }));
        postsWithDetails.sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
        const latestPosts = postsWithDetails.slice(0, 5);
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

  if (loading) return <LoadingSkeleton />;
  if (error) return console.error(error);

  return (
    <div className="carousel carousel-center w-full rounded-none p-4 space-x-4 bg-logo-gradient rounded-box">
      {posts.map((post, index) => (
        <Card
          key={index}
          name={post.from.name}
          date={new Date(post.created_time).toLocaleString()}
          content={post.message}
          likes={post.likes ? post.likes.summary.total_count : 0}
          comments={post.comments ? post.comments.summary.total_count : 0}
          profileImage={post.profileImage}
          images={post.images}
        />
      ))}
    </div>
  );
};

export default SocialPosts;
