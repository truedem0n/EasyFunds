var givers = [
    {id: 1, type: "Seeking", amount: 5000, negotiable: true, date: "22/10/2019"},
    {id: 2, type: "Seeking", amount: 7000, negotiable: false, date: "22/09/2019"},
];

//Table Lables:
var SEEKING = "Seeking";
var GIVING = "Giving";

//Table Formatting:
var ROWS_PER_PAGE = 20;
var LAYOUT = "fitDataFill";

//Formatter parameters:
var LINK_FORMAT = {label: "LINK", target: "_blank"};
var MONEY_FORMAT = {symbol: "$"};


var givers_columns = [
    {title:"Name", field:"name", frozen: true},
    {title:"Amount", field:"amount", align:"left", sorter:"number", formatter: "money", formatterParams: MONEY_FORMAT, editable:true},
    {title:"Negotiable", field:"negotiable", sorter:"boolean", formatter:"tickCross"},
    {title:"Website", field:"website", editable: true, formatter: "link", formatterParams:LINK_FORMAT},
    {title:"Date Created", field:"date", sorter:"date", editable:true}
];


var givers_table =
    new Tabulator("#personal-table", {
        data:givers,              //load row data from array
        layout:LAYOUT,       //fit columns to width of table
        responsiveLayout:"hide",    //hide columns that dont fit on the table
        tooltips:true,              //show tool tips on cells
        addRowPos:"top",            //when adding a new row, add it to the top of the table
        history:true,               //allow undo and redo actions on the table
        pagination:"local",         //paginate the data
        paginationSize:ROWS_PER_PAGE,           //allow 7 rows per page of data
        movableColumns:true,        //allow column order to be changed
        resizableRows:true,         //allow row order to be changed
        initialSort:[               //set the initial sort order of the data
            {column:"name", dir:"asc"},
        ],
        columns: givers_columns,  //define the table columns
    });