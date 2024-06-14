This (mehico) esse is about correlation.

The start-somewhere starts from there...

---

Google search, found this article, really good.

Children-friendly, great temperature & ice-cream example, clearly explained.

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

What is the history of the corelation formula?

What is the intuition behind it?

Why is it strutured this way?

Why corrlation, covariance and variance
are related this way?

Good search, some good answers.

https://stats.stackexchange.com/a/635640
https://www.mathsisfun.com/algebra/vectors-dot-product.html

---

x is temperature,
y is ice cream sale.

See both as vector,
and vector as point
in high dimensional space.

Cosine angle between 
the two vectors
can be seen as
a measure of corelation.


```math
\displaylines{
x, y \\
\mu_x, \mu_y \\
a = x - \mu_x \\
b = y - \mu_y \\
a^2, b^2, ab \\
cor = \frac{\sum ab}{\sqrt{\sum a^2\sum b^2}} \\
cor = \frac{cov N}{\sqrt{var_aN var_bN}} \\
cor = \frac{cov}{\sigma_a\sigma_b} \\

}
```

cor is sigma product scaled covariance 
