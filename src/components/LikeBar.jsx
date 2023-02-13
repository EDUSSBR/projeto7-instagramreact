export function LikeBar({ mainLikeFoto, mainLikeName,  postLikes}) {
    return (
        <div class="curtidas-container">
            <img src={mainLikeFoto} alt="mainLikeName" />
            <p>
                Curtido por <strong>{mainLikeName}</strong> e
                <strong > outras <span data-test="likes-number">{Number(postLikes)}</span> pessoas</strong>
            </p>
        </div>
    )
}