import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const DataFetchingExample = () => {
    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        // Realizamos la solicitud HTTP para obtener los posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            
            .catch(error => console.error('Error fetching data:', error));
          
        }, []);


    
    return (
        <div>
            <h2>Posts from JSONPlaceholder API</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default DataFetchingExample
