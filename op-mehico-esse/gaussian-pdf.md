# Gaussian PDF

1D normal pdf is "extremely" memorizable,
if viewed in this manner,
inspired by a Desmos graph.

From quadratic to bell curve.

```meth
x^2 \\[5px]
-x^2 \\[5px]
e^{-x^2}
```

Now we have the similar shape.

Only some shift and scale are needed.

```meth
\displaystyle
\frac{1}{\sqrt{2\sigma^2\pi}}
e^{\frac{-(x-\mu)^2}{2\sigma^2}}
```

It's still the negative quadratic
on the exponent,
only shifted by mean
and scaled by $2\sigma^2$.

The whole function
is also scaled by $2\sigma^2$,
with an extra $\pi$.

---

How to derive the formula?

https://notarocketscientist.xyz/posts/2023-01-27-how-gauss-derived-the-normal-distribution/

This article says
Gauss's train of thought
from astronomy observation errors
point of view
is both more natural and easier to understand.

I did not follow the derivation,
but it does seem natural
why $e$ and $\pi$ both showed up
in the formula,
if the skip
from likelihood to log likelihood
is well explained,
which isn't.

The history offers
a peace of mind
and some confidence,
for what I want is to understand
the multivariate formula.

---

&gt;= 2D

```meth
\displaystyle
\frac{1}{\sqrt{(2\pi)^N \det\Sigma}}
e^{\frac{-(x-\mu)^T(x-\mu)}{2\Sigma}}
```

The similarity from
the 1D memory-friendly version
can still be seen.

Apart from variance became covariance matrix,
$2\pi$ is raised to $N$th power.

There are also determinant and transpose.

This form is unlikely to be easily understood.

https://www.mathsisfun.com/algebra/matrix-determinant.html

---

<link rel="stylesheet" href="https://cainy19com.github.io/katex/katex.min.css">
<script src="https://cainy19com.github.io/katex/katex.min.js"></script>
<script src="https://cainy19com.github.io/katex/format.js"><script>

