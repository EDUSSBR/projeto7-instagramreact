export function Usuario({profileInfo, setProfileName, setProfilePhoto}) {
    
    return (
        <div class="profile">
            <img data-test="profile-image" onClick={setProfilePhoto} width='56px' height='56px' src={profileInfo.imageUrl} alt="" />
            <div class="profile-name">
                <p data-test="name">{profileInfo.name}   <ion-icon data-test="edit-name" size='small' onClick={setProfileName} name="pencil-outline"></ion-icon></p>
                <p>{profileInfo.userNick}</p>
            </div>
        </div>
    )
}