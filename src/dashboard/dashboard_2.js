const userData = [
  {
    img: "bootstrap-icon.png",
    project: "Argon Design System",
    budget: "$2,500 USD",
    status: "pending",
    users: ["img_1.png", "img_2.png", "img_3.png", "img_4.png"],
    completion: "60%",
    color: "bg-danger",
  },
  {
    img: "angular-icon.png",
    project: "Angular Now UI Kit PRO",
    budget: "$1,800 USD",
    status: "completed",
    users: ["img_1.png", "img_2.png", "img_3.png", "img_4.png"],
    completion: "100%",
    color: "bg-info",
  },
  {
    img: "dimod-icon.png",
    project: "Black Dashboard",
    budget: "$3,150 USD",
    status: "delayed",
    users: ["img_1.png", "img_2.png", "img_3.png", "img_4.png"],
    color: "bg-danger",
  },
  {
    img: "react-icon.png",
    project: "React Material Dashboard",
    budget: "$4,400 USD",
    status: "on schedule",
    users: ["img_1.png", "img_2.png", "img_3.png", "img_4.png"],
    completion: "90%",
    color: "bg-info",
  },
  {
    img: "vue-icon.png",
    project: "Vue Paper UI Kit PRO",
    budget: "$2,200 USD",
    status: "completed",
    users: ["img_1.png", "img_2.png", "img_3.png", "img_4.png"],
    completion: "100%",
    color: "bg-info",
  },
];
const userTableData = userData.map((data) => {
  document.querySelector(".user-data").innerHTML += `<tr>
        <td class="main-td" style="padding:20px">
        <img src="../img/dashboard/${data.img}" alt="img not show">
        </td>
        <td class="main-td">${data.project}</td>
        <td class="td-data">${data.budget}</td>
        <td class="td-data">
            <img src="../img/dashboard/Oval.png" alt="img not show">  
            ${data.status}
        </td>
        <td class="td-data">
        <div class="img-box">
            <span><img class="rounded-circle img-position" src="../img/dashboard/${data.users[0]}" alt="img not show"></span>
            <span><img class="rounded-circle img-position" src="../img/dashboard/${data.users[1]}" alt="img not show"></span>
            <span><img class="rounded-circle img-position" src="../img/dashboard/${data.users[2]}" alt="img not show"></span>
            <span><img class="rounded-circle img-position" src="../img/dashboard/${data.users[3]}" alt="img not show"></span>
        <div>
        </td>
        <td class="td-data">${data.completion}
            <div class="progress "style="height: 3px;width: 120px;">
                <div class="progress-bar ${data.color}" role="progressbar" style="width:${data.completion}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div
        </td>
        </tr>`;
});

// map

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 37.7749, lng: -122.4194 },
  });
  console.log(map);
}
