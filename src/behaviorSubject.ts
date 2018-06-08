import { BehaviorSubject }  from 'rxjs';

var subject = new BehaviorSubject('First');

subject.subscribe(
    data => addItem('Observer 1' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

subject.next('first thing has been sent');
subject.next('Observer 2 about to start');

var observer2 = subject.subscribe(
    data => addItem('Observer 2:' + data)
)

subject.next('second thing has been sent');
subject.next('third thing has been sent');

observer2.unsubscribe();

subject.next('final thing has been sent');

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//https://www.youtube.com/watch?v=PhggNGsSQyg