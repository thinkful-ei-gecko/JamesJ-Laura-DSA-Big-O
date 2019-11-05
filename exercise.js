// Types O(1), O(log(n)), O(n), O(n^2), O(c^n), O(n!)

// 1 a)  You are sitting in a room with 15 people.
// You want to find a playmate for your dog, preferably of the same breed.
// So you want to know if anyone out of the 15 people have the same breed as your dog.
// You stand up and yell out, who here has a golden retriever
// and would like to be a playdate for my golden.
// Someone yells - "I do, be happy to bring him over"

// ANSWER: O(1) or "constant" - No matter how many people are in the room, you will always
// take the first dog of the breed that you want and complete your 'algorithm'

// 1 b) You are sitting in a room with 15 people.
// You want to find a playmate for your dog who is of the same breed.
// So you want to know if anyone out of the 15 people have the same breed as your dog.
// You start with the first person and ask him if he has a golden retriever.
// He says no, then you ask the next person, and the next,
// and the next until you find someone who has a golden or there is no one else to ask.

// ANSWER: O(n) or "linear" - Assuming the worst (the last you ask has that dog or no one),
// you would have to run through the entire room asking each person about their dog breed.

// 2. Even or odd
// What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
  if (value % 2 === 0) {
    return true
  } else {
    return false
  }
}

// ANSWER: O(1) or "constant" - No matter the numeric value provided, the resulting
// work done will always be the same, single check of even/odd division

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i]
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j]
      if (el1 === el2) return true
    }
  }
  return false
}

// ANSWER: O(n^2) or "polynomial" - Assuming no match or last match, we must check every
// item of the first array against all items of the second array

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2
  }
  return array
}

// ANSWER: O(n) or "linear" - Worst case is best case here, meaning we must always
// run through the full length of the array when running the function. The array length
// determines the time soley, so it is linear.

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i
    }
  }
}

// ANSWER: O(n) or "linear" - Worst case means no match/last match, meaning we have
// to iterate through the whole array to confirm a match. Array length determines run
// time so linear

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
  // [1, 2, 3, 4, 5, 6, 7, 8]
  for (let i = 0; i < arr.length; i++) {
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    for (let j = i + 1; j < arr.length; j++) {
      // 1,2 1,3 1,4 1,5 1,6 1,7 1,8
      // 2,3 2,4 2,5 2,6 2,7 2,8
      // 3,4 3,5 3,6 3,7 3,8
      // 4,5 4,6 4,7 4,8
      // 5,6 5,7 5,8
      // 6,7 6,8
      // 7,8
      console.log(arr[i] + ', ' + arr[j])
    }
  }
}

// NOT ANSWER: O(n * O(n)) -- still need to iterate through the whole thing mostly
// NOT ANSWER: O(n * log(n)) -- would need to remove more data

// ANSWER: 0(n^2) or "polynomial" -- though the interior loops work is not precisely increasing by n,
// we still see enough of an increase as the array gets bigger to effectively group this
// with polynomial time

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
  let result = []
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0)
    } else if (i === 2) {
      result.push(1)
    } else {
      result.push(result[i - 2] + result[i - 3])
    }
  }
  return result
}

// ANSWER: O(n) or "linear" - a single for loop will run and will process an event for
// however big the num provided is, so if num = 1 then the loop runs once. If the number
// is 100 it runs 100 iterations.

// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search,
// above. Assume that the input array is always sorted. What is the Big O of the following algorithm?
// Explain your answer

function efficientSearch(array, item) {
  let minIndex = 0
  let maxIndex = array.length - 1
  let currentIndex
  let currentElement

  while (minIndex <= maxIndex) {
    // [1, 2, 3, 4]
    currentIndex = Math.floor((minIndex + maxIndex) / 2) // arr[1] = 2
    currentElement = array[currentIndex]

    if (currentElement < item) {
      minIndex = currentIndex + 1
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1
    } else {
      return currentIndex
    }
  }
  return -1
}

// ANSWER: O(log(n)) or "logarithmic" - This binary search is removing half of the search results
// each time it iterates until it finds the correct item. That means as the array increases, the time
// taken to find the item will not actually increase by as drastic an amount compared to checking each
// and every element in the array

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ANSWER: O(1) or "constant" - No matter the size of the array, a single action takes place when the
// function runs

// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false
  }
  return true
}

// ANSWER: 
// - What it does: Checks if n is a prime number, given a positive integer greater than 2. Returns true if
// n is prime and returns false otherwise.
// - O(n) or "linear" - While the initial check is constant for non-integers or numbers less than 2, the 
// remainder of the algorithm will linearly increase as each prime number grows, requiring a check of each
// number leading up to the n itself

// 11. Tower of Hanoi
// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. 
// The puzzle starts with the disks neatly stacked in ascending order of size on one rod, 
// the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod 
// (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, 
// on top of the other disks that may already be present on that rod. iii) 
// A larger disk may not placed on top of a smaller disk
/* Input:

Rod A	| Rod B |	Rod C
----		
---------		
-------------		

Output:

Rod A |	Rod B	| Rod C
                ----
                ---------
                -------------
*/
// 1) Derive an algorithm to solve the Tower of Hanoi puzzle.
// 2) Implement your algorithm using recursion. 
// Your program should display each movement of the disk from one rod to another.
// 3) If you are given 5 disks, how do the rods look like after 7 recursive calls?
// 4) How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// 5) What is the runtime of your algorithm?

// ANSWER: 
// 1) 