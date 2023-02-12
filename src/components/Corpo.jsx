import { Footer } from './Footer'
import { Stories } from './Stories'
import { Posts } from './Posts'
import { SideBar } from './SideBar'
import { profileInfoFromFile } from '../profileInfo'
import { useState } from 'react'
function basicValidation(text) {
    if (text === null) return false
    if (text === undefined) return false
    if (text.length === 0) return false
    if (text.trim().length===0) return false
    return true
}
export function Corpo() {
    // export const profileInfo = { name: "Eduardo Souto dos Santos", imageUrl: "assets/history-1/eu.jpg", nickName: "Edu"}
    const [profileInfo, setProfileInfo] = useState(() => profileInfoFromFile)
    function changeProfileName() {
        const newName = prompt('Digite um novo nome de usuário:')
        if (!basicValidation(newName)) return
        setProfileInfo(prevProfileInfo => ({ ...prevProfileInfo, name: newName.trim(), nickName: "" }))
    }
    function changeProfilePhotoUrl() {
        const newImageUrl = prompt('Digite a URL de uma nova foto:')
        if (!basicValidation(newImageUrl)) return
        setProfileInfo(prevProfileInfo => ({ ...prevProfileInfo, imageUrl: newImageUrl}))
    }
    return (
        <div class="main-aside-container">
            <main>
                <Stories />
                <Posts profileInfo={{ ...profileInfo }} />
            </main>
            <SideBar profileInfo={ profileInfo } setProfileName={changeProfileName} setProfilePhoto={changeProfilePhotoUrl} />
            <Footer />
        </div>
    )
}