export function Sugestao({sugestionProfileName, sugestionProfileImage}) {
    return (
        <>
            <div class="final-links-img-p-container">
                <img src={sugestionProfileImage} alt="" />
                <div class="final-links-p">
                    <p>{sugestionProfileName}</p>
                    <p>Segue você</p>
                </div>
            </div>
            <a>Seguir</a>
        </>
    )
}