export function Comment({comment: { commentImgUrl, commentName, commentTimeAgo, commentText, commentLikes}}) {
       return (
        <>
            <img src={commentImgUrl} alt="" />
            <div class="comentario-self">
                <div class="comentario-self-item">
                    <p><strong>{commentName}</strong></p>
                    <p class="time-ago"> {commentTimeAgo}</p>
                </div>
                <div class="comentario-self-item">
                    <p>{commentText}</p>
                </div>
                <div class="comentario-self-item">
                    <button>Responder</button>
                    <button>Enviar</button>
                </div>
            </div>
            <div class="comentario-self-items-curtidas">
                <ion-icon name="heart-outline"></ion-icon>
                <p>{commentLikes}</p>
            </div>
        </>
    )
}