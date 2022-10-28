let book = {
    title: "Game Of Thrones",
    author: "Martin RR",
    pagesNumber: 2000
}

let listOfObjects = [
    {
        title: "Game Of Thrones",
        author: "Martin RR",
        pagesNumber: 2000
    },
    {
        title: "House of dragons",
        author: "Martin RR",
        pagesNumber: 2100
    },
    {
        title: "Jack Sparrow",
        author: "Martin",
        pagesNumber: 2200
    },

]


function titleFinder(listOfObjects, searchTitle){
    for (const objects of listOfObjects) {
        if(objects.title === searchTitle){
            return objects
        }
        else{
            return null
        }

        
    }
}

//console.log(titleFinder(listOfObjects, "Game Of Thrones"));


function letterFrequencey(word){
    let wordObj = {};

    for (let i = 0; i <= word.length; i++) {
        let count  = 0
        for (letter of word){
            if (letter === word[i]){
                count++
                wordObj[letter] = count;
            }
        }    
    };

    return wordObj
}

//console.log(letterFrequencey("ni talar bra latin"));

