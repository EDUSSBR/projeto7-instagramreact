import { Usuario } from './Usuario'
import { Sugestoes } from './Sugestoes'
export function SideBar({profileInfo, setProfileName, setProfilePhoto}) {
    return (
        <aside class="sidebar-container">
            <Usuario profileInfo={profileInfo}  setProfileName={setProfileName} setProfilePhoto={setProfilePhoto}/>
            <Sugestoes />
            <div class="copyright">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
        </aside>
    )
}