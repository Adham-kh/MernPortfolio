import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [posts, setPosts] = useState([]); // Состояние для хранения постов
  const [loading, setLoading] = useState(true); // Состояние загрузки

  // Загружаем посты при монтировании компонента
  useEffect(() => {
    const fetchPosts = async () => {
        
      try {
        const response = await fetch('http://localhost:5000/api/posts'); // URL для получения постов
        const data = await response.json();
        setPosts(data); // Сохраняем посты в состояние
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // Останавливаем загрузку
      }
  
    };

    fetchPosts();
        }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз

        if (loading) {
            return <p>Loading...</p>; // Показать индикатор загрузки
        }

  return (
    <div>
      <h1>Посты</h1>
      <div>
        {posts.length === 0 ? (
          <p>No posts available.</p> // Если постов нет
        ) : (
            posts.map((post) => (
              <div key={post._id} style={styles.post}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Простые стили для постов
const styles = {
  post: {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '15px 0',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default HomePage;
