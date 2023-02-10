const tableData = [
  {
    pageName: "/argon/",
    visitors: "4,569",
    uniqueUser: "340",
    bounceRate: "46,53%",
  },
  {
    pageName: "/argon/index.html",
    visitors: "3,985",
    uniqueUser: "319",
    bounceRate: "46,53%",
  },
  {
    pageName: "/argon/charts.html",
    visitors: "3,513",
    uniqueUser: "294",
    bounceRate: "36,49%",
  },
  {
    pageName: "/argon/tables.html",
    visitors: "2,050",
    uniqueUser: "147",
    bounceRate: "50,87%",
  },
  {
    pageName: "/argon/profile.html",
    visitors: "1,795",
    uniqueUser: "190",
    bounceRate: "46,53%",
  },
];

const arrayData = tableData.map((item) => {
  document.querySelector("#data-table").innerHTML += `<tr>
      <td class="main-td" style="padding:20px">${item.pageName}</td>
      <td class="td-data">${item.visitors}</td>
      <td class="td-data">${item.uniqueUser}</td>
      <td class="td-data">${item.bounceRate}</td>
    </tr>`;
});

const progressBarData = [
  {
    pageName: "Facebook",
    visitors: "1,480",
    uniqueUser: "60%",
    color: "bg-danger",
  },
  {
    pageName: "Facebook",
    visitors: "5,480",
    uniqueUser: "70%",
    color: "bg-danger",
  },
  {
    pageName: "Google",
    visitors: "4,807",
    uniqueUser: "80%",
    color: "bg-info",
  },
  {
    pageName: "Instagram",
    visitors: "3,678",
    uniqueUser: "75%",
    color: "bg-info",
  },
  {
    pageName: "Twitter",
    visitors: "2,645",
    uniqueUser: "100%",
    color: "bg-danger",
  },
];
const progresBar = progressBarData.map((item) => {
  document.querySelector("#progres-bar-data").innerHTML += `<tr>
        <td class="main-td" style="padding:20px">${item.pageName}</td>
        <td class="td-data">${item.visitors}</td>
        <td class="td-data">${item.uniqueUser}
        <div class="progress "style="height: 3px;width: 120px;">
            <div class="progress-bar ${item.color}" role="progressbar" style="width:${item.uniqueUser}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div
      </td>
      </tr>`;
});
