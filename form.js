var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var itemList1 = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// edit  event
itemList.addEventListener('click', editItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
 var newItem1= document.getElementById('item1').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
 
   var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  li.appendChild(document.createTextNode(newItem1));
  // Create del button element
  var deleteBtn = document.createElement('button');
  // Create edit button element
  var editBtn = document.createElement('edit');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete  Expence'));
 
  editBtn.appendChild(document.createTextNode('edit  Expence'));

  // Append button to li
  li.appendChild(deleteBtn);
 
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
  itemList1.appendChild(li);
}

// Remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
      if(confirm('Are You Sure?'))
      {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
 }

function editItem(e)
{
  if(e.target.classList.contains('edit'))
    {
      if(confirm('Are You Sure?'))
      {
        var li = e.target.parentElement;
        itemList.editchild(li);
      }
    }
}
