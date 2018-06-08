import { from }  from 'rxjs';
import { pluck }  from 'rxjs/operators';

from([
        {firstName: 'Duminda', last: 'Amara', age: 36},
        {firstName: 'John', last: 'Keith', age: 32},
        {firstName: 'Jane', last: 'Martha', age: 37}
    ]
)
.pipe(pluck('firstName'))
.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//https://www.youtube.com/watch?v=PhggNGsSQyg