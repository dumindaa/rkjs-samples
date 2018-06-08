import { Observable}  from 'rxjs';
import { share }  from 'rxjs/operators';

var observable = Observable.create((observer:any)=> {
    try {
        observer.next('Hey guys!');
        observer.next('Hey how are u!');
        setInterval(()=> {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err);
    }
});

// observable.subscribe(
//     (x:any) => addItem('ob1 ' + x),
//     (error:any) => addItem(error),
//     () => addItem('observer 1 completed')
// );

var observer = observable.subscribe(
    (x:any) => addItem('ob2 ' + x),
    (error:any) => addItem(error),
    () => addItem('observer 2 completed')
);

var observer2 = observable.subscribe(
    (x:any) => addItem('ob2 ' + x)
);

setTimeout(() => {    
    var observer3 = observable.subscribe(
        (x:any) => addItem('Subscriber 3 ' + x)
    )
}, 1000);

// observer.add(observer2); //add child observer
// observer.remove(observer2); //remove child observer

// setTimeout(() => {
//     observer.unsubscribe();
// }, 6001);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//https://www.youtube.com/watch?v=PhggNGsSQyg