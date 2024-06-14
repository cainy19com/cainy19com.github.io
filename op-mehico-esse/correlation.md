# Correlation

This (mehico) esse is about correlation.

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

Double check the formulas presented on the website.

https://www.google.com/search?q=correlation+formula

https://www.google.com/search?q=covariance+formula

https://www.google.com/search?q=variance+formula

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

https://www.mathsisfun.com/algebra/vectors-dot-product.html

---

An example inspired by above process.

```meth
x = (30, 31, 32, 33, 34, 35) \\[5px]
y = (100, 150, 200, 250, 300, 350)
```

$x$ is temperature,
$y$ is ice cream sale,
$\mu$ is mean.

```meth
x, y \\[5px]
\mu_x, \mu_y \\[5px]
a = x - \mu_x \\[5px]
b = y - \mu_y \\[5px]
a^2, b^2, ab \\[5px]
Cor = \frac{\sum ab}{\sqrt{\sum a^2\sum b^2}} \\[5px]
Cor = \frac{Cov N}{\sqrt{Var_xN Var_yN}} \\[5px]
Cor = \frac{Cov}{\sigma_x\sigma_y} \\[5px]
```

Cor is product-of-stddev (variance sqrt) scaled Cov.

See $x,y,a,b$ as vectors,
and think vectors as points in high dimensional space.

Cosine of angle between the two vectors
can be seen as a measure of correlation.

Correlation formula is really just
finding the cosine of the angle
between two vectors.

Cosine range from -1 to 1,
naturally normalized.

---

<link rel="stylesheet" href="katex/katex.min.css">
<script src="katex/katex.min.js"></script>
<script src="katex/format.js"><script>
