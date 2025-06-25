

let poll = new Map()

let addOption = (option) => {
  if(!option) {
    return "Option cannot be empty."
  }
  if(!poll.has(option)) {
    poll.set(option, new Set())
    return `Option "${option}" added to the poll.`
  } else {
    return `Option "${option}" already exists.`
  }
}

let vote = (option, voterId) => {
  if(!poll.has(option)) {
    return `Option "${option}" does not exist.`
  } else {
    if(poll.get(option).has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`
    } else {
      poll.get(option).add(voterId)
      return `Voter ${voterId} voted for "${option}".`
    }
  }
}

let displayResults = () => {
  const p = Array.from(poll.entries());
  let result = 'Poll Results:\n'
  for(let i = 0; i < p.length - 1; i++) {
    const [key, [...value]] = p[i];
    result += `${key}: ${value.length} votes\n`
  }
  const [key, [...value]] = p[p.length - 1];
  result += `${key}: ${value.length} votes`
  return result
}
console.log("------------------------")
console.log(addOption('Turkey'))
console.log(addOption('France'))
console.log(addOption('Spain'))
console.log(addOption('Spain'))
console.log(addOption('Germany'))

console.log(vote('Turkey', 23))
console.log(vote('Turkey', 5))
console.log(vote('Turkey', 35))
console.log(vote('Germany', 1))
console.log(vote('Spain', 15))
console.log(vote('France', 19))
console.log(vote('Spain', 5))
console.log(vote('Germany', 16))
console.log(vote('Spain', 35))
console.log(vote('France', 39))
console.log(vote('France', 50))
console.log(vote('Germany', 10))

console.log("----------------------")
console.log(displayResults())



