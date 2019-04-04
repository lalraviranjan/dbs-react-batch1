"use strict"

let rx = require('rxjs') // common JS
// import rx from 'rxjs';  // ES modle


//------------------------------------
// Async Programming
//------------------------------------




//------------------------------------
// dependency / provider
//------------------------------------


let provider = {
    getSingleItem: function () {
        //...
        return "SINGLE_ITEM"
    },
    getSingleItemAsync: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let item = "SINGLE_ASYNC_ITEM";
                resolve(item);  // Async / push
            }, 3000);
        });
        return promise;
    },
    getMultipleItems: function () {
        //...
        return {
            [Symbol.iterator]: function () {
                let i = 0;
                return {
                    next: function () {
                        i++
                        let value = "ITEM-" + i
                        let done = i < 5 ? false : true;
                        return { value, done }
                    }
                }
            }
        }
    },
    getMultipleItemsAsync: function () {
        //...
        let stream = new rx.Subject();

        let i = 0;

        let inte = setInterval(() => {
            i++;
            stream.next('ITEM-' + i) // PUSH
            if (i === 5) {
                clearInterval(inte);
                stream.complete();
            }
        }, 2000);

        return stream;
    }

}



//------------------------------------
// dependent/ consumer
//------------------------------------

let consumer = {
    doSomthing: function () {

        // let item = provider.getSingleItem(); // sync / pull
        // console.log("> " + item);

        // let items = provider.getMultipleItems();
        // let it = items[Symbol.iterator]();
        // for (let item of it) {
        //     console.log(item);  // sync / pull
        // }




        // let promise = provider.getSingleItemAsync();
        // promise
        //     .then(response => console.log(response))


        let stream = provider.getMultipleItemsAsync();
        stream.subscribe(
            item => console.log(item),
            error => console.log(error),
            () => console.log("stream closed")
        );


    }
}

consumer.doSomthing();