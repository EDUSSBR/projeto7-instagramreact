export function Story({profileName, imageUrl}) {
    return (
        <>
            <div class="history-icon-container">
                <img
                    width="56px"
                    height="56px"
                    src={imageUrl}
                    alt="foto-perfil"
                />
                <img src="assets/stories_background 1.svg" alt="" />
            </div>
            <p>{profileName}</p>
        </>
    )
}