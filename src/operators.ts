import { Observable, merge}  from 'rxjs';
import { timeout }  from 'rxjs/operators';

var observable1 = Observable.create((observer:any)=> {
    observer.next('Hey guys')
});


var observable2 = Observable.create((observer:any)=> {
    observer.next('How is it going')
});

var newObs = merge(observable1, observable2);

newObs.subscribe(
       (x: any) => addItem(x)
)

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//https://www.youtube.com/watch?v=PhggNGsSQyg