import { Story } from './Story'
export function Stories() {
    const stories = [
        {
            profileName: "NoOneHaveANameBiggerThanMine",
            imageUrl: "assets/history-1/profile-1.jpg"
        },
        {
            profileName: "Vivi",
            imageUrl: "assets/history-1/profile-2.jpg"
        },
        {
            profileName: "Casal",
            imageUrl: "assets/history-1/profile-3.jpg"
        },
        {
            profileName: "Coggu",
            imageUrl: "assets/history-1/profile-5.jpg"
        },
        {
            profileName: "Shadow",
            imageUrl: "assets/history-1/profile-6.jpg"
        },
        {
            profileName: "SunsetGuy",
            imageUrl: "assets/history-1/profile-7.jpg"
        },
        {
            profileName: "Mad",
            imageUrl: "assets/history-1/profile-8.jpg"
        },
        {
            profileName: "Chuck",
            imageUrl: "assets/history-1/profile-9.jpg"
        },
        {
            profileName: "YourDoc",
            imageUrl: "assets/history-1/profile-4.jpg"
        }
    ]

    // YourDoc

    return (
        <section className="history-container">
            <div className="history-cursor-left"></div>
            {stories.map(story => (
                <div key={story.profileName} class="history-items">
                    <Story profileName={story.profileName} imageUrl={story.imageUrl} />
                </div>))}

            <div className="history-cursor-right">
                {/* <ion-icon
                    style="color: white; font-size: 26px;"
                    name="chevron-forward-circle"
                ></ion-icon> */}
            </div>
        </section>
    )
}