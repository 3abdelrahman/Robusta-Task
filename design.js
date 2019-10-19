var btn = document.getElementById("btn");
btn.onclick = function (event)
{
    event.preventDefault();
    DrowGrid();
    tdEvent();
    
}

function DrowGrid()
{
    var table= document.getElementById("tableId");
    var rows = document.getElementById("rowsId").value;
    var cols = document.getElementById("colsId").value;
    
    var tableData="";
    for(var i=0 ; i<rows ; i++)
        {
            tableData+="<tr>"
            for(var x=0 ; x<cols ; x++)
                {
                    tableData+="<td></td>"
                }
            tableData+="</tr>";
        }
  
   table.innerHTML=tableData;    

}

function tdEvent()
{
    var tds=document.getElementsByTagName("td");
    for(var i=0 ;i<tds.length ; i++)
        {
            tds[i].addEventListener("click",function(event){
                var clickTd=event.target;
                var color=document.getElementById("colorId").value;
                clickTd.style.backgroundColor=color;
            })
        }
}
