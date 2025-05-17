{
    //Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".
    //1
    function greet(name) {
        return "Hello, " + name + " how are you doing today?";
    }
}

{
    //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string
    //2
    {
        function removeChar(str) {
            return str.slice(1, -1);
        }
    }

}

{
    //3
    {
        function findSmallestInt(arr) {
            return Math.min(...arr);
        }
    }
}
{
    //Given an array of integers your solution should find the smallest integer.
    //4
    {
        function findSmallestInt(arr) {
            let smallest = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < smallest) {
                    smallest = arr[i];
                }
            }
            return smallest;
        }

    }
}

{
    //Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
    //5 
    {
        function stringToNumber(str) {
            return Number(str);
        }
    }
}

{
    //6
    {
        function doubleArray(arr) {
            return arr.map(num => num * 2);
        }
    }
}

{
    //7
    function squareDigits(n) {
        return +n.toString().split("").map(i => i ** 2).join("")
    }

    console.log(squareDigits(9119));
}

