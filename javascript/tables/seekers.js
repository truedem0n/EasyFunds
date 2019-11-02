var seekers_table =
    new Tabulator("#seekers-table", {
        data:tabledata,           //load row data from array
        layout:"fitDataFill",      //fit columns to width of table
        responsiveLayout:"hide",  //hide columns that dont fit on the table
        tooltips:true,            //show tool tips on cells
        addRowPos:"top",          //when adding a new row, add it to the top of the table
        history:true,             //allow undo and redo actions on the table
        pagination:"local",       //paginate the data
        paginationSize:7,         //allow 7 rows per page of data
        movableColumns:true,      //allow column order to be changed
        resizableRows:true,       //allow row order to be changed
        initialSort:[             //set the initial sort order of the data
            {column:"name", dir:"asc"},
        ],
        columns:[                 //define the table columns
            {title:"Name", field:"name", frozen:true},
            {title:"Max Amount", field:"amount", align:"left", sorter:"number", frozen:true},
            {title:"Negotiable", field:"negotiable", sorter:"boolean"},
            {title:"Date Created", field:"date", sorter:"date"},
            {title:"Deadline", field:"date", sorter:"date"}
        ],
    });