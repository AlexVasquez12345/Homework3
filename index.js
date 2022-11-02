//Links used for help in completion of assignment:
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
//https://stackoverflow.com/questions/41465569/multiplication-table-in-javascript
function Arithmetic() {
    //grabs all of the values from the form input
    var x_min = document.getElementById("min_x").value;
    var x_max = document.getElementById("max_x").value;
    var y_min = document.getElementById("min_y").value;
    var y_max = document.getElementById("max_y").value;

    //converts inputs from text to a base 10 integer
    var int_x_min = parseInt(x_min, 10);
    var int_x_max = parseInt(x_max, 10);
    var int_y_min = parseInt(y_min, 10);
    var int_y_max = parseInt(y_max, 10);

    //because the form only accepts integers, the only error check we need to make
    //is if the user inputs an integeer less than -50 or greater than 50, then we
    //return from the function and the html will display the error
    if((int_x_min <= -50 || int_x_max >= 50) || (int_y_min <= -50 || int_y_max >= 50)) {
        return;
    }
    // if the min is greater than the max, then exit without display the table
    if (int_x_min > int_x_max || int_y_min > int_y_max) {
        return;
    }

    var my_table = document.createElement("table");
    var my_body = document.createElement("tbody");

    //double for loop that will cycle through all of the 
    //elements we need to output to the user
    for (var x = int_x_min; x <= int_x_max + 1; x++) {
        var my_row = document.createElement("tr");

        for (var y = int_y_min; y <= int_y_max + 1; y++) {
            //the case where we need to display the header
            //of the first row. No need for any arithmetic
            //to be done here, all we need to do is display
            //the X and the values of y
            if(x == int_x_min && y == int_y_min) {
                var my_data = document.createElement("th");
                var my_data_val = document.createTextNode("X");
                my_data.appendChild(my_data_val);
                my_row.appendChild(my_data);
                
                var temp = int_y_min;
                var temp2 = int_y_max;
                //actualy display of the first row
                while (temp <= temp2) {
                    var my_data = document.createElement("th");
                    var my_data_val = document.createTextNode(temp);
                    my_data.appendChild(my_data_val);
                    my_row.appendChild(my_data);
                    temp++;
                }
                break;
            }
            //in the case where we need to display each x value before
            //the arithmetic of the row, we execute this code here
            else if (x > int_x_min && y == int_y_min) {
                var my_data = document.createElement("th");
                var my_data_val = document.createTextNode(x - 1);
                my_data.appendChild(my_data_val);
                my_row.appendChild(my_data);
            }
            //in the case where we are just doing normal arithmetic and
            //don't need to account for any of the headers, we can execute
            //this code right here
            else {
            var my_data = document.createElement("td");
            var my_data_val = document.createTextNode((x-1)*(y-1));
            my_data.appendChild(my_data_val);
            my_row.appendChild(my_data);
            }
        }

        my_body.appendChild(my_row);
    }

    my_table.appendChild(my_body);
    
    //appends the finished table to the html
    document.body.appendChild(my_table);
    my_table.setAttribute("border", "2");
    //allows the table to viewed each time the arithmetic is completed
    event.preventDefault();
}
 