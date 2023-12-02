

const MyDay = () => {

    let today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayOfWeek = daysOfWeek[today.getDay()];
    let dayOfMonth = today.getDate();
    let month = months[today.getMonth()];

    let formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

    const view = `
    <div class="">
        <h2>My day</h2>
        <p>${formattedDate}</p>
    </div>
    `

    return view
}

export default MyDay