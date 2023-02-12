import { Post } from './Post'
import { usePosts } from '../hooks/usePosts'
export function Posts({ profileInfo }) {
    const {posts, toggleIsLiked, addLikeToPost, toggleIsBookMarked} = usePosts()
    return (
        <section class="direct-container">
            {posts && posts.length > 0 ? posts.map(post => {
                return (<div data-test="post" key={post.id} class="direct-items">
                    <Post
                        postProfileName={post.postProfileName}
                        postProfileImageUrl={post.postProfileImageUrl}
                        postComments={post.postComments}
                        postContent={post.postContent}

                        toggleLikedPosts={()=>toggleIsLiked(post.id)}
                        addLikeToPost={()=>addLikeToPost(post.id)}
                        isLiked={post.isLiked}
                        isBookMarked={post.isBookMarked}
                        toggleIsBookMarked={()=>toggleIsBookMarked(post.id)}
                        addHeartClass={post.addClass}

                        postLikes={post.postLikes}
                        userProfileName={profileInfo.name}
                        userProfileImg={profileInfo.imageUrl}
                    />
                </div>)
            }) : null}
        </section>
    )
}