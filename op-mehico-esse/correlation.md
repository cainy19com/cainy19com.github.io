# Correlation

This log is about correlation.

The start-somewhere starts from there...

---

Google search, found this article, really good.

Children-friendly, great temperature & ice cream example, clearly explained.

https://www.mathsisfun.com/data/correlation.html

---

From the formula presented in the article,
one can see glimpse of covariance and variance.

Same site has both.

https://www.mathsisfun.com/data/covariance.html

https://www.mathsisfun.com/data/standard-deviation.html

---

What is the history of the correlation formula?

What is the intuition behind it?

Why is it structured this way?

Why correlation, covariance and variance
are related as such?

Google search, a good answer.

https://stats.stackexchange.com/a/635640

---

The key insight from the answer is vector dot product.

Covariance is like dot product
of two vectors scaled by $N$.

Variance is like dot product
of one vector with itself scaled by $N$.

https://www.mathsisfun.com/algebra/vectors-dot-product.html

---

An example inspired by above process.

$x$ is temperature,
$y$ is ice cream sale,
$\mu$ is mean.

```meth
x = (30, 31, 32, 33, 34, 35) \\[5px]
y = (100, 150, 200, 250, 300, 350)
```

```meth
\large

x, y \\[5px]
\mu_x, \mu_y \\[5px]
a = x - \mu_x \\[5px]
b = y - \mu_y \\[5px]
a^2, b^2, ab \\[5px]
Cor = \displaystyle\frac{\sum ab}{\sqrt{\sum a^2\sum b^2}} \\[5px]
Cor = \displaystyle\frac{Cov N}{\sqrt{Var_xN Var_yN}} \\[5px]
Cor = \displaystyle\frac{Cov}{\sigma_x\sigma_y} \\[5px]
```

Cor is product-of-stddev (variance sqrt)
scaled/normalized Cov.

stddev is actually vector length
scaled by $\sqrt N$.

See $x,y,a,b$ as vectors,
and think vectors as points in high dimensional space.

Cosine of angle between the two vectors
can be seen as a measure of correlation.

Correlation formula is really just
finding the cosine of the angle
between two vectors.

Cosine range from $-1$ to $1$,
naturally normalized.

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js" integrity="sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd" crossorigin="anonymous"></script>
<script src="https://cainy19com.github.io/katex/format.js"><script>
