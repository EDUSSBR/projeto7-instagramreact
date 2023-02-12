import { Sugestao } from "./Sugestao";

export function Sugestoes() {
    const sugestions = [
        {
            id: 1,
            sugestionProfileName: "jaguar",
            sugestionProfileImage: "assets/aside/jaguar.jpg"
        },
        {
            id: 2,
            sugestionProfileName: "beaultifulcolors",
            sugestionProfileImage: "assets/aside/designer.jpg"
        },
        {
            id: 3,
            sugestionProfileName: "dogaspet",
            sugestionProfileImage: "assets/aside/cool-dog.jpg"
        },
        {
            id: 4,
            sugestionProfileName: "teachchildren",
            sugestionProfileImage: "assets/aside/teaching.jpg"
        },
        {
            id: 5,
            sugestionProfileName: "makemoneyeasy",
            sugestionProfileImage: "assets/aside/moedas-virtuais.jpg"
        },
    ]
    return (
        <div className="menu-sugestoes">
            <div className="sugestoes-items">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div className="final-links">
                {sugestions.map(sugestion => (
                    <div key={sugestion.id} className="final-links-item">
                        <Sugestao sugestionProfileName={sugestion.sugestionProfileName} sugestionProfileImage={sugestion.sugestionProfileImage} />
                    </div>))}
            </div>
        </div>
    )
}