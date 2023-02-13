import { useState } from 'react'
import { posts as fetchedPosts } from './../post'
export function usePosts() {
    const [posts, setPosts] = useState(() => (fetchedPosts.map(post => ({ ...post, isLiked: false, isBookMarked: false, addClass:false }))))
    function toggleIsLiked(postID) {
        // console.log("renderizou dentro de toggleIsLiked")
        setPosts(curr => {
            return curr.map(post => {
                if (post.id === postID && post.isLiked === false) {
                    return { ...post, postLikes: post.postLikes += 1, isLiked: true, addClass:true }
                } else if (post.id === postID && post.isLiked === true) {
                    return { ...post, postLikes: post.postLikes -= 1, isLiked: false, addClass:false }
                }
                return { ...post }
            })
        })
    }
    function toggleIsBookMarked(postID) {
        setPosts(curr => {
            return curr.map(post => {
                if (post.id === postID && post.isBookMarked === false) {
                    return { ...post, isBookMarked: true }
                } else if (post.id === postID && post.isBookMarked === true) {
                    return { ...post, isBookMarked: false }
                }
                return { ...post }
            })
        })
    }
    function addLikeToPost(postID) {
         setPosts(curr => {
            return curr.map(post => {
                if (post.id === postID && post.isLiked === false) {
                    return { ...post, postLikes: post.postLikes += 1, isLiked: true, addClass:true}
                }
                return { ...post }
            })
        })
    }
    return { posts, toggleIsLiked, addLikeToPost, toggleIsBookMarked }
}