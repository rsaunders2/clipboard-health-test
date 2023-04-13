const dpk_test = require("./dpk");

test('deterministicPartitionKey should return a defined candidate', () => {
    expect(deterministicPartitionKey().toBeDefined())
})

test('Event should should be defined', () => {
    expect(event.toBeDefined())
})

test('Candidate should be defined', () => {
    expect(candidate.toBeDefined())
})

test('Candidate should be a string', () => {
    expect(candidate.toBeInstanceOf(String))
})