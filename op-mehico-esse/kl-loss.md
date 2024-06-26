# KL-Divergence Loss

## Expectation

```meth
\displaystyle
\mathbb E_{x \sim p}[f(x)] 
= \sum_x p(x) f(x)
```

Sum prob weighted $f$ of $x$,
$f(x)$ could be id function,
$f(x) = x$.

$x$ follows prob dist $p$.


## Self-information

```meth
\mathbb I(p) = -\log p(x)
 ```

## Entropy

```meth
\displaystyle
\mathbb H(p) = 
\mathbb E_{x \sim p}[\mathbb I(p)]
= - \sum_x p(x) \log p(x)
```

Sum prob weighted self-info.


## Cross-entropy


```meth
\displaystyle
\mathbb H(p,q) = 
\mathbb E_{x \sim p}[\mathbb I(q)]
= - \sum_x p(x) \log q(x)
```

Sum prob $p$ weighted $\mathbb I$ of $q$.

Note that,
$x$ follows $p$ in $\mathbb E$,
$x$ follows $q$ in $\mathbb I$.



## KL-divergence


```meth
\begin{aligned}

& \mathbb D_{KL}(p||q) = 
\mathbb H(p,q) - \mathbb H(p)

\\[10px] &=

\mathbb E_{x \sim p}[\mathbb I(q)] 
- \mathbb E_{x \sim p}[\mathbb I(p)]

\\[10px] &=

- \sum p \log q + \sum p \log p
\\[10px] &=
\sum (p \log p - p \log q)
\\[10px] &=
\sum p \log \frac{p}{q}
\\[10px] &=
\mathbb E_{x \sim p}[\log \frac{p}{q}]
\\[10px] &=
\mathbb E_{x \sim p}[\log p - \log q]

\end{aligned}
```



## KL-divergence for univariate normal distribution


https://statproofbook.github.io/P/norm-kl.html

$\mathbb E$ is linear operator,
$x$ follows $p$ for $\mathbb E$.

```meth
p: x \sim \mathbb N(\mu_1, \sigma_1^2)
\\[5px]
q: x \sim \mathbb N(\mu_2, \sigma_2^2)
```

```meth
<> \text{ denotes } \mathbb E_{x \sim p}
\\[5px]
\langle x \rangle = \mu_1
\\[5px]
\langle x^2 \rangle = \mu_1^2 + \sigma_1^2
```
The last equation,
see the book
*Math and Architectures of Deep Learning
by Krishnendu Chaudhury*

```meth
\sigma^2 =
\mathbb E\Big[(x-\mu)^2\Big]

\\[5px]

= \mathbb E(x^2)+ \mathbb E(\mu^2)-\mathbb E(2\mu x)

\\[5px]

= \mathbb E(x^2)+\mu^2-2\mu \mathbb E(x)

\\[5px]

= \mathbb E(x^2)+\mu^2-2\mu^2

```

```meth
\begin{aligned}

& \mathbb D_{KL}(p||q) = \int p \log \frac{p}{q}dx

\\[10px] &=
\int \mathbb N_1 \log \frac{\mathbb N_1}{\mathbb N_2} dx

\\[10px] &=
\Big\langle \log \frac{\mathbb N_1}{\mathbb N_2} \Big\rangle

\\[10px] &=
\Big\langle\log\frac{\frac{1}{\sqrt{2π}σ_1}\exp[-\frac{1}{2}(\frac{x-μ_1}{σ_1})^2]}
{\frac{1}{\sqrt{2π}σ_2}\exp[-\frac{1}{2}(\frac{x-μ_2}{σ_2})^2]}\Big\rangle

\\[10px] &=
\Big\langle\log\big[(\frac{σ_1}{σ_2})^{-1}\exp(-\frac{1}{2}…+\frac{1}{2}…)\big]\Big\rangle

\\[10px] &=
\frac{1}{2}\Big[-\langle\log\frac{σ_1^2}{σ_2^2}\rangle-\frac{\langle(x-μ_1)^2\rangle}{σ_1^2}+\frac{\langle x^2+μ_2^2-2x μ_2\rangle}{σ_2^2}\Big]

\\[10px] &=
\frac{1}{2}\Big[-\log\frac{σ_1^2}{σ_2^2}-1+\frac{\langle x^2\rangle+\langle μ_2^2\rangle-\langle 2xμ_2\rangle}{σ_2^2}\Big]

\\[10px] &=
\frac{1}{2}\Big[-\log\frac{σ_1^2}{σ_2^2}-1+\frac{μ_1^2+ σ_1^2+μ_2^2-2μ_1μ_2}{σ_2^2}\Big]

\\[10px] &=
\frac{1}{2}\Big[-\log\frac{σ_1^2}{σ_2^2}-1+\frac{σ_1^2}{σ_2^2}+ \frac{(μ_1-μ_2)^2}{σ_2^2}\Big]

\end{aligned}
```



## KL-divergence for multivariate normal distribution 

https://statproofbook.github.io/P/mvn-kl.html









<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js" integrity="sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd" crossorigin="anonymous"></script>
<script src="https://cainy19com.github.io/katex/format.js"><script>












