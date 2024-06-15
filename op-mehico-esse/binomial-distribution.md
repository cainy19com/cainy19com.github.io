# Binomial Distribution

https://www.mathsisfun.com/data/binomial-distribution.html

---

3 tosses of coin,
which is $2^3=8$ numbers of combinations,
how many of them have 2 heads?

This is the formula.

```meth
\displaystyle
\binom n x =
\frac{n!}{x!(n-x)!}

\\[10px]

\displaystyle
\binom 3 2 =
\frac{3!}{2!\cdot (3-2)!} = 3
```

---

What is the probability
of having 2 heads
out of all combinations in 3 tosses?

This is the formula.

In a simpe fair coin toss,
chance of success is 50 50,
this formula also takes care of 
uneven probability.

```meth
\displaystyle
\binom n x
p^x
(1-p)^{n-x}
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

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js" integrity="sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd" crossorigin="anonymous"></script>
<script src="https://cainy19com.github.io/katex/format.js"><script>

