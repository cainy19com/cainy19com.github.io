# Gaussian PDF

Symmetric,
central values more likely,
and smooth.

Its history has something to do
with approximate gambling probability
and finding the error curve.

---

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

---

Multivariate

```meth
\displaystyle
\frac{1}{\sqrt{(2\pi)^N \det\Sigma}}
e^{\frac{-(x-\mu)^T(x-\mu)}{2\Sigma}}
```

The similarity against
the 1D memory-friendly version
can still be seen.

Apart from variance became covariance matrix,
$2\pi$ is raised to
$N$th (dimension of vector) power.

There are also determinant and transpose.

This form is however
unlikely to be easily understood,
and possibly not even correct.

---

https://www.mathsisfun.com/algebra/matrix-determinant.html

https://www.quora.com/What-does-the-determinant-of-a-matrix-mean/answer/Sridhar-Ramesh

https://www.quora.com/What-does-the-determinant-of-a-matrix-mean/answer/Eric-Platt-9

https://en.wikipedia.org/wiki/Standard_score

https://en.wikipedia.org/wiki/Mahalanobis_distance

---

```meth
p(x;\mu,\sigma^2)=
\displaystyle
\frac{1}{\sigma\sqrt{2\pi}}
e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}

\\[5px]

p(x;\mu,\Sigma)=
\displaystyle
\frac{1}{\sqrt{(2\pi)^N|\Sigma|}}
e^{-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu)}

\\[5px]

X \sim \mathcal N(\mu,\sigma^2)

\\[5px]

X \sim \mathcal N(\mu,\Sigma)
```

---

The simplest case, from the link.

Covariance matrix is diagonal.

https://cs229.stanford.edu/section/gaussians.pdf

```meth

(x-\mu)^T\Sigma^{-1}(x-\mu)

\\[10px]

x = \begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}

,\

\mu = \begin{bmatrix}
\mu_1 \\
\mu_2
\end{bmatrix}

,\

\Sigma = \begin{bmatrix}
\sigma_1^2 & 0\\
0 & \sigma_2^2
\end{bmatrix}

\\[10px]

\begin{bmatrix}
x_1 - \mu_1\\
x_2 - \mu_2
\end{bmatrix}^T

\begin{bmatrix}
\frac 1 {\sigma_1^2} & 0\\
0 & \frac 1 {\sigma_2^2}
\end{bmatrix}

\begin{bmatrix}
x_1 - \mu_1\\
x_2 - \mu_2
\end{bmatrix}

\\[10px]

\begin{bmatrix}
x_1 - \mu_1 &
x_2 - \mu_2
\end{bmatrix}

\begin{bmatrix}
a(x_1-\mu_1)\\
b(x_2 - \mu_2)
\end{bmatrix}

\\[10px]

\begin{bmatrix}
a(x_1-\mu_1)^2 + b(x_2 - \mu_2)^2
\end{bmatrix}
```

For 3 variable non-diagonal,
it can quickly get complicated.

There will be combinations like
$(x_1-\mu_1)(x_2-\mu_2)$
other than simply one of them squared,
and their coefficients
also as combinations of products of sigmas...

---

By the clarity of this example,
here are some observations.

On the exponent.

In 1D,
first get the raw error,
then compare it to stddev,
to get a score,
then squared.

In 2D and above,
first get error vector,
then linear transform it by $\Sigma^{-1}$,
before dot product (in matrix)
with the error vector,
to get a measure of agreement or score (between vectors).

The geometric intuition
and answers to these questions
is the next step of understanding.

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js" integrity="sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd" crossorigin="anonymous"></script>
<script src="https://cainy19com.github.io/katex/format.js"><script>

