# Binomial Distribution

$3$ tosses of a fair coin,
which is $2^3=8$ combinations,
how many of them have $2$ heads?

The formula.

```meth
\large
\displaystyle
\binom n x =
\frac{n!}{x!(n-x)!}

\\[10px]

\displaystyle
\binom 3 2 =
\frac{3!}{2!\cdot (3-2)!} = 3
```

https://www.mathsisfun.com/data/binomial-distribution.html

---

What is the probability
of having $2$ heads in a combination 
out of all combinations in $3$ tosses?

The probability formula.

```meth
\large
\displaystyle
\binom n x
p^x
(1-p)^{n-x}

\\[10px]

\displaystyle
3 \cdot
(\frac{1}{2})^2 \cdot
(1-\frac{1}{2})^{3-2}
= \frac{3}{8}
```

$n$ is number of trials,
each trail has 2 (bi) outcomes.

$x$ is number of success,
$n-x$ is number of failure.

$p$ is probability of success,
$1-p$ is prob of failure.

Each trial is independent,
or $p$ is constant for all trails.

---

```meth
\large
\displaystyle
\binom n x

\\[10px]

p^x
(1-p)^{n-x}
```

First half calculates
the number of outcomes
that we want.

Second half calculates
the probability of
having one of those outcomes.

Because the only difference
of each combination
is the order (of heads and tails),
the probability of that combination
is the same.

So we just multiply the two.

Maths is fun link explains quite well.

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js" integrity="sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd" crossorigin="anonymous"></script>
<script src="https://cainy19com.github.io/katex/format.js"><script>

