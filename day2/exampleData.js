const exampleData = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]

export default exampleData.map(e => e.split(" ")).map(e => [e[0], parseInt(e[1])]);