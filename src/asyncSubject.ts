import { AsyncSubject }  from 'rxjs';

var subject = new AsyncSubject();
//var subject = new ReplaySubject(10, 200); start with last 10 subscriptions within last 2 seconds 

subject.subscribe(
    data => addItem('Observer 1' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++),100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data)
    );
    subject.complete();
}, 500);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//https://www.youtube.com/watch?v=PhggNGsSQyg