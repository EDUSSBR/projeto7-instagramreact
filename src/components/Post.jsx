import { Comment } from "./Comment";
import { LikeBar } from "./LikeBar";
export function Post({ toggleLikedPosts, isBookMarked, isLiked, addHeartClass, addLikeToPost, toggleIsBookMarked, postProfileName, postProfileImageUrl, postLikes, postContent: { isVideo, url }, postComments, userProfileName, userProfileImg }) {
    return (
        <>
            <div className="direct-top-bar">
                <div className="direct-top-bar-img-container">
                    <img src={postProfileImageUrl} alt={postProfileName} />
                    <p>{postProfileName}</p>
                </div>
                <ion-icon ios="ellipsis-horizontal-outline" md="ellipsis-horizontal-outline"></ion-icon>
                {/* <ion-icon name="ellipsis-horizontal-outline"></ion-icon> */}
            </div>
            {isVideo === true ? (<video width="100%" height="auto" autoPlay muted controls>
                <source src={`${url}.mp4`} type="video/mp4" />
                <source src={`${url}.ogg`} type="video/ogg" />
                Your browser does not support the video tag.
            </video>) : (<div style={{display:'block', width:'100%', position:'relative'}}><img data-test="post-image" onDoubleClick={addLikeToPost} src={url} alt="" /> { addHeartClass && <span className="turnWhite" ><ion-icon name="heart"></ion-icon></span>}
          </div>)}
            {/* className={addHeartClass===true ? "heart" : ""} */}
             <div className="bottom-bar">
                <div className="options-icon">
                    <div className="left-items"></div>
                    <div className="right-items"></div>
                </div>
                <div className="direct-bottom-bar">
                    <div className="direct-bottom-bar-icons-container">
                        <div className="direct-bottom-bar-icons-left">
                            {isLiked ? <span data-test="like-post" onClick={toggleLikedPosts} className="turnRed"><ion-icon name="heart"></ion-icon></span> : <span data-test="like-post" onClick={toggleLikedPosts} ><ion-icon name="heart-outline"></ion-icon></span>}
                            <ion-icon name="paper-plane-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </div>
                        {isBookMarked ? (<span data-test="save-post" className="turnOrange"><ion-icon onClick={toggleIsBookMarked} name="bookmark" ></ion-icon></span>) : (<span><ion-icon data-test="save-post" onClick={toggleIsBookMarked} name="bookmark-outline"></ion-icon></span>)}
                    </div>
                    <LikeBar postLikes={postLikes} mainLikeFoto={"assets/history-1/driven.jpg"} mainLikeName={"Driven"} /*likesNumber={100}*/ />
                </div>
                <div className="comentarios-container">
                    {postComments && postComments.length > 0 ? postComments.map(comment => (<div key={comment.id} className="comentario-item">
                        <Comment comment={comment} />
                    </div>)
                    ) : null}
                </div>
                <div className="comentarios">
                    <input type="text" placeholder="Adicione um comentário..." />
                    <img src={userProfileImg} alt={userProfileName} />
                    <a>Publicar</a>
                </div>
            </div>
        </>













        // <div className="direct-items">
        //     <div className="direct-top-bar">
        //         <div className="direct-top-bar-img-container">
        //             <img src={postProfileImageUrl} alt={`${postProfileName}`} />
        //             <p>{postProfileName}</p>
        //         </div>
        //         <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        //     </div>
        //     <img src="assets/feed/feed-2.jpg" alt="" />
        //     <div className="bottom-bar">
        //         <div className="options-icon">
        //             <div className="left-items"></div>
        //             <div className="right-items"></div>
        //         </div>
        //         <div className="direct-bottom-bar">
        //             <div className="direct-bottom-bar-icons-container">
        //                 <div className="direct-bottom-bar-icons-left">
        //                     <ion-icon name="heart-outline"></ion-icon>
        //                     <ion-icon name="paper-plane-outline"></ion-icon>
        //                     <ion-icon name="chatbubble-outline"></ion-icon>
        //                 </div>
        //                 <ion-icon name="bookmark-outline"></ion-icon>
        //             </div>
        //             <div className="curtidas-container">
        //                 <img src="assets/history-1/profile-3.jpg" alt="" />
        //                 <p>
        //                     Curtido por <strong>Casal</strong> e
        //                     <strong> outras 120.230 pessoas</strong>
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="comentarios">
        //             <input type="text" placeholder="Adicione um comentário..." />
        //             <img src={postProfileImageUrl} alt={`${postProfileName}`} />
        //             <a>Publicar</a>
        //         </div>
        //     </div>
        // </div>
    )
}