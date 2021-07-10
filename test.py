# reversing a string
def reverse(s):
    if len(s) == 1:
        return s
    return reverse(s[1:]) + s[0]


# test for a prime number
def is_prime(n):
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n ** 0.5) + 1, 2):
        if n % i == 0:
            return False
    return True


print(is_prime(13))

# give prime factors of a number :)
def prime_factors(n):
    factors = []
    d = 2
    while n > 1:
        while n % d == 0:
            factors.append(d)
            n /= d
        d = d + 1
        if d * d > n:
            if n > 1:
                factors.append(n)
            break
    return set(factors)


# Give cyclic permuatation of a string :)
def cyclic_permutation(s):
    if len(s) == 1:
        return s
    permutations = []
    for i in range(len(s)):
        permutations.extend(cyclic_permutation(s[:i] + s[i + 1 :]))
    return permutations


# return nth prime number :)
def nth_prime(n):
    count = 0
    i = 1
    while count < n:
        i += 1
        if is_prime(i):
            count += 1
    return i


# return nth fibonacci number :)
def nth_fibonacci(n):
    if n == 1:
        return 1
    if n == 2:
        return 1
    return nth_fibonacci(n - 1) + nth_fibonacci(n - 2)


print(prime_factors(13))
print(prime_factors(1000))
print(cyclic_permutation("abc"))
nth_prime(10001)
nth_fibonacci(100)
reverse("reverse")


def runtime():
    import time

    start = time.time()
    print(nth_fibonacci(20))
    end = time.time()
    print(end - start)


# Test for the is_palindrome function :)
def is_palindrome(s):
    if len(s) <= 1:
        return True
    if s[0] == s[-1]:
        return is_palindrome(s[1:-1])
    return False


is_palindrome("aba")
