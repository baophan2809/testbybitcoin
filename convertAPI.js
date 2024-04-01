const data = `n2Lf5V1GVKzZgWYeRs	c2KHxUJBM5v6mrb8vuFl0lPntBEwhx93hOi9
LCAs9EdGjbKt0JsroJ	7mugtnxEwzRApU4bhkKg3V3aamIEMZdRxC2e
l5flwKMMtK0XbfC0GV	bwyXSwvtSsAQaasNYEetU4y6G9A109JgEle2
kMDXXvyTmEj6eruAQx	Qk7xAm7kyAABnIqCDeqX0r6dADEwvuUKXqge
heHq7EhniSA4xCVnaV	X5SCqfofrsZnOQXx8jXcvXSEO98F8GSrC3pZ
gd3IgZQwuahIhpSmdI	JzXxNQk4GZVBCdD4zPratiex4x53ftOtOoOM`;

const dataArray = data.split('\n').map(line => {
    const [apiKey, secretKey] = line.split('\t');
    return { apiKey, secretKey };
});

console.log(dataArray);
