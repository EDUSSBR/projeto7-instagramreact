export function NavBar() {
    return (
        <header>
            <div class="header-inside-container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador hide-header-items-mobile"></div>
                    <img
                        width="103px"
                        height="29px"
                        src="./assets/logo-instagram.svg"
                        alt="LOGO"
                    />
                </div>
                <input
                    placeholder="Pesquisar"
                    class="hide-header-items-mobile"
                    type="text"
                />
                <div class="header-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon
                        class="hide-header-items-mobile"
                        name="compass-outline"
                    ></ion-icon>
                    <ion-icon
                        class="hide-header-items-mobile"
                        name="heart-outline"
                    ></ion-icon>
                    <ion-icon
                        class="hide-header-items-mobile"
                        name="person-outline"
                    ></ion-icon>
                </div>
            </div>
        </header>
    )
}