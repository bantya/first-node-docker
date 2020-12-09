exports.primes = num => {
    var count = 0;

    for (var i = 1; i <= num; i++) {
        if (num % i == 0)
            count++;
    }

    if (count == 2) {
        return 'Prime number';
    }

    return 'Non a prime number';
}
