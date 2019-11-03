var jsonFake = {
    "Name": {"0":"name0", "1":"name1"},
    "Description": {"0": "desc0", "1": "desc1"}
}

var wanted = [
    {id: 0, name: "name0", description: "desc0"},
    {id: 1, name: "name1", description: "desc1"}
]

//takes in jsonFake variable and returns soemthing like wanted variable
var toImplement = function name(params) {
    
}

var funding = [{
    id: 1,
    type: "Seeking",
    amount: 5000,
    negotiable: true,
    website: "../../milestoneTimeline.html",
    email: "charaniasamad@gmail.com",
    date: "22-10-2019",
    expiry: "22-10-2020"
},
{
    id: 2,
    type: "Seeking",
    amount: 7000,
    negotiable: false,
    website: "../../milestoneTimeline.html",
    email: "charaniasamad@gmail.com",
    date: "02-09-2019",
    expiry: "22-10-2020"
}
];

//Table Lables:
var SEEKING = "Seeking";
var GIVING = "Giving";

//Table Formatting:
var ROWS_PER_PAGE = 20;
var LAYOUT = "fitDataFill";

//Formatter parameters:
var LINK_FORMAT = { label: "LINK", target: "" };
var EMAIL_FORMAT = { urlPrefix: "mailto:" };
var MONEY_FORMAT = { symbol: "$" };

//DEFUALT data:
var TODAY = new Date().toJSON().slice(0, 10);

var personal_columns = [
{ title: "Name", field: "type", editorParams: { values: [SEEKING, GIVING] } },
{ title: "Amount", field: "amount", al  ign: "left", sorter: "number", formatter: "money", formatterParams: MONEY_FORMAT, editable: true },
{ title: "Approved", field: "negotiable", sorter: "boolean", formatter: "tickCross" },
{ title: "Website", field: "website", editable: true, formatter: "link", formatterParams: LINK_FORMAT },
{ title: "ToDelete", field: "email", editable: true, formatter: "link", formatterParams: EMAIL_FORMAT },
{ title: "Date Created", field: "date", sorter: "date", editable: true },
{ title: "Deadline", field: "expiry", sorter: "date", editable: true }
];


var availableFunding =
new Tabulator("#funding-table", {
    data: personal, //load row data from array
    layout: LAYOUT, //fit columns to width of table
    responsiveLayout: "hide", //hide columns that dont fit on the table
    tooltips: true, //show tool tips on cells
    addRowPos: "top", //when adding a new row, add it to the top of the table
    history: true, //allow undo and redo actions on the table
    pagination: "local", //paginate the data
    paginationSize: ROWS_PER_PAGE, //allow 7 rows per page of data
    movableColumns: true, //allow column order to be changed
    resizableRows: true, //allow row order to be changed
    initialSort: [ //set the initial sort order of the data
        { column: "name", dir: "asc" },
    ],
    columns: personal_columns, //define the table columns
});